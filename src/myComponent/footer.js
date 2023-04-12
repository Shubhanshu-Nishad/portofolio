import React, { Component, Fragment } from "react";
import { Paper, Typography } from "@material-ui/core";

export default class Footer extends Component {
    render() {
        return ( <
            div className = "footer" >
            <
            div >
            <
            Typography variant = "body1"
            gutterBottom align = "center"
            display = "inline" >
            <
            i class = "far fa-copyright" >
            Copyright Shubhanshu.All Rights Reserved <
            /i> <
            /Typography> <
            /div> <
            div className = "footer-a" >
            <
            a href = "https://github.com/Shubhanshu-Nishad"
            target = "_blank" >
            <
            i class = "fab fa-github " / >
            <
            /a> <
            a href = "https://www.linkedin.com/in/shubhuji24/"
            target = "_blank" >
            <
            i class = "fab fa-linkedin" / >
            <
            /a> <
            a href = "https://www.instagram.com/shubhuji24/"
            target = "_blank" >
            <
            i class = "fab fa-instagram" / >
            <
            /a> <
            a href = "mailto: shubhanshunishad24@gmail.com" >
            <
            i class = "fas fa-envelope" / >
            <
            /a> <
            /div> <
            /div>
        );
    }
}