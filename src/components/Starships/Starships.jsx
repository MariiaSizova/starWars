import React from "react";
import classes from "./Straships.module.css";
import starshipImg from "../../images/image3.png";
import starsShip from "../../images/star.svg";

const Starships = () => {
  return (
    <div className={classes.starshipPage}>
      <div className={classes.headerStarship}>
        <h2 className={classes.starshipName}>X-Wing</h2>
        <div className={classes.buttons}>
          <button className={classes.btnCancel}>Cancel</button>
          <button className={classes.btnSave}>Save</button>
        </div>
      </div>
      <div className={classes.bodyStarship}>
        <img
          className={classes.starshipImage}
          src={starshipImg}
          alt="The starship"
        />
        <div className={classes.container}>
          <div className={classes.leftSide}>
            <div className={classes.text}>
              <p className={classes.starshipParams}>Starship Class</p>{" "}
              <p className={classes.params}>Starfighter</p>
            </div>
            <div className={classes.text}>
              <p className={classes.starshipParams}>Model</p>{" "}
              <p className={classes.params}>T-65 X-wing</p>
            </div>
            <div className={classes.text}>
              <p className={classes.starshipParams}>Manufacturer</p>{" "}
              <p className={classes.params}>Income Corporation</p>
            </div>
            <div className={classes.text}>
              <p className={classes.starshipParams}>Crew</p>{" "}
              <p className={classes.params}>1</p>
            </div>
            <div className={classes.text}>
              <p className={classes.starshipParams}>Class 1.0</p>{" "}
              <img src={starsShip} alt="stars" />
              <img src={starsShip} alt="stars" />
              <img src={starsShip} alt="stars" />
            </div>
          </div>
          <div className={classes.rightSide}>
            <div className={classes.text}>
              <p className={classes.starshipParams}>Length</p>{" "}
              <p className={classes.params}>12.5 m</p>
            </div>
            <div className={classes.text}>
              <p className={classes.starshipParams}>Max Speed</p>{" "}
              <p className={classes.params}>1050 km/h</p>
            </div>
            <div className={classes.text}>
              <p className={classes.starshipParams}>Cargo Capacity</p>{" "}
              <p className={classes.params}>110 kg</p>
            </div>
            <div className={classes.text}>
              <p className={classes.starshipParams}>Passengers</p>{" "}
              <p className={classes.params}>0</p>
            </div>
            <div className={classes.text}>
              <p className={classes.starshipParams}>Pilots</p>{" "}
              <a className={classes.peopleship} href="/resources/people">
                Luke Skywalker, Biggs Darklighter, Wedge Antilles, Jek Tono
                Porkins
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starships;
