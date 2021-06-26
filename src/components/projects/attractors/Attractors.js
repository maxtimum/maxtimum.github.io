import React, { useEffect, useState } from 'react';

import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import {
    Button, Select, MenuItem, FormControl, InputLabel, Grid, Slide, Typography,
    Switch, Divider, FormControlLabel, IconButton, Paper
} from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SettingsIcon from '@material-ui/icons/Settings'

import Lorenz from './Lorenz';
import Thomas from './Thomas';
import Aizawa from './Aizawa'

function Attractors() {
    document.title = "~/p/strange-attractors"
    const [gridVisibility, setGridVisibility] = useState(false)
    const [preserveBuffer, setPreserveBuffer] = useState(false)// eslint-disable-next-line
    const [camera, setCamera] = useState(new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000))// eslint-disable-next-line
    const [grid, setGrid] = useState(new THREE.GridHelper(150, 150))
    const [particles, setParticles] = useState(20000)
    const [dt, setDT] = useState(.00125)

    const attractors = [new Lorenz(), new Thomas(), new Aizawa()]
    const [attractor, setAttractor] = useState(attractors[0])

    useEffect(() => {
        const scene = new THREE.Scene();
        grid.visible = false;
        scene.add(grid);
        const renderer = new THREE.WebGLRenderer({ preserveDrawingBuffer: preserveBuffer, antialias: true })
        renderer.autoClearColor = !preserveBuffer;
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.addEventListener('change', () => { renderer.clear() })

        const resizeWindow = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        window.addEventListener('resize', resizeWindow());

        const geometry = new THREE.BufferGeometry();
        const color = new THREE.Color();
        const positions = [];
        const colors = [];
        for (let i = 0; i < particles; i++) {
            let x = (Math.random() * 25) - 25;
            let y = (Math.random() * 25) - 25;
            let z = (Math.random() * 25) - 25;
            color.setRGB(Math.abs(x / 25), Math.abs(y / 25), Math.abs(z / 25));
            if (attractor.constructor.name === 'Aizawa') {
                // really doesn't enjoy z < 0; sort of a hacky fix
                x = (Math.random() * 5) - 5;
                y = (Math.random() * 5) - 5;
                z = (Math.random() * 5);
                color.setRGB(Math.abs(x / 5), Math.abs(y / 5), Math.abs(z / 5));
            }
            positions.push(x, y, z)
            colors.push(color.r, color.g, color.b);
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        const material = new THREE.PointsMaterial({ size: .15, vertexColors: true });
        const points = new THREE.Points(geometry, material);
        scene.add(points);

        const light = new THREE.AmbientLight(0xffffff, 100);
        scene.add(light);
        camera.position.x = attractor.defaultCam.x;
        camera.position.y = attractor.defaultCam.y;
        camera.position.z = attractor.defaultCam.z;
        controls.update();
        var animate = () => {
            requestAnimationFrame(animate);
            attractor.updatePTS(points.geometry.attributes.position.array)
            points.geometry.attributes.position.needsUpdate = true;
            // console.log(camera.position)
            controls.update();
            renderer.render(scene, camera);
        };
        animate();
        return () => {
            geometry.dispose()
            material.dispose()
            renderer.dispose()
        }
    }, [preserveBuffer, particles, grid, camera, dt, attractor])

    document.addEventListener('attractor_updated', (e) => {
        const idx = e.detail.idx
        const p = e.detail.p
        if (idx === 0) {
            attractors[0] = new Lorenz(p, dt)
            setAttractor(attractors[0])
        } else if (idx === 1) {
            attractors[1] = new Thomas(p, dt)
            setAttractor(attractors[1])
        } else if (idx === 2) {
            attractors[2] = new Aizawa(p, dt)
            setAttractor(attractors[2])
        }
    })

    const updateAttractor = (e) => {
        setAttractor(attractors[e.target.value])
    }
    const updateParticleCount = (event) => {
        setParticles(event.target.value);
    };
    const updateTimeStep = (event) => {
        setDT(event.target.value);
    };
    const updateGrid = () => {
        setGridVisibility(!grid.visible);
        grid.visible = !grid.visible
    }
    const [options, setOptionsOpen] = useState(false)
    return (
        <div>
            <div id='options' style={{ position: 'absolute', right: '5px', top: '0px' }}>
                <Paper style={{ position: 'absolute', right: '5px', top: '0px' }}>
                    <IconButton onClick={() => setOptionsOpen(!options)}>
                        {options ? <><ChevronRightIcon /><SettingsIcon /></> : <><ChevronLeftIcon /><SettingsIcon /></>}
                    </IconButton>
                </Paper>
                <Slide direction='left' in={options} mountOnEnter unmountOnExit>
                    <Paper style={{ position: 'absolute', top: '52px', right: '5px', width: '500px', overflow: 'hidden' }}>
                        <Grid container direction='column' style={{ padding: '.85rem' }}>
                            <Grid item xs={12} style={{ marginBottom: '4px' }}>
                                <FormControl
                                    fullWidth
                                >
                                    <InputLabel>ATTRACTOR</InputLabel>
                                    <Select
                                        value={attractor.idx}
                                        onChange={updateAttractor}
                                    >
                                        <MenuItem value={0}>LORENZ</MenuItem>
                                        <MenuItem value={1}>THOMAS</MenuItem>
                                        <MenuItem value={2}>AIZAWA</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item container spacing={1}>
                                {attractor.getInfoPanel()}
                            </Grid>
                            <Divider style={{ marginTop: '4px', marginBottom: '4px' }}></Divider>

                            <Grid item>
                                <Grid item container spacing={1}>
                                    <Grid item xs={8}>
                                        <Typography>Chooses how many particles to render your scene with.
                                            If the FPS is low, try setting this to a lower value.</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl
                                            fullWidth
                                        >
                                            <InputLabel>PARTICLES</InputLabel>
                                            <Select
                                                value={particles}
                                                onChange={updateParticleCount}
                                            >
                                                <MenuItem value={10000}>10000</MenuItem>
                                                <MenuItem value={20000}>20000</MenuItem>
                                                <MenuItem value={30000}>30000</MenuItem>
                                                <MenuItem value={50000}>50000</MenuItem>
                                                <MenuItem value={100000}>100000</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Divider style={{ marginTop: '4px', marginBottom: '4px' }}></Divider>

                            <Grid item>
                                <Grid item container spacing={1}>
                                    <Grid item xs={8}>
                                        <Typography>Chooses what dt is set to for the equations.
                                            If FPS is low, try setting this to a&nbsp;higher value.</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl
                                            fullWidth
                                        >
                                            <InputLabel>TIMESTEP</InputLabel>
                                            <Select
                                                value={dt}
                                                onChange={updateTimeStep}
                                            >
                                                <MenuItem value={.000625}>.000625</MenuItem>
                                                <MenuItem value={.00125}>.00125</MenuItem>
                                                <MenuItem value={.0025}>.005</MenuItem>
                                                <MenuItem value={.005}>.05</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Divider style={{ marginTop: '4px', marginBottom: '4px' }}></Divider>

                            <Grid item>
                                <Grid item container spacing={1}>
                                    <Grid item xs={8}>
                                        <Typography>Sets whether old pixels are cleared before the next frame is drawn.</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControlLabel
                                            control={<Switch checked={preserveBuffer} onChange={() => setPreserveBuffer(!preserveBuffer)}></Switch>}
                                            label={<Typography style={{ fontSize: '.875rem' }}>TOGGLE BUFFER</Typography>}
                                            labelPlacement='start'
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Divider style={{ marginTop: '4px', marginBottom: '4px' }}></Divider>

                            <Grid item>
                                <Grid item container spacing={1}>
                                    <Grid item xs={8}>
                                        <Typography>Toggles visibility of gridlines.</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControlLabel
                                            control={<Switch checked={gridVisibility} onChange={updateGrid}></Switch>}
                                            label={<Typography style={{ fontSize: '.875rem' }}>TOGGLE GRID</Typography>}
                                            labelPlacement='start'
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Divider style={{ marginTop: '4px', marginBottom: '4px' }}></Divider>

                            <Grid item>
                                <Grid item container spacing={1}>
                                    <Grid item xs={8}>
                                        <Typography>Resets the camera position/rotation.</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button fullWidth onClick={() => camera.position.set(attractor.defaultCam.x, attractor.defaultCam.y, attractor.defaultCam.z)}>Zero Camera</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Slide>
            </div>
        </div >
    );
}

export default Attractors;
