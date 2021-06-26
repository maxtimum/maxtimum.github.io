import { Grid, Typography, Link, TextField, Button } from "@material-ui/core"
function updateParams(event) {
    event.preventDefault()
    const f = new FormData(event.target)
    const res = { b: Number(f.get('b')) }
    document.dispatchEvent(new CustomEvent('attractor_updated', { detail: { idx: 1, p: res } }))
}
export default class Thomas {
    constructor(params = { b: .208186 }, dt = .00125) {
        this.idx = 1
        this.params = params
        this.dt = 10 * dt
        this.defaultCam = { x: 0, y: 0, z: 30 }
    }
    updatePTS(positions) {
        for (let i = 0; i < positions.length; i += 3) {
            const _x = positions[i]
            const _y = positions[i + 1]
            const _z = positions[i + 2]

            const dx = (Math.sin(_y) - (this.params.b * _x)) * this.dt;
            const dy = (Math.sin(_z) - (this.params.b * _y)) * this.dt
            const dz = (Math.sin(_x) - (this.params.b * _z)) * this.dt

            positions[i] += dx
            positions[i + 1] += dy
            positions[i + 2] += dz
        }
    }

    getInfoPanel() {
        return (<>
            <Grid item xs={8}>
                <Typography>B is the only parameter for the Thomas cyclically symmetric attractor ({<Link href='https://en.wikipedia.org/wiki/Thomas%27_cyclically_symmetric_attractor' target='_blank' rel="noreferrer">Wikipedia</Link>})</Typography>
                <Typography>Try changing it and click 'update params' to restart the simulation!</Typography>
                <Typography>dx/dt = sin(y) - b*x</Typography>
                <Typography>dy/dt = sin(z) - b*y</Typography>
                <Typography>dz/dt = sin(x) - b*z</Typography>
            </Grid>
            <Grid item xs={4}>
                <form onSubmit={updateParams}>
                    <TextField name='b' defaultValue={this.params.b} inputProps={{ type: 'number', step: 'any' }} label='B' />
                    <Button fullWidth type='submit'>UPDATE</Button>
                </form>
            </Grid>
        </>
        )
    }
}
