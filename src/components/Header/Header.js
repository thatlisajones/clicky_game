import React from "react";
import "./Header.css";
import GameMessage from "../GameMessage";

const Header = props => (
    <div className="header">
        <ul>
            <li><h2 className=" title animated fadeIn">Cosmic Clicky</h2></li>
            <GameMessage score={props.score} topScore={props.topScore} />
            <li id="score">Score: {props.score} | Best Score: {props.topScore}</li>
        </ul>
        
    </div>
)

export default Header;

