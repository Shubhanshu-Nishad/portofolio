import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Achievements = () => {
  return (
    <div id="achievements">
      <Grid container className="about-css">
        <Grid item xs={12}>
          <h1 className="name-css">
            <span className="surname">Achievements</span>
          </h1>
          <div
            data-aos="zoom-in-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2500"
          >
            <Paper
              elevation={24}
              style={{ backgroundColor: "#2c3e50", color: "white" }}
            >
              <div className="achievements">
                <ul className="fa-ul mb-0">
                  <li>
                    <i
                      className="fa-li fa fa-trophy"
                      style={{ color: "#F1F2B5" }}
                    />
                    	Title “Young Scientist of India” issued by Indian govt. 
                  </li>
                  <li>
                    <i
                      className="fa-li fa fa-trophy"
                      style={{ color: "#F1F2B5" }}
                    />
                    	Secured First Rank in National Science Fair
                  </li>
                  <li>
                    <i
                      className="fa-li fa fa-trophy "
                      style={{ color: "#F1F2B5" }}
                    />
                    	Participated in “National IBM Hackathon – CodeWars’23” at UPES, Dehradun.
                  </li>
                  <li>
                    <i
                      className="fa-li fa fa-trophy "
                      style={{ color: "#F1F2B5" }}
                    />
                    Participated in “GOOGLE CLOUD Career Fair '22” at Bengaluru.
                  </li>
                  <li>
                    <i
                      className="fa-li fa fa-trophy "
                      style={{ color: "#F1F2B5" }}
                    />
                    	Coordinated BLF i.e., Brij Cultural Festival (Cultural Fest, GLA)
                  </li>
                  <li>
                    <i
                      className="fa-li fa fa-trophy "
                      style={{ color: "#F1F2B5" }}
                    />
                     	IT Coordinator of GLA Badminton Sport Department
                  </li>
                </ul>
              </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Achievements;
