import React, { Component, Fragment } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import profile from "../images/profile.png";
import Fab from "@material-ui/core/Fab";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
class HomePage extends Component {
    render() {
        return ( <
            Fragment >
            <
            div style = {
                { width: "100%", margin: "auto" }
            }
            className = "home-page" >
            <
            Grid container >
            <
            Grid item xs = { 12 } >
            <
            div >
            <
            img src = { profile }
            className = "profile-img" / >
            <
            /div> <
            h1 className = "name-css" >
            Shubhanshu <
            span className = "surname" > Nishad <
            /span> < /
            h1 > <
            p className = "sub-detail" > Full Stack Developer <
            /p> <
            br / >
            <
            br / >

            <
            div className = "sub-detail" >
            <
            p > Follow Me <
            /p> < /
            div > <
            p className = "sub-detail2" >
            <
            a href = "https://github.com/Shubhanshu-Nishad" >
            <
            i class = "fab fa-github " / >
            <
            /a> <
            a href = "https://www.instagram.com/shubhuji24/" >
            <
            i class = "fab fa-instagram " / >
            <
            /a>

            <
            a href = "https://www.linkedin.com/in/shubhuji24/" >
            <
            i class = "fab fa-linkedin" / >
            <
            /a> < /
            p > <
            /Grid> < /
            Grid > <
            /div> < /
            Fragment >
        );
    }
}
export default HomePage;