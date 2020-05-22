import React, { useEffect } from 'react';

import { db, fire, userRef } from '../../config/fire';
import { useState } from 'react';
import Questionbox from '../Question/Questionbox';
import { Button, Grid, CircularProgress} from '@material-ui/core';
var x = 0
const SingleExample = (props) => {
    // console.log(props.match.path.split("/"))

    const [Id, setId] = useState('');
    const [name, setname] = useState('');
    const [oldScore, setoldScore] = useState(0);
    const [score, setscore] = useState(0);
    const [togle, settogle] = useState(false);
    const [loading, setloading] = useState(false)
    const [flat, setflat] = useState([]);
    const [student, setstudent] = useState([]);

    var startCollection = props.match.path.split("/")
    var ExampleNumber = props.match.params.past_id

    useEffect(() => {

        fire.auth().onAuthStateChanged(function (user) {
            if (user) {
                // console.log(user.email);
                // console.log(user.uid)

                userRef.child(user.uid).once('value', (snapshot) => {
                    // console.log(snapshot.val().fristName)
                    setname(snapshot.val().fristName)

                })
                //get Name
                // setstage("Logggein")
                setId(user.uid)
                // console.log(Id)
                db.collection(`${startCollection[1]}/${ExampleNumber}/2`).onSnapshot(snapshot => {
                    const Student = [];
                    snapshot.forEach(doc => {
                        const data = doc.data();
                        // console.log(data)
                        // data['id'] = doc.id
                        if (data.id == user.uid) {
                            settogle(true)
                            // console.log(data.id)
                            setscore(data.score)
                        }
                        // console.log(data.id)
                        // console.log(Id)
                        Student.push(data)
                    })

                    setstudent(Student)

                })
            } else {
                // console.log('No user Login');
                // setstage("NoLogggein")
            }
        })
    }, []);

    useEffect(() => {
        // console.log(props.match.params.past_id)

        db.collection(`${startCollection[1]}/${ExampleNumber}/1`)
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
                // console.log(e)
                setloading(false)

            })

    }, []);

    const computeAnswer = (answer, correct) => {
        if (answer === correct) {
            // setscore(score + 1)
            x = x + 1

        }

    }
    const handelOnClick = () => {
        setscore(x)
        // console.log(x)
        settogle(true)
        db.collection(`${startCollection[1]}/${ExampleNumber}/2`)
            .add({
                id: Id,
                score: x,
                name: name
            })
        // console.log("add data")
    }

    // console.log(flat)
    return (
        <div>

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

            {
                togle === false && loading === true &&

                flat.map(ex => {
                    return (
                        <div id="card-cont" key={Math.random()}>
                            <Questionbox Img={ex.Img} Q={ex.Q} Op={ex.Op} answer={ex.answer} selected={answers => computeAnswer(answers, ex.answer)} />
                        </div>
                    )
                })
            }

            {
                togle === true && (
                    <div style={{ margin: 50, fontSize: 20 }}>
                        <div className="cont-quiz">
                            -{ExampleNumber}-
                        </div>
                        <div className="score-len"> {score}/{flat.length}</div> 
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
                        <Button variant="contained" color="primary" style={{ width: 200, padding: 20, fontSize: 20,backgroundColor:"#0C7392" }} onClick={handelOnClick}>
                            save
                        </Button>)}
            </Grid>
        </div>
    );
}

export default SingleExample;
