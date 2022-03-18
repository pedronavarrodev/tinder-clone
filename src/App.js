import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import ChatScreen from "./ChatScreen";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chats from "./Chats";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/chat/:person">
            <Header backButton='/chat' />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton='/' />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


      {/*  Tinder Cards  */}
      {/*  Botões rodapé tinder cards */}
      
      {/*  Chat Screen  */}
      {/*  Individual Screen  */}