import React, { useState, useEffect } from 'react';
import Logo from '../../Img/dcc32744-b37a-4e56-a317-1e1bf266dd0e.jpg'
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import './Nav.css'
import { fire, userRef } from '../../config/fire';
import { Grid } from '@material-ui/core';

export default function Nav() {
    const [stage, setstage] = useState('');
    const [name, setname] = useState('');
    const [admin, setadmin] = useState(false);
    useEffect(() => {

        fire.auth().onAuthStateChanged(function (user) {
            if (user) {
                // console.log(user.email);
                userRef.child(user.uid).once('value', (snapshot) => {
                    // console.log(snapshot.val().fristName)
                    setname(snapshot.val().fristName)
                    setadmin(snapshot.val().admin)

                })
                //get Name
                setstage("Logggein")
            } else {
                // console.log('No user Login');
                setstage("NoLogggein")
            }
        })
    }, []);
    return (
        <div className="nav-bar">
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
            >

                <div>
                    <NavLink to='/' id="nav-btn" >  <img src={Logo} alt='logo' className='Logo' /></NavLink>
                </div>
                {/* <NavLink to='/' id="nav-btn" >  <Button id="btn-nav" color="inherit" > Home  </Button> </NavLink>
                <Button id="btn-nav" color="inherit" > Aboute  </Button> */}

                {stage === "NoLogggein" &&
                    (
                        <NavLink to="/login" id="nav-btn">  <Button id="btn-nav" color="inherit" > login  </Button></NavLink>
                    )
                }

                {stage === "Logggein" && admin === true &&
                    (<div>
                        <NavLink to="/addEx" id="nav-btn"><Button id="btn-nav" color="inherit" > Add Ex  </Button></NavLink>
                        <NavLink to='/' id="nav-btn" > <Button id="btn-nav" color="inherit" style={{ color: "#fff" }}> {name} <AccountCircleSharpIcon /> </Button></NavLink>
                        <NavLink id="nav-btn" to="/">
                            <Button id="btn-nav" color="inherit" style={{ color: "#fff", backgroundColor: "#c68f10", marginLeft: 12 }} onClick={e => fire.auth().signOut()}> sign Out  </Button>

                        </NavLink>
                    </div>)
                }
                {stage === "Logggein" && admin === false &&
                    (<div>
                        
                        <NavLink to='/' id="nav-btn" > <Button id="btn-nav" color="inherit" style={{ color: "#fff" }}> {name} <AccountCircleSharpIcon /> </Button></NavLink>
                        <NavLink id="nav-btn" to="/">
                            <Button id="btn-nav" color="inherit" style={{ color: "#fff", backgroundColor: "#c68f10", marginLeft: 12 }} onClick={e => fire.auth().signOut()}> sign Out  </Button>

                        </NavLink>
                    </div>)
                }
            </Grid>
        </div>
    );
}