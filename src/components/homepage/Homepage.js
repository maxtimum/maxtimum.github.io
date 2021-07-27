import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { Grid, Collapse, Typography, Link as HLink, IconButton } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import LinkIcon from '@material-ui/icons/Link';
import InfoIcon from '@material-ui/icons/Info';

function Homepage() {
    const projects = [
        {
            title: 'cicd pipeline', tech: ['Node.js', 'Express', 'SQL', 'Python'],
            info: [
                'capstone project w/team of four',
                'user defines multistage CI/CD pipeline for their repository',
                'integrated w/GitHub for automatic execution of pipeline on changes'
            ]
        },
        {
            title: 'strange attractors', tech: ['React', 'three.js'],
            info: [
                'particle simulation of the chaotic behaviour seen in strange attractors'
            ]
            , link: '/p/strange-attractors'
        },
        {
            title: 'covid19 impact', tech: ['SQL', 'Power BI'],
            info: [
                'wrote queries & reports to analyze, predict, and visualize covid19 impact on CHCW appointments'
            ]
        }
    ]
    const work = [
        {
            title: 'software engineer',
            company: 'us cellular',
            date: 'jun 2021 → current'
        },
        {
            title: 'cs/math tutor',
            company: 'bellevue college',
            date: 'sep 2020 → jun 2021'
        },
        {
            title: 'analytics intern',
            company: 'community health of central wa',
            date: 'jun 2020 → sep 2020'
        }
    ]
    const theme = createMuiTheme({
        typography: {
            body1: {
                fontFamily: ['HKGroteskLight'],
                fontSize: 'clamp(100%, 2vw, 18px);'
            },
            subtitle1: {
                fontFamily: ['HKGroteskExtraLightItalic']
            },
            h3: {
                fontFamily: ['HKGroteskSemiBold'],
                fontSize: 'clamp(100%, 12vw, 56px)'
            },
            h4: {
                fontFamily: ['HKGroteskSemiBold'],
                fontSize: 'clamp(28px, 6vw, 40px)'
            },
            h6: {
                fontFamily: ['HKGroteskRegular']
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <Grid container direction='column' spacing={0}
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
                            {work.map((x) => {
                                return (
                                    <>
                                        <Typography variant='h4' >{x.title}</Typography>
                                        <Typography variant='subtitle1'>{x.company}</Typography>
                                        <Typography variant='subtitle1'>{x.date}</Typography>
                                    </>
                                )
                            })}
                        </Grid>
                    </Grid>
                    {Spacer()}
                    {/* projects & circle svg */}
                    <Grid item xs={12} container style={{ background: 'linear-gradient(270deg, #fa9ca8, #1a1a1a)' }}>
                        <Grid item xs={12}>
                            <Typography variant='h4' >projects</Typography>
                        </Grid>
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
                                <Typography variant='h4'>contact</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='body1'>
                                    <HLink href='https://www.linkedin.com/in/maxtimum/' target='_blank' style={{ color: '#fff' }}>linkedin</HLink>
                                </Typography>
                                <Typography variant='body1'>
                                    <HLink href='mailto:max.0peters1@gmail.com' target='_blank' style={{ color: '#fff' }}>email</HLink>
                                </Typography>

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
    const techUsed = <Typography variant='subtitle1'>{p.tech.join(' · ')}</Typography>
    const linkOrNothing = p.link ?
        <Link className='link-hover' to={p.link} target='_blank' style={{ textDecoration: 'none' }}>
            <IconButton size='small' color='inherit'>
                <LinkIcon />
            </IconButton>
        </Link>
        : ''

    return (
        <Grid item xs={12} >
            <Grid container style={{ width: '100%' }} alignItems='center'>
                <Grid item>
                    <Typography variant='h6'>
                        {p.title}
                    </Typography>
                </Grid>

                <Grid item>
                    <IconButton size='small' color='inherit' className='is-dropdown' onClick={() => setInfoPanel(!infoPanel)}>
                        <InfoIcon />
                    </IconButton>
                </Grid>

                <Grid item>
                    {linkOrNothing}
                </Grid>

                <Grid item xs={12} style={{ width: '100%' }}>
                    {techUsed}
                </Grid>

                <Grid item xs={12}>
                    <Collapse in={infoPanel} style={{ backgroundColor: '#000000', opacity: '75%' }}>
                        {p.info.map((i) => {
                            return (
                                <Typography variant='body1' style={{ opacity: '100%' }}>
                                    • {i}
                                </Typography>
                            )
                        })}
                    </Collapse>
                </Grid>
            </Grid>
        </Grid >
    )
}
export default Homepage;