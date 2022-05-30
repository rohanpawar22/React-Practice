import { useState } from "react";
import classes from "./First.module.css";

const First = () => {
  const [user, setUser] = useState({ name: "" });

  let name, value;

  function handleInputs(event) {
    name = event.target.name;
    value = event.target.value;
    setUser({ user, [name]: value });
  }

  return (
    <div className={classes.bgfirst}>
      <h1 className={classes.text}>This is First Part</h1>
      <form>
        <label className={classes.label}>
          Text: <br />
          <input
            type="text"
            name="text"
            className={classes.inputbox}
            value={user.name}
            onChange={handleInputs}
          />
        </label>
      </form>
    </div>
  );
};

export default First;
