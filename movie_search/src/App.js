import React from "react";
import {Provider} from 'react-redux'
import "./App.css";
import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";
import Landing from "./Components/home/Landing";
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Landing />
      <Footer />
    </Provider>
  );
}

export default App;
