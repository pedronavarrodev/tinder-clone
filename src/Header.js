import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";


    function Header ({ backButton }) {
        const history = useHistory();
        return (

        <div>
            <div className="header">
                {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIos fontSize="large" className="header__icon" />
                </IconButton>
                ) : (
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large" />
                </IconButton>
                )}

                <Link to='/'>
                <img
                    className="header__logo"
                    src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg" 
                    alt="tinder logo"/>
                </Link>

                <Link to='/chat'>
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large"/>
                </IconButton>
                </Link>
            </div>
        </div>
    )
}

export default Header