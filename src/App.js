import React from 'react';

import './App.css';
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import SignUp from './Components/Login/SignUp'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Junior1 from './Components/Junior/Junior1';
import Junior2 from './Components/Junior/Junior2';
import Junior3 from './Components/Junior/Junior3';
import AddEx from './Components/AddEx/AddEx';
import PageAdd from './Components/AddEx/PageAdd';
import Sec1 from './Components/Junior/Sec1';
import Sec2 from './Components/Junior/Sec2';
import Sec3 from './Components/Junior/Sec3';
import S3 from './Components/Age/S3';
import J1 from './Components/Age/J1';
import J2 from './Components/Age/J2';
import J3 from './Components/Age/J3';
import S1 from './Components/Age/S1';
import S2 from './Components/Age/S2';
import PageExamples from './Components/Examples/PageExamples';
import SingleExample from './Components/Examples/SingleExample';

function App() {
  return (
    <div className="appp">

      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/ExJ1" component={Junior1} />
          <Route path="/ExJ2" component={Junior2} />
          <Route path="/ExJ3" component={Junior3} />
          <Route path="/ExS1" component={Sec1} />
          <Route path="/ExS2" component={Sec2} />
          <Route path="/ExS3" component={Sec3} />
          <Route exact path="/Junior1" component={J1} />
          <Route exact path="/Junior2" component={J2} />
          <Route exact path="/Junior3" component={J3} />
          <Route exact path="/Sec1" component={S1} />
          <Route exact path="/Sec2" component={S2} />
          <Route exact path="/Sec3" component={S3} />
          <Route exact path="/addEx" component={PageAdd} />

          {/* I need to solve that 5ra */}
          <Route exact path="/Junior1/Exapmles" component={PageExamples} />
          <Route exact path="/Junior1/Exapmles/:past_id" component={SingleExample} />
          <Route exact path="/Junior2/Exapmles" component={PageExamples} />
          <Route exact path="/Junior2/Exapmles/:past_id" component={SingleExample} />
          <Route exact path="/Junior3/Exapmles" component={PageExamples} />
          <Route exact path="/Junior3/Exapmles/:past_id" component={SingleExample} />
          <Route exact path="/Sec1/Exapmles" component={PageExamples} />
          <Route exact path="/Sec1/Exapmles/:past_id" component={SingleExample} />
          <Route exact path="/Sec2/Exapmles" component={PageExamples} />
          <Route exact path="/Sec2/Exapmles/:past_id" component={SingleExample} />
          <Route exact path="/Sec3/Exapmles" component={PageExamples} />
          <Route exact path="/Sec3/Exapmles/:past_id" component={SingleExample} />
          {/* ------------------------------------------------------------------ */}
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
