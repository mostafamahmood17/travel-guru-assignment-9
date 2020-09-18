import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Booking from './Components/Booking/Booking';
import Header from './Components/Header/Header';
import HotelBooking from './Components/HotelBooking/HotelBooking';
import LogIn from './Components/LogIn/LogIn';
import NavStructure from './Components/NavStructure/NavStructure';
import NoMatch from './Components/NoMatch/NoMatch';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
export const TravelContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <TravelContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <NavStructure></NavStructure>
        <Switch>
          <PrivateRoute exact path="/hotel/:id">
            <HotelBooking/>
          </PrivateRoute>
          <Route exact path="/booking/:id">
            <Booking/>
          </Route>
          <Route path="/home">
            <Header/>
          </Route>
          <Route exact path="/">
            <Header/>
          </Route>
          <Route path="/login">
            <LogIn/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </TravelContext.Provider>

  );
}

export default App;

