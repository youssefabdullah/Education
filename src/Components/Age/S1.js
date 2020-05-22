import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { fire } from '../../config/fire'
import Login from '../Login/Login'
import "./Age.css"
const S1 = () => {
    const [stage, setstage] = useState('');

    useEffect(() => {

        fire.auth().onAuthStateChanged(function (user) {
            if (user) {
                setstage("Logggein")
            } else {
                console.log('No user Login');
                setstage("NoLogggein")
            }
        })
    }, []);
    return (
        <div>
            {
                stage === "Logggein" &&
                (<Grid
                    container
                    direction="column"
                    justify="space-around"
                    alignItems="center"

                >
                    <Button variant="contained" color="primary" style={{ marginTop: 50, fontSize: 30, padding: 20 }}>
                        <NavLink id="nav-train" to="/Sec1/Exapmles"> التمارين</NavLink>
                    </Button>
                    <Button variant="contained" color="primary" style={{ marginTop: 50, fontSize: 30, padding: 20, marginBottom: 30 }}>
                        <NavLink id="nav-train" to="/ExS1"> الامتحان</NavLink>
                    </Button>
                </Grid>)}

            {
                stage === "NoLogggein" && (<Login />)
            }
        </div>
    );
}

export default S1;
