import React from "react";
import classes from "./Addform.module.css";

const Addform = ({ isVisible }) => {
  return (
    <div
      className={`${classes.modal} ${isVisible ? classes.modalVisible : ""}`}
    >
      <form>
        <div className={classes.formInput}>
          <input
            className={classes.inputArea}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
        </div>
        <div className={classes.formInput}>
          <input
            className={classes.inputArea}
            type="number"
            name="height"
            id="height"
            placeholder="Height"
          />
        </div>
        <div className={classes.formInput}>
          <textarea
            className={classes.textarea}
            name="starship"
            id="starship"
            cols="30"
            rows="10"
            placeholder="Starship"
          ></textarea>
        </div>
        <div className={classes.formInput}>
          <input
            className={classes.inputArea}
            type="datetime"
            name="created"
            id="created"
            placeholder="Created"
          />
        </div>
      </form>
    </div>
  );
};

export default Addform;
