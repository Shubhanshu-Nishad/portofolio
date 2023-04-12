import React, { Component, Fragment } from "react";

import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Hidden, Typography } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";

const particleoptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

AOS.init();
const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});
class Experience extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className="exp_row" id="experience">
          <h1 className="name-css">
            Work <span className="surname">Experience</span>
          </h1>
        </div>
        <div className="workchips">
          <Card className="workcard" data-aos="zoom-in-right">
            <CardContent className="work1">
              <h1 style={{ color: "#f7f8f81" }}>Web developer</h1>
            </CardContent>{" "}
            <Divider light />
            <CardContent>
              <i className="fas fa-map-marker-alt" />
              <h2 style={{ color: "#cac531" }}>Covid Food Mall</h2>
              <Typography variant="body2" color="inherit" component="p">	Worked as a full stack developer with technologies like wordpress, php.

	Worked in team to connect 50+ NGO on a single platform to distributed food during Covid-19 across 5 states.

              </Typography>
            </CardContent>
            <CardActions>
              <span>Jun 2021 -</span>-<span>Jun 2022</span>
            </CardActions>
          </Card>
          <Card className="workcard" data-aos="zoom-in">
            <CardContent className="work1">
              <h1 style={{ color: "#f7f8f81" }}>CTO/Fullstack developer </h1>
            </CardContent>{" "}
            <Divider light />
            <CardContent>
              {" "}
              <i className="fas fa-map-marker-alt" />
              <h2 style={{ color: "#cac531" }}>TourInTown</h2>
              <Typography variant="body2" color="inherit">
               	Designed and developed tourist website for the startup with the help of php, HTML, CSS, JavaScript.
Used MySql for storing tourist data and automate the workflow within organization.
Responsible for taking decisions related to technical department

              </Typography>
            </CardContent>
            <CardActions>
              <span>Sep 2021 -</span>-<span>Apr 2022</span>
            </CardActions>
          </Card>
          { <Card className="workcard" data-aos="zoom-in-left">
            <CardContent className="work1">
              <h1 style={{ color: "#f7f8f81" }}>Associate Technical Member</h1>
            </CardContent>{" "}
            <Divider light />
            <CardContent>
              <i className="fas fa-map-marker-alt" />
              <h2 style={{ color: "#cac531" }}>The Spark Foundation</h2>
              <Typography variant="body2" color="inherit" component="p">
                Worked as assistant in data Analysis of Super Stores Sells.	Used digital marketing skills to promote the foundation.
Also did training as an android developer.

              </Typography>
            </CardContent>
            <CardActions>
              <span>June 2019 -</span>
              <span>Present</span>
            </CardActions>
          </Card> }
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Experience);
