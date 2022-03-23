import React, { Component } from "react";
import { Switch, Route, Redirect, Routes, Navigate } from "react-router-dom";
import Navbar from "./Component/navbar";
import HomeScreen from "./Component/home";
// import Show from "./show";
// import NewStudent from "./newStud";
// import EditStudent from "./editStudent";

function App() {
  return (
    <div className=''>
      {/* <Navbar /> */}
      {/* <HomeScreen /> */}
      <div>
        <Routes>
          {/* <Route path="/student/:name" component={EditStudent} /> */}
          {/* <Route path="/allStudent" render={props => <Show {...props} />} /> */}
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          {/* <Redirect from="/" to="/home" /> */}
          {/* <Redirect to="/home" /> */}
          {/* <Navigate to="/home" /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
