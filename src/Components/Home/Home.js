import React, { useState, useEffect } from 'react'
import './Home.css'
import Slider from '../Carousel/Slider'
import Cards from '../Cards/Cards'
import { Button, Grid, Container } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
export default function Home() {
    const [time, settime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
    var updatedMs = time.ms,updatedS = time.s ,updatedM = time.m,updatedH = time.h;

    const start = () =>{
        run();
        setInterval(run,10)
    }
    const run =()=>{
        if(updatedM === 60){
            updatedH++
            updatedM = 0 ;
        }
        if(updatedS === 60){
            updatedM++
            updatedS = 0 ;
        }
        if(updatedMs === 100){
            updatedS++
            updatedMs= 0 ;
        } 
        updatedMs++;
        return settime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH })
    }
    return (
        <div>
            <Slider />
            {/* <Cards/> */}
            <Container>
            <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="center"
                spacing={3}
            >
                <Grid item xs={12}>
                    {/* <span> {time.h} </span>&nbsp;:&nbsp;
                    <span> {time.m} </span>&nbsp;:&nbsp;
                    <span> {time.s} </span>&nbsp;:&nbsp;
                    <span> {time.ms} </span>&nbsp;:&nbsp;
                    <button onClick={start}>start</button> */}
                </Grid>
                <Grid item xs={12}>
                    <NavLink id="navlink" to="/Junior1">  <Button id="btn-age" variant="contained">الصف الرابع الابتدائي</Button></NavLink>
                </Grid>
                <Grid item xs={12}>
                    <NavLink id="navlink" to="/Junior2">  <Button id="btn-age" variant="contained">الصف الخامس الابتدائي</Button></NavLink>
                </Grid>
                <Grid item xs={12}>
                    <NavLink id="navlink" to="/Junior3"> <Button id="btn-age" variant="contained">الصف السادس الابتدائي</Button></NavLink>
                </Grid>
                <Grid item xs={12}>
                    <NavLink id="navlink" to="/Sec1">  <Button id="btn-age" variant="contained">الصف الاول الاعدادي</Button></NavLink>
                </Grid>
                <Grid item xs={12}>
                    <NavLink id="navlink" to="/Sec2"> <Button id="btn-age" variant="contained">الصف الثاني الاعدادي</Button></NavLink>
                </Grid>
                <Grid item xs={12}>
                    <NavLink id="navlink" to="/Sec3"> <Button id="btn-age" variant="contained">الصف الثالث الاعدادي</Button></NavLink>
                </Grid>

            </Grid>
            </Container>

        </div>
    )
}
