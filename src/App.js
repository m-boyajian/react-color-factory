import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import NewColorForm from "./NewColorForm";
import ColorDetail from "./ColorDetail";
import Home from "./Home";
import useColors from "./colorsData";

function App() {
  const { colors, addColor } = useColors(); 

  return ( 
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/home">
            <Home colors={colors} addColor={addColor} />
          </Route>
          <Route path="/colors/new">
            <NewColorForm addColor={addColor} />
          </Route>
          <Route path="/colors/:color" render={(props) => <ColorDetail {...props} colors={colors} />} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;


