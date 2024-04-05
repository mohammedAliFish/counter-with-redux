import "./App.css";

import { useSelector, useDispatch } from "react-redux";

function App() {
  // 4 - access data from store reducer with useSelector
  const count = useSelector((state) => state.redCounter.counter);

  const isLog = useSelector((state) => state.Auth.isLog);

  // 5 - change data in reducer with dispatch
  const dispatchCounter = useDispatch();

  return (
    <div>
      <h3>Counter : {count} </h3>
      <button onClick={() => dispatchCounter({ type: "INCRMENT" })}>
        Increment
      </button>
      <button
        onClick={() => {
          dispatchCounter({ type: "DECRMENT" });
        }}
      >
        Decreace
      </button>
      <button
        onClick={() => {
          dispatchCounter({ type: "RESET" });
        }}
      >
        Rest
      </button>

      <h3>User is : {isLog.toString()}</h3>

      <button onClick={() => dispatchCounter({ type: "IsLog" })}>
        Make User
      </button>
      <button onClick={() => dispatchCounter({ type: "NotLog" })}>
        Not User
      </button>
    </div>
  );
}

export default App;
