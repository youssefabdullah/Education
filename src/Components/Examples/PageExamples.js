import React, { useState, useEffect } from 'react';
import { db } from '../../config/fire';
import { Button, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const PageExamples = (props) => {
    const [collecation, setcollecation] = useState(props.match.path.slice(1, props.match.path.length - 9));
    const [num, setnum] = useState(0);
    
    useEffect(() => {
        db.collection(`${collecation}`)
            .get().then(snapshot => {
                const Flat = [];
                snapshot.forEach(doc => {
                    const data = doc.data();
                    // console.log(data)
                    data['id'] = doc.id
                    Flat.push(data)
                    setnum(data.num)
                    console.log(data.num)
                })
               

            })
            .catch(e => {
                console.log(e)

            })

    }, []);
    // console.log(props.match.path.slice(1, props.match.path.length - 9))

    var x = []
    for (var i = 0; i < num; i++) {
        x.push(i)
    }


    return (
        <div>
            <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="center"
            >
                {
                    x.map(z => {
                        // console.log(i)
                        return (

                            <NavLink to={`/${collecation}/Exapmles/Example${z}`} key={Math.random()} style={{ marginBottom: 10, marginTop: 10 }}>
                                <Button variant="contained" color="primary" style={{ width: 200, padding: 20, fontSize: 20,backgroundColor:"#0C7392" }}>
                                    Example {z}
                                </Button>
                            </NavLink>

                        )
                    })
                }
            </Grid>
        </div>
    );
}

export default PageExamples;
