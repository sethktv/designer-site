
import {  Redirect, Route } from 'react-router-dom';
import './App.css';
import Cauza from './components/cauza/Cauza';

import Houses from './components/houses/Houses';
import ApartmentFactory from './components/interiors/ApartmentFactory';
import ApartmentWhite from './components/interiors/ApartmentWhite';
import Arbat from './components/interiors/Arbat';
import Classic from './components/interiors/Classic';
import Classic2 from './components/interiors/Classic2';
import CollHouse from './components/interiors/CollHouse';
import Gold from './components/interiors/Gold';
import Interiors from './components/interiors/Interiors';
import MildModernism from './components/interiors/MildModernism';
import TimeAndForm from './components/interiors/TimeAndForm';


function App() {
  return (

      <div>

        <div>
          <Route exact path='/' render={() => <Redirect to={"/interiors"} />} />
          <Route path='/interiors' component={Interiors} />
          <Route path='/houses' component={Houses} />
          <Route path='/cauza' component={Cauza} />
          
        </div>
        <Route path='/apartment-factory' component={ApartmentFactory} />
        <Route path='/apartment-white' component={ApartmentWhite} />
        <Route path='/time-and-form' component={TimeAndForm} />
        <Route path='/mild-modernism' component={MildModernism} />
        <Route path='/classic' component={Classic} />
        <Route path='/classic2' component={Classic2} />
        <Route path='/collectors-house' component={CollHouse} />
        <Route path='/gold' component={Gold} />
        <Route path='/arbat' component={Arbat} />
      </div>
  )
}

export default App;
