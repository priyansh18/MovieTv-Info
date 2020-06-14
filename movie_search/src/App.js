import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";
import Landing from "./Components/home/Landing";
import store from "./store";
import Movie from "./Components/home/Movie";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/movie/:id" component={Movie} />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
