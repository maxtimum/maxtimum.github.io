import React, { useEffect, useState } from 'react';

import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'stats.js'

import {
  Button, Select, MenuItem, FormControl, InputLabel, Grid, Slide, Typography,
  Switch, TextField, Divider, FormControlLabel, IconButton, Paper, Link
} from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SettingsIcon from '@material-ui/icons/Settings'

function App() {
  const [gridVisibility, setGridVisibility] = useState(false)
  const [preserveBuffer, setPreserveBuffer] = useState(false)
  // eslint-disable-next-line
  const [camera, setCamera] = useState(new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000))
  // eslint-disable-next-line
  const [grid, setGrid] = useState(new THREE.GridHelper(150, 150))
  const [particles, setParticles] = useState(20000)
  const [dt, setDT] = useState(.00125)
  // eslint-disable-next-line
  const [params, setParams] = useState({ sigma: 10, rho: 28, beta: 8.0 / 3.0 })
  useEffect(() => {
    // show stats

    const stats = new Stats()
    // stats.showPanel(0)
    // document.getElementById('stats').appendChild(stats.dom)
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x121212)
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
      const x = (Math.random() * 25);
      const y = (Math.random() * 25);
      const z = (Math.random() * 25);
      positions.push(x, y, z)
      color.setRGB(Math.abs(x / 25), Math.abs(y / 25), Math.abs(z / 25));
      colors.push(color.r, color.g, color.b);
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({ size: .15, vertexColors: true });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // params for lorenz equations
    const sigma = params.sigma
    const rho = params.rho
    const beta = params.beta
    const updatePTS = () => {
      const positions = points.geometry.attributes.position.array;
      points.geometry.attributes.position.needsUpdate = true;

      for (let i = 0; i < positions.length; i += 3) {
        // console.log(i, positions[i], positions[i + 1], positions[i + 2])
        const _x = positions[i]
        const _y = positions[i + 1]
        const _z = positions[i + 2]

        const dx = (sigma * (_y - _x)) * dt;
        const dy = ((_x * (rho - _z)) - _y) * dt
        const dz = ((_x * _y) - (beta * _z)) * dt

        positions[i] += dx
        positions[i + 1] += dy
        positions[i + 2] += dz
      }
    }
    const light = new THREE.AmbientLight(0xffffff, 100);
    scene.add(light);
    camera.position.z = 75;
    camera.position.x = 0;
    camera.position.y = 0;
    controls.update();
    var animate = () => {
      stats.begin()
      requestAnimationFrame(animate);
      updatePTS()
      controls.update();
      renderer.render(scene, camera);
      stats.end()
    };
    animate();
    return () => {
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [preserveBuffer, particles, grid, camera, dt, params])


  const updateParticleCount = (event) => {
    setParticles(event.target.value);
  };
  const updateTimeStep = (event) => {
    setDT(event.target.value);
  };
  const updateParams = (event) => {
    event.preventDefault()
    const f = new FormData(event.target)
    setParams({ sigma: Number(f.get('sigma')), beta: Number(f.get('beta')), rho: Number(f.get('rho')) })
  }
  const updateGrid = () => {
    setGridVisibility(!grid.visible);
    grid.visible = !grid.visible
  }
  const [options, setOptionsOpen] = useState(false)
  return (
    <div>
      <div id='stats' style={{ height: '48px', width: '80px' }}></div>
      <div id='options' style={{ position: 'absolute', right: '5px', top: '0px' }}>
        <Paper style={{ position: 'absolute', right: '5px', top: '0px' }}>
          <IconButton onClick={() => setOptionsOpen(!options)}>
            {options ? <><ChevronRightIcon /><SettingsIcon /></> : <><ChevronLeftIcon /><SettingsIcon /></>}
          </IconButton>
        </Paper>
        <Slide direction='left' in={options} mountOnEnter unmountOnExit>
          <Paper style={{ position: 'absolute', top: '52px', right: '5px', width: '500px', overflow: 'hidden' }}>
            <Grid container direction='column' style={{ padding: '.85rem' }}>
              <Grid item container spacing={1}>
                <Grid item xs={8}>
                  <Typography>Sigma, beta, and rho are parameters for Lorenz equations ({<Link href='https://en.wikipedia.org/wiki/Lorenz_system' target='_blank' rel="noreferrer">Wikipedia</Link>})</Typography>
                  <Typography>Try changing them and click 'update params' to restart the simulation!</Typography>
                  <Typography>dx/dt = sigma*(y-x)</Typography>
                  <Typography>dy/dt = x*(rho-z) - y</Typography>
                  <Typography>dz/dt = x*y - beta*z</Typography>
                </Grid>
                <Grid item xs={4}>
                  <form onSubmit={updateParams}>
                    <TextField name='sigma' defaultValue={params.sigma} inputProps={{ type: 'number', step: 'any' }} label='SIGMA' />
                    <TextField name='beta' defaultValue={params.beta} inputProps={{ type: 'number', step: 'any' }} label='BETA' />
                    <TextField name='rho' defaultValue={params.rho} inputProps={{ type: 'number', step: 'any' }} label='RHO' />
                    <Button fullWidth type='submit'>UPDATE PARAMS</Button>
                  </form>
                </Grid>
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
                    <Typography>Chooses what dt is set to for Lorenz equations.
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
                    <Button fullWidth onClick={() => camera.position.set(0, 0, 75)}>Zero Camera</Button>
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

export default App;
