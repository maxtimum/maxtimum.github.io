import { Grid, Typography, TextField, Button } from "@material-ui/core"
function updateParams(event) {
    event.preventDefault()
    const f = new FormData(event.target)
    const res = {
        a: Number(f.get('a')), b: Number(f.get('b')), c: Number(f.get('c')),
        d: Number(f.get('d')), e: Number(f.get('e')), f: Number(f.get('f'))
    }
    document.dispatchEvent(new CustomEvent('attractor_updated', { detail: { idx: 2, p: res } }))
}
export default class Aizawa {
    constructor(params = { a: 0.95, b: 0.7, c: 0.6, d: 3.5, e: 0.25, f: 0.1 }, dt = .00125) {
        this.idx = 2
        this.params = params
        this.dt = dt
        this.defaultCam = { x: 0, y: 0, z: 15 }
    }
    updatePTS(positions) {
        for (let i = 0; i < positions.length; i += 3) {
            const _x = positions[i]
            const _y = positions[i + 1]
            const _z = positions[i + 2]

            const dx = ((_z - this.params.b) * _x - this.params.d * _y) * this.dt;
            const dy = (this.params.d * _x + (_z - this.params.b) * _y) * this.dt
            const dz_0 = this.params.c + (this.params.a * _z) - (Math.pow(_z, 3) / 3.0)
            const dz_1 = ((_x * _x) + (_y * _y)) * (1 + (this.params.e * _z))
            const dz_2 = this.params.f * _z * Math.pow(_x, 3)
            const dz = (dz_0 - dz_1 + dz_2) * this.dt

            positions[i] += dx
            positions[i + 1] += dy
            positions[i + 2] += dz
        }
    }

    getInfoPanel() {
        return (<>
            <Grid item xs={8}>
                <Typography>The Aizawa attractor has 6 parameters and makes a nice circular pattern. It is a little slow to start!</Typography>
                <Typography>Try changing them and click 'update params' to restart the simulation!</Typography>
                <Typography>dx/dt = (z-b)*x - d*y</Typography>
                <Typography>dy/dt = d*x + (z-b)*y</Typography>
                <Typography>dz/dt = c + a*z - z^3/3 - (x^2 + y^2)*(1 + e*z) + f*z*x^3</Typography>
            </Grid>
            <Grid item xs={4}>
                <form onSubmit={updateParams}>
                    <TextField name='a' defaultValue={this.params.a} inputProps={{ type: 'number', step: 'any' }} label='A' />
                    <TextField name='b' defaultValue={this.params.b} inputProps={{ type: 'number', step: 'any' }} label='B' />
                    <TextField name='c' defaultValue={this.params.c} inputProps={{ type: 'number', step: 'any' }} label='C' />
                    <TextField name='d' defaultValue={this.params.d} inputProps={{ type: 'number', step: 'any' }} label='D' />
                    <TextField name='e' defaultValue={this.params.e} inputProps={{ type: 'number', step: 'any' }} label='E' />
                    <TextField name='f' defaultValue={this.params.f} inputProps={{ type: 'number', step: 'any' }} label='F' />
                    <Button fullWidth type='submit'>UPDATE</Button>
                </form>
            </Grid>
        </>
        )
    }
}
