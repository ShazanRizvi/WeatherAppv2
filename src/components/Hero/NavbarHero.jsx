import React, {useEffect,useState} from "react";
import "./NavbarHero.css";
import axios from 'axios';

const NavbarHero = ({name,temp,wind, pressure, humidity,time}) => {
  
  

  // const defaultQuery = () => {
  //   if (searchTerm === "") {
  //     setQuery("banana");
  //   }
  // }



  return (
    <header>
      <div className="hero">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarCollapse"
            >
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Cities
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    News
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* Glass morphic card */}
        <div className="cardcontainer" align="right">
          <div className="containercard" align="left">
            <h1 className="weatherdetails">Weather Details</h1>
            <div className="sideTable">
              <table>
                <tbody>
                  <tr>
                    <td>Wind</td>
                    <td>{wind} Km/h</td>
                  </tr>
                  <tr>
                    <td>Pressure</td>
                    <td>{pressure}in</td>
                  </tr>
                  <tr>
                    <td>Humidity</td>
                    <td>{humidity}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="tempratureParent">
          <h1 class="degreeC">{temp}&deg;</h1>
          <div class="placeparent">
            <div className="placechild">
              <h1 class="place">{name}</h1>
              <div className="timedataparent">
                <h6 class="time">{time}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarHero;
