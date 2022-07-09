import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext"
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay"
import VolumeDownIcon from "@material-ui/icons/VolumeDown"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <img
          className="footer-albumLogo"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Wizkid_-_Made_in_Lagos.png/220px-Wizkid_-_Made_in_Lagos.png"
          alt="" />
        <div className="footer-songInfo">
          <h4>Smile</h4>
          <p>Wizkid ft. H.E.R</p>
        </div>
        
      </div>

      <div className="footer-center">
        <ShuffleIcon className="footer-green" />
        <SkipPreviousIcon className="footer-icon" />
        <PlayCircleOutlineIcon className="footer-icon" fontSize="large" />
        <SkipNextIcon className="footer-icon" />
        <RepeatIcon className="footer-green" />
      </div>

      <div className="footer-right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>

        </Grid>
      </div>
    </div>
  );
}

export default Footer;
