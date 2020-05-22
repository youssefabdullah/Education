import React, { useState } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { fire } from '../../config/fire'
import './Login.css'
import Alert from 'react-bootstrap/Alert'
import Snackbar from '@material-ui/core/Snackbar';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
export default function Login() {
    const [Email, setEmail] = useState('')
    const [open, setOpen] = React.useState(false);
    const [Password, setPassword] = useState(0)
    function login() {
        const email = Email
        const password = Password
        fire.auth().signInWithEmailAndPassword(email, password)
            .then((u) => {
                console.log('Successfully login')
            })
            .catch((e) => console.log(e.toString()))
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <Container maxWidth="sm" id="jo-login" >
                <br />
                <Grid container item xs={12} justify="center" spacing={3} >

                    <Grid container item xs={12} justify="center">
                        <LockOpenIcon fontSize="large" id="signin-icon" />
                    </Grid>
                    <Grid container item xs={12} justify="center">
                        <h1 id = "signin-title">-Sign In-</h1>
                    </Grid>
                    <Grid container item xs={12} justify="center"  >
                        <TextField id="outlined-basic"  color="primary"  label="Email" variant="outlined" type="email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                    </Grid>
                    <Grid container item xs={12} justify="center"  >
                        <TextField id="outlined-basic" color="primary" label="Passwaord" variant="outlined" type="password" value={Password} onChange={(e) => setPassword(e.target.value)} />
                    </Grid>
                    <Grid container item justify="center" spacing={3}>
                        <Button variant="contained" color="primary" id="btn-signin" onClick={login} >Sign In</Button>
                        <NavLink to="/signUp"><Button variant="contained" color="primary" id="btn-signin" >Sign Up</Button></NavLink>
                    </Grid>
                </Grid>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        {/* <Alert onClose={handleClose} severity="success">
                            This is a success message!
                        </Alert> */}
                        <Alert onClose={handleClose} variant="success">
                           <CheckCircleOutlineIcon/> Thank you to Sign Up :) 
                        </Alert>
                    </Snackbar>
            </Container>
        </div>
    )
}