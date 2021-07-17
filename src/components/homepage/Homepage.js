import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { Grid, Collapse, Typography } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
function Homepage() {
    const projects = [
        {
            title: 'cicd pipeline', tech: ['nodeJS', 'Express', 'SQL', 'Python'],
            info: ['capstone :)', 'next line']
        },
        {
            title: 'strange attractors', tech: ['ReactJS', 'threeJS'],
            info: ['capstone :)', 'next line'], link: '/p/strange-attractors'
        },
        {
            title: 'covid19 impact', tech: ['SQL', 'Power BI'],
            info: []
        }
    ]

    const theme = createMuiTheme({
        typography: {
            body1: {
                fontFamily: ['HKGroteskLight']
            },
            subtitle1: {
                fontFamily: ['HKGroteskExtraLightItalic']
            },
            h3: {
                fontFamily: ['HKGroteskSemiBold'],
                fontSize: 'clamp(48px, 50px, 50px)'
            },
            h4: {
                fontFamily: ['HKGroteskSemiBold'],
                fontSize: 'clamp(28px, 34px, 36px)'
            },
            h6: {
                fontFamily: ['HKGroteskRegular']
            }
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <Grid container direction='row' spacing={0}
                style={{
                    width: '70%', position: 'absolute', left: '15%',
                    paddingTop: '2em', paddingBottom: '2em'
                }}
            >
                {/* content here */}
                <Grid item container direction='column' justify='center' xs={12}>
                    {/* name / work, always visible */}
                    <Grid item style={{ textAlign: 'right', background: 'linear-gradient(90deg, #5421d4, #1a1a1a)' }}>
                        <Grid item xs={12}>
                            <Typography variant='h3' >Max Peters</Typography>
                            <Typography variant='h4' >software&nbsp;engineer</Typography>
                            <Typography variant='subtitle1'>us&nbsp;cellular</Typography>
                            <Typography variant='subtitle1'>jun 2021 → current</Typography>

                            <Typography variant='h4'>cs/math&nbsp;tutor</Typography>
                            <Typography variant='subtitle1'>bellevue&nbsp;college</Typography>
                            <Typography variant='subtitle1'>sep 2020 → jun 2021</Typography>
                        </Grid>
                    </Grid>
                    {Spacer()}
                    {/* projects & circle svg */}
                    <Grid item xs={12} container style={{ background: 'linear-gradient(270deg, #fa9ca8, #1a1a1a)' }}>
                        <Typography variant='h4' >projects</Typography>
                        {projects.map((p) => {
                            return (
                                Project(p)
                            )
                        })}
                    </Grid>
                    {Spacer()}
                    {/* contact info */}
                    <Grid item container style={{ textAlign: 'right', background: 'linear-gradient(90deg, #1213f2 , #1a1a1a)' }}>
                        <Grid item container xs={12}>
                            <Grid item xs={12}>
                                <Typography variant='h4' >contact</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Link><Typography>resume</Typography></Link>
                                <Link><Typography>linkedin</Typography></Link>
                                <Link><Typography>email</Typography></Link>
                                <Link><Typography>github</Typography></Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider >
    )
}
function Spacer() {
    return (
        <Grid item xs={12} style={{ minHeight: '5vh', backgroundColor: '#1a1a1a' }}>
        </Grid>
    )

}
function Project(p) {
    const [infoPanel, setInfoPanel] = useState(false)
    const techUsed = (<Typography variant='subtitle1'>{p.tech.join(', ')}</Typography>)
    const linkOrNothing = p.link ? <Link to={p.link} target='_blank' style={{ textDecoration: 'none' }}>🡥</Link> : ''
    return (
        <Grid item xs={12} >
            {p.info[0] ?
                <>
                    <Typography className='is-dropdown' variant='h6' onClick={() => setInfoPanel(!infoPanel)}>
                        {p.title} 🛈 {linkOrNothing}
                    </Typography>
                    {techUsed}
                    <Collapse in={infoPanel}>
                        {p.info.map((i) => {
                            return (
                                <Typography variant='body1'>
                                    {i}
                                </Typography>
                            )
                        })}
                    </Collapse>
                </>
                :
                <>
                    <Typography variant='h6'>{p.title} {linkOrNothing}</Typography>
                    {techUsed}
                </>
            }
        </Grid>
    )
}
export default Homepage;