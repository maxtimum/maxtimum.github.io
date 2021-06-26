import { Grid, Typography, Link, TextField, Button } from "@material-ui/core"
function updateParams(event) {
    event.preventDefault()
    const f = new FormData(event.target)
    const res = { sigma: Number(f.get('sigma')), beta: Number(f.get('beta')), rho: Number(f.get('rho')) }
    document.dispatchEvent(new CustomEvent('attractor_updated', { detail: { idx: 0, p: res } }))
}
export default class Lorenz {
    constructor(params = { sigma: 10, rho: 28, beta: 8.0 / 3.0 }, dt = .00125) {
        this.params = params
        this.dt = dt
    }
    updatePTS(positions) {
        for (let i = 0; i < positions.length; i += 3) {
            // console.log(i, positions[i], positions[i + 1], positions[i + 2])
            const _x = positions[i]
            const _y = positions[i + 1]
            const _z = positions[i + 2]

            const dx = (this.params.sigma * (_y - _x)) * this.dt;
            const dy = ((_x * (this.params.rho - _z)) - _y) * this.dt
            const dz = ((_x * _y) - (this.params.beta * _z)) * this.dt

            positions[i] += dx
            positions[i + 1] += dy
            positions[i + 2] += dz
        }
    }

    getInfoPanel() {
        return (<>
            <Grid item xs={8}>
                <Typography>Sigma, beta, and rho are parameters for the Lorenz attractor ({<Link href='https://en.wikipedia.org/wiki/Lorenz_system' target='_blank' rel="noreferrer">Wikipedia</Link>})</Typography>
                <Typography>Try changing them and click 'update params' to restart the simulation!</Typography>
                <Typography>dx/dt = sigma*(y-x)</Typography>
                <Typography>dy/dt = x*(rho-z) - y</Typography>
                <Typography>dz/dt = x*y - beta*z</Typography>
            </Grid>
            <Grid item xs={4}>
                <form onSubmit={updateParams}>
                    <TextField name='sigma' defaultValue={this.params.sigma} inputProps={{ type: 'number', step: 'any' }} label='SIGMA' />
                    <TextField name='beta' defaultValue={this.params.beta} inputProps={{ type: 'number', step: 'any' }} label='BETA' />
                    <TextField name='rho' defaultValue={this.params.rho} inputProps={{ type: 'number', step: 'any' }} label='RHO' />
                    <Button fullWidth type='submit'>UPDATE PARAMS</Button>
                </form>
            </Grid>
        </>
        )
    }
}
