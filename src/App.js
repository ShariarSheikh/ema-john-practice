// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Shop from "./Pages/Shop/Shop";
import Review from './Pages/Review/Review'
import Manage from './Pages/ManageInventory/ManageInventory'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Shop}/>
          <Route exact path="/review" component={Review}/>
          <Route exact path="/manage" component={Manage}></Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
