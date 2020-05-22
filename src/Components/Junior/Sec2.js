import React, { useState, useEffect, useCallback } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Paper, TableCell, TableContainer, Table, TableHead, Button, Grid, CircularProgress, TableRow, TableBody } from '@material-ui/core';
import { db ,fire,userRef } from '../../config/fire';
import Questionbox from '../Question/Questionbox';
import "./Junior.css"
var x = 0
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
const Sec2 = () => {
    const [value, setvalue] = useState('');
    const [score, setscore] = useState(0);
    const [togle, settogle] = useState(false);
    const [loading, setloading] = useState(false)   
    const [flat, setflat] = useState([]);

    const [Id, setId] = useState('');
    const [name, setname] = useState('');
    const [student, setstudent] = useState([]);
    useEffect(() => {

        fire.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user.email);
                console.log(user.uid)
               
                userRef.child(user.uid).once('value', (snapshot) => {
                    console.log(snapshot.val().fristName)
                    setname(snapshot.val().fristName)
    
                })
                //get Name
                // setstage("Logggein")
                setId(user.uid)
                console.log(Id)
                db.collection('Sec2/Ex/2').onSnapshot(snapshot => {
                    const Student = [];
                    snapshot.forEach(doc => {
                        const data = doc.data();
                        // console.log(data)
                        // data['id'] = doc.id
                        if(data.id==user.uid){
                            settogle(true)
                            console.log(data.id)
                            setscore(data.score)
                        }
                        console.log(data.id)
                        console.log(Id)
                        Student.push(data)
                    })
                    
                    setstudent(Student)
                    
                })
            } else {
                console.log('No user Login');
                // setstage("NoLogggein")
            }
        })
    }, []);

    useEffect(() => {
        db.collection('Sec2/Ex/1')
            .get().then(snapshot => {
                const Flat = [];
                snapshot.forEach(doc => {
                    const data = doc.data();
                    // console.log(data)
                    data['id'] = doc.id
                    Flat.push(data)
                })
                setflat(Flat)
                setloading(true)
            })
            .catch(e => {
                console.log(e)
                setloading(false)
            })

    }, []);

    const computeAnswer = (answer, correct) => {
        if (answer === correct) {
            // setscore(score + 1)
            x = x + 1

        }

    }

    const handelOnClick = () =>{
        setscore(x)
        console.log(x)
        settogle(true)
        db.collection('Sec2/Ex/2')
            .add({
                id: Id,
                score: x,
                name: name
            })
        console.log("add data")
    }
    // const CulScore = (s)=>{
    //     console.log(s)
    // }
    console.log(flat)

    return (
        <div >
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {
                    loading === false &&
                    (
                        <CircularProgress />
                    )
                }
            </Grid>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                {
                    togle === false && loading === true &&
                    flat.map(ex => {
                        return (
                            <div id="card-cont" key={Math.random()}>
                                <Questionbox Img = {ex.Img} Q={ex.Q} Op={ex.Op} answer={ex.answer} selected={answers => computeAnswer(answers, ex.answer)} />
                            </div>
                        )
                    })
                }
            </Grid>
            {
                togle === true && (
                    <div style={{ margin: 50, fontSize: 20 }}>
                        <div className="cont-quiz">
                            -Quize-
                        </div>
                       <div className="score-len"> {score}/{flat.length}</div>
                        <div>
                            <TableContainer component={Paper}>
                                <Table aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>Name</StyledTableCell>
                                            <StyledTableCell align="right">Score</StyledTableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {student.map((row) => (
                                            <StyledTableRow key={Math.random()}>
                                                <StyledTableCell component="th" scope="row">
                                                    {row.name}
                                                </StyledTableCell>
                                                <StyledTableCell align="right">{row.score}</StyledTableCell>

                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                )
            }
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {
                    togle === false && loading === true && (
                        <Button variant="contained" color="primary" onClick={handelOnClick}>
                            save
                        </Button>)}
            </Grid>
        </div >
    );
}

export default Sec2;
