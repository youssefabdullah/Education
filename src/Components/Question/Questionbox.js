import React, { useState } from 'react';
import { Button, styled, Container, Grid } from '@material-ui/core';
import './Question.css'

const Questionbox = (props) => {
    const [color, setcolor] = useState("#33383b");
    const [options, setOptions] = useState(props.Op);
    const [flag, setFlag] = useState(true);


    return (
        <Container id="cont-question">
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >

                {props.Img === "" &&
                    (
                        <div >
                            <h2 style={{ marginBottom: 50 }}>{props.Q}</h2>
                        </div>
                    )}
                {props.Q === "" &&
                    (
                        <div id="img-question">
                            <img src={props.Img} alt="" />
                        </div>
                    )}
                {props.Img != "" && props.Q != "" &&
                    (
                        <div>
                            <div id="img-question">
                                <img src={props.Img} alt="" />
                            </div>
                            <div>
                                <h1 style={{ marginBottom: 50 }}>{props.Q}</h1>
                            </div>
                        </div>
                    )}
            </Grid>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
            >
                {
                    options.map((text) => (
                        <Button id="q-op" variant="contained" key={Math.random()} style={{ background: color, color: "#fff" ,margin: 15 }} onClick={() => {
                            if (flag) {
                                var x = text
                                setOptions([x])
                                props.selected(text)
                                if (text === props.answer) {
                                    setcolor("rgb(113, 245, 6)")
                                } else {
                                    setcolor("red")
                                }
                                setFlag(false)
                            }
                        }
                        }>
                            {text}
                        </Button>
                    ))
                }
            </Grid>
        </Container>
    );
}

export default Questionbox;
{/* <Button variant="contained" color="primary" onClick = {()=> props.selected(props.Op1)} >
                {props.Op1}
            </Button>
            <Button variant="contained" color="primary" onClick = {()=> props.selected(props.Op2)}>
                {props.Op2}
            </Button>
            <Button variant="contained" color="primary"onClick = {()=> props.selected(props.Op3)}>
                {props.Op3}
            </Button>
            <Button variant="contained" color="primary"onClick = {()=> props.selected(props.Op4)}>
                {props.Op4}
            </Button> */}