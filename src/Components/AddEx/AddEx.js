import React, { useState } from 'react';
import { Grid, TextField, Button, Container, Snackbar } from '@material-ui/core';
import Alert from 'react-bootstrap/Alert'
import './AddEx.css'
import { storeRef,db } from '../../config/fire';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
const AddEx = (props) => {
    const [question, setquestion] = useState('');
    const [answer, setanswer] = useState('');
    const [Op1, setOp1] = useState('');
    const [Op2, setOp2] = useState('');
    const [Op3, setOp3] = useState('');
    const [Op4, setOp4] = useState('');
    const [open, setOpen] = React.useState(false);
    const [color, setcolor] = useState("primary");
    const [flage, setflage] = useState(true);
    const [image, setimage] = useState('');
    const [imageURl, setimageURl] = useState('');

    if (image) {
        console.log("Being")
        var uploadTask = storeRef.ref(`Ex/${image.name}`).put(image)
        uploadTask.on('state_changed', () => { },
            (error) => {
                console.log(error)
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then((d) => {
                    console.log(d)
                    setimageURl(d)
                })
            }
        )
    }

    const handleOnClick = (e) => {
        e.preventDefault();
        if (flage) {
            x.push(Op1)
            x.push(Op2)
            x.push(Op3)
            x.push(Op4)
            // console.log(x)
            setcolor("")

            db.collection(`${props.value}/Ex/1`)
                .add({
                    Q: question,
                    Op: x,
                    answer: answer,
                    Img :imageURl
                })
            console.log("add data")
            setOpen(true);
            setflage(false);
        }
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    var x = []

    return (
        <Container id = "cont-addEx">
            <form onSubmit={handleOnClick}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <input type="file" onChange={e => setimage(e.target.files[0])} />
                    <TextField
                        id="standard-full-width"
                        label="Question"
                        style={{ margin: 8 }}
                        placeholder="Question"
                        // helperText="Full width!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        id="q"
                        onChange={(e) => { setquestion(e.target.value) }}
                    />
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <TextField  id="outlined-basic" label="الاختيار الاول" variant="outlined" onChange={(e) => setOp1(e.target.value)} />
                        <TextField style={{ margin: 8 }} id="outlined-basic" label="الاختيار الثاني" variant="outlined" onChange={(e) => setOp2(e.target.value)} />

                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >

                        <TextField   id="outlined-basic" label="الاختيار الثالث" variant="outlined" onChange={(e) => setOp3(e.target.value)} />
                        <TextField style={{ margin: 8 }} id="outlined-basic" label="الاختيار الرابع" variant="outlined" onChange={(e) => setOp4(e.target.value)} />
                    </Grid>

                    <TextField id="outlined-basic" label="الاجابه الصحيحه" variant="outlined" onChange={(e) => { setanswer(e.target.value) }} />
                    <Button variant="contained" style={{ margin: 12 }} tybe="submit" color={color}
                        onClick={handleOnClick}
                    >
                        save
                </Button>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        {/* <Alert onClose={handleClose} severity="success">
                            This is a success message!
                        </Alert> */}
                        <Alert onClose={handleClose} variant="success">
                            <CheckCircleOutlineIcon /> تم اضافة السؤال
                        </Alert>
                    </Snackbar>
                </Grid>
            </form>

        </Container>

    );
}

export default AddEx;
