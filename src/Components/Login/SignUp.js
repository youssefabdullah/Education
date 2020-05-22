import React, { useState ,useEffect } from 'react'
import Container from '@material-ui/core/Container';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { NavLink } from 'react-router-dom'
import { fire , userRef } from '../../config/fire'
import './SignUp.css'
import SignupAPI from '../../Api/SignupAPI';
import Alert from 'react-bootstrap/Alert'
import Snackbar from '@material-ui/core/Snackbar';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState(0)
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [mobile, setmobile] = useState('');
    const [admin, setadmin] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handlOnSubmit = async () => {
        const res = SignupAPI(email, password, firstName, lastName,mobile,false)
        if (res === true) {
            console.log('Sign up Successfull')
            setOpen(true);
        } else if (res === false) {
            console.log('Sign up NOT Successfull')
        }
        setOpen(true);
    }
    useEffect(() => {
        fire.auth().onAuthStateChanged(function (user) {
          if (user) {
            console.log(user.email);
            userRef.child(user.uid).once('value', (snapshot) => {
              console.log(snapshot.val().admin)
             setadmin(snapshot.val().admin)
          })
          //get Name
            
          } else {
            console.log('No user Login');
            
          }
        })
      }, [])
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <Container maxWidth="sm"  id="jo-login">
                <br />
                <Grid container item xs={12} justify="center" spacing={2} >
                    <Grid container item xs={12} justify="center">
                        <VpnKeyIcon fontSize="large" id="signin-icon" />
                    </Grid>
                    <Grid container item xs={12} justify="center">
                        <h1 id = "signin-title">Sign Up</h1>
                    </Grid>
                    <Grid container item  justify="space-evenly"  >
                        <TextField id="outlined-basic" color="primary" label="First Name" variant="outlined" value={firstName} onChange={(e) => setfirstName(e.target.value)} />
                        <TextField id="outlined-basic" color="primary" label="Last Name" variant="outlined" value={lastName} onChange={(e) => setlastName(e.target.value)} />
                    </Grid>
                    <Grid container item xs={12}  justify="space-evenly"  >
                        <TextField id="outlined-basic" color="primary" label="Email" variant="outlined" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextField id="outlined-basic" color="primary" label="Mobile" variant="outlined" type="number" value={mobile} onChange={(e) => setmobile(e.target.value)} />
                    </Grid>
                    <Grid container item xs={12} justify="center"  >
                        <TextField id="outlined-basic" color="primary" label="Passwaord" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Grid>
                    <Grid container item justify="center" spacing={3}>
                        <Button variant="contained"  id="btn-signin" onClick={handlOnSubmit} >Sign in</Button>
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
