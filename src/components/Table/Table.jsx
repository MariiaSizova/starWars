import React from "react";
import classes from "./Table.module.css";

import { data } from "../../services/data.js";
const Table = () => {
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th className={classes.columnSml}></th>
          <th className={classes.columnFix}>Name</th>
          <th className={classes.columnFix}>Height</th>
          <th className={classes.columnFix}>Weight</th>
          <th className={classes.columnFix}>Starship</th>
          <th className={classes.columnFix}>Created</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className={classes.columnSml}>
              <div className={classes.radioBtn}>
                <input type="radio" className={classes.squareBtn} />
              </div>
            </td>
            <td className={classes.columnFix}>{item.name}</td>
            <td className={classes.columnFix}>{item.height}</td>
            <td className={classes.columnFix}>{item.weight}</td>
            <td className={classes.columnFix}>{item.starship}</td>
            <td className={classes.columnFix}>{item.created}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
