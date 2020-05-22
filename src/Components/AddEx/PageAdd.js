import React, { useState } from 'react';
import { TextField, Button, Grid, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import AddEx from './AddEx';
import AddExample from './AddExample';
import { db } from '../../config/fire';

const PageAdd = () => {
    const [number, setnumber] = useState(0);
    const [togle, setTogle] = useState(false);
    const [ex, setex] = useState([]);
    const [value, setValue] = React.useState('');
    const [exam, setexam] = useState(false);
    const [example, setexample] = useState(false);
    const [date, setdate] = useState('');
    var x = []
    const handleRadioChange = (event) => {
        setValue(event.target.value);
        console.log(value)
    };

    return (
        <div>
            {
                exam === false && example === false && (
                    <Grid
                        container
                        direction="column"
                        justify="space-around"
                        alignItems="center"

                    >
                        <Button variant="contained" color="primary" style={{ marginTop: 50, fontSize: 30, padding: 20 }} onClick={() => {
                            setexam(false)
                            setexample(true)
                        }}>
                            التمارين
                    </Button>
                        <Button variant="contained" color="primary" style={{ marginTop: 50, fontSize: 30, padding: 20, marginBottom: 30 }} onClick={() => {
                            setexam(true)
                            setexample(false)
                        }}>
                            الامتحان
                    </Button>
                    </Grid>
                )
            }
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* Exam  */}
            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            {togle === false && exam === true &&
                (<div style={{ marginTop: 50 }}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <TextField id="outlined-basic" label="عدد الاسئله" type="number" variant="outlined" onChange={(e) => { setnumber(e.target.value) }} />

                        <div style={{marginTop:10, width:250}}>
                            <input
                                className="form-control"
                                value={date}
                                type="datetime-local"
                                onChange={(e) => setdate(e.target.value)}
                            />
                        </div>
                        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                            <FormControlLabel value="Junior1" control={<Radio />} label="الصف الرابع الابتدائي" />
                            <FormControlLabel value="Junior2" control={<Radio />} label="الصف الخامس الابتدائي" />
                            <FormControlLabel value="Junior3" control={<Radio />} label="الصف السادس الابتدائي" />
                            <FormControlLabel value="Sec1" control={<Radio />} label="الصف الاول الاعدادي" />
                            <FormControlLabel value="Sec2" control={<Radio />} label="الصف الثاني الاعدادي" />
                            <FormControlLabel value="Sec3" control={<Radio />} label="الصف الثالث الاعدادي" />
                        </RadioGroup>


                        <Button variant="contained" style={{ margin: 50 }} tybe="submit" color="primary"
                            onClick={() => {
                                for (var i = 0; i < number; i++) {
                                    x.push(i)
                                }
                                setTogle(true)
                                setex(x)
                                db.collection(`${value}/Ex/3`).add({date})
                            }}
                        >
                            save
                        </Button>
                    </Grid>
                </div>)}
            {togle === true && exam === true &&
                ex.map(x => {
                    return (
                        <div key={x}>
                            <AddEx value={value} />
                        </div>
                    )
                })}

            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* Example */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {togle === false && example === true &&
                (<div style={{ marginTop: 50 }}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <TextField id="outlined-basic" label="عدد الاسئله" type="number" variant="outlined" onChange={(e) => { setnumber(e.target.value) }} />

                        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                            <FormControlLabel value="Junior1" control={<Radio />} label="الصف الرابع الابتدائي" />
                            <FormControlLabel value="Junior2" control={<Radio />} label="الصف الخامس الابتدائي" />
                            <FormControlLabel value="Junior3" control={<Radio />} label="الصف السادس الابتدائي" />
                            <FormControlLabel value="Sec1" control={<Radio />} label="الصف الاول الاعدادي" />
                            <FormControlLabel value="Sec2" control={<Radio />} label="الصف الثاني الاعدادي" />
                            <FormControlLabel value="Sec3" control={<Radio />} label="الصف الثالث الاعدادي" />
                        </RadioGroup>

                        <Button variant="contained" style={{ margin: 50 }} tybe="submit" color="primary"
                            onClick={() => {
                                for (var i = 0; i < number; i++) {
                                    x.push(i)
                                }
                                setTogle(true)
                                setex(x)
                            }}
                        >
                            save
                </Button>
                    </Grid>
                </div>)}
            {togle === true && example === true &&
                ex.map(x => {
                    return (
                        <div key={x}>
                            <AddExample value={value} />
                        </div>
                    )
                })}
        </div>
    );
}

export default PageAdd;
