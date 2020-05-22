import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button, Container, Snackbar } from '@material-ui/core';
import Alert from 'react-bootstrap/Alert'
import './AddEx.css'
import { storeRef,db } from '../../config/fire';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
const AddExample = (props) => {
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
    const [example, setexample] = useState([]);

    useEffect(()=>{

        db.collection(`${props.value}`).get().then(snapshot =>{
            const Example = [];
            snapshot.forEach(doc =>{
                const data = doc.data()
                data['id']=doc.id
                Example.push(data)
                console.log(doc)
            })
            console.log(Example)
            setexample(Example[0])
            
        }).catch(e => console.log(e))

    },[])
    console.log(example)
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
            setcolor("default")
           
           
            db.collection(`${props.value}`).doc(`${example.id}`).update({
                num: example.num +1
            })

            db.collection(`${props.value}/Example${example.num}/1`)
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
    console.log(example.length)
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

export default AddExample;
