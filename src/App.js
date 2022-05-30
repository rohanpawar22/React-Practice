import First from "./components/FirstPart/First";
import Second from "./components/SecondPart/Second";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.partition}>
      <First />
      <Second />
    </div>
  );
}

export default App;
