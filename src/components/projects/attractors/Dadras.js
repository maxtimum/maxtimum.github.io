import { Grid, Typography, TextField, Button } from "@material-ui/core"
function updateParams(event) {
    event.preventDefault()
    const f = new FormData(event.target)
    const res = {
        a: Number(f.get('dadras_a')), b: Number(f.get('dadras_b')), c: Number(f.get('dadras_c')),
        d: Number(f.get('dadras_d')), e: Number(f.get('dadras_e'))
    }
    document.dispatchEvent(new CustomEvent('attractor_updated', { detail: { idx: 3, p: res } }))
}
export default class Dadras {
    constructor(params = { a: 3, b: 2.7, c: 1.7, d: 2, e: 9 }, dt = .00125) {
        this.idx = 3
        this.params = params
        this.dt = dt
        this.defaultCam = { x: 0, y: 0, z: 50 }
    }
    updatePTS(positions) {
        for (let i = 0; i < positions.length; i += 3) {
            const _x = positions[i]
            const _y = positions[i + 1]
            const _z = positions[i + 2]

            const dx = (_y - (this.params.a * _x) + (this.params.b * _y * _z)) * this.dt;
            const dy = ((this.params.c * _y) - (_x * _z) + _z) * this.dt
            const dz = ((this.params.d * _x * _y) - (this.params.e * _z)) * this.dt

            positions[i] += dx
            positions[i + 1] += dy
            positions[i + 2] += dz
        }
    }

    getInfoPanel() {
        return (<>
            <Grid item xs={8}>
                <Typography>The Dadras attractor has 5 parameters, a-e! It is quite energetic and very pretty.</Typography>
                <Typography>Try changing them and click 'update params' to restart the simulation!</Typography>
                <Typography>dx/dt = y - a*x  + b*y*z</Typography>
                <Typography>dy/dt = c*y - x*z + z</Typography>
                <Typography>dz/dt = d*x*y - e*z</Typography>
            </Grid>
            <Grid item xs={4}>
                <form onSubmit={updateParams}>
                    <TextField name='dadras_a' defaultValue={this.params.a} inputProps={{ type: 'number', step: 'any' }} label='A' />
                    <TextField name='dadras_b' defaultValue={this.params.b} inputProps={{ type: 'number', step: 'any' }} label='B' />
                    <TextField name='dadras_c' defaultValue={this.params.c} inputProps={{ type: 'number', step: 'any' }} label='C' />
                    <TextField name='dadras_d' defaultValue={this.params.d} inputProps={{ type: 'number', step: 'any' }} label='D' />
                    <TextField name='dadras_e' defaultValue={this.params.e} inputProps={{ type: 'number', step: 'any' }} label='E' />
                    <Button fullWidth type='submit'>UPDATE</Button>
                </form>
            </Grid>
        </>
        )
    }
}
