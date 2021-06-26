import { Grid, Typography, Link, TextField, Button } from "@material-ui/core"
function updateParams(event) {
    event.preventDefault()
    const f = new FormData(event.target)
    const res = { alpha: Number(f.get('chen_alpha')), beta: Number(f.get('chen_beta')), delta: Number(f.get('chen_delta')) }
    document.dispatchEvent(new CustomEvent('attractor_updated', { detail: { idx: 4, p: res } }))
}
export default class Chen {
    constructor(params = { alpha: 5, beta: -10, delta: -.38 }, dt = .00125) {
        this.idx = 4
        this.params = params
        this.dt = dt
        this.defaultCam = { x: 0, y: 0, z: 50 }
    }
    updatePTS(positions) {
        for (let i = 0; i < positions.length; i += 3) {
            const _x = positions[i]
            const _y = positions[i + 1]
            const _z = positions[i + 2]

            const dx = ((this.params.alpha * _x) - (_y * _z)) * this.dt;
            const dy = ((this.params.beta * _y) + (_x * _z)) * this.dt
            const dz = ((this.params.delta * _z) + (_x * _y / 3.0)) * this.dt

            positions[i] += dx
            positions[i + 1] += dy
            positions[i + 2] += dz
        }
    }

    getInfoPanel() {
        return (<>
            <Grid item xs={8}>
                <Typography>The Chen attractor is a double scroll chaotic attractor, which were first observed electronic circuits with nonlinear resitors({<Link href='https://en.wikipedia.org/wiki/Multiscroll_attractor#Lu_Chen_attractor' target='_blank' rel="noreferrer">Wikipedia</Link>})</Typography>
                <Typography>Try changing them and click 'update params' to restart the simulation!</Typography>
                <Typography>dx/dt = sigma*(y-x)</Typography>
                <Typography>dy/dt = x*(rho-z) - y</Typography>
                <Typography>dz/dt = x*y - beta*z</Typography>
            </Grid>
            <Grid item xs={4}>
                <form onSubmit={updateParams}>
                    <TextField name='chen_alpha' defaultValue={this.params.alpha} inputProps={{ type: 'number', step: 'any' }} label='ALPHA' />
                    <TextField name='chen_beta' defaultValue={this.params.beta} inputProps={{ type: 'number', step: 'any' }} label='BETA' />
                    <TextField name='chen_delta' defaultValue={this.params.delta} inputProps={{ type: 'number', step: 'any' }} label='DELTA' />
                    <Button fullWidth type='submit'>UPDATE</Button>
                </form>
            </Grid>
        </>
        )
    }
}
