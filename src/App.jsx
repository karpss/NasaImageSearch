/* eslint-disable */
import "./App.css";
import ApplicationContextProvider from "./Context/ApplicationContextProvider";
import Main from "./Components/Main/Main";

function App() {
  return (
    <ApplicationContextProvider>
      <div className="App">
      <Main />
      </div>
  </ApplicationContextProvider>
  );
}

export default App;
