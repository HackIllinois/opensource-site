import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas, far, fab);

const styles = theme => ({
    root: {
      width: '100%',
      display: 'inline-block',
      background: 'rgb(17, 17, 47)'
    },
    title: {
      display: 'none',
      position: 'absolute',
      left:0,
      paddingLeft: '10px',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      fontFamily: 'GothamBlack, Montserrat, Helvetica, Arial, sans-serif',
      color: 'white',
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    social: {
        margin: '0 auto',
    }
  });
  
  function Footer(props) {
    const { classes } = props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.root} position="static">
          <Toolbar variant="dense">
            <Typography className={classes.title} variant="h6" noWrap>
              HACKILLINOIS
            </Typography>
            <div className={classes.social}> 
                <IconButton color="inherit" href="https://www.github.com/hackillinois" target="_blank">
                  <FontAwesomeIcon 
                    icon={["fab", "github"]}
                    size="sm"/>
                </IconButton>
                <IconButton color="inherit" href="https://www.facebook.com/hackillinois/" target="_blank">
                  <FontAwesomeIcon 
                    icon={["fab", "facebook-square"]}
                    size="sm"/>
                </IconButton>
                <IconButton color="inherit" href="https://www.instagram.com/hackillinois/" target="_blank">
                  <FontAwesomeIcon 
                    icon={["fab", "instagram"]}
                    size="sm"/>
                </IconButton>
                <IconButton color="inherit" href="https://twitter.com/HackIllinois" target="_blank">
                  <FontAwesomeIcon 
                    icon={["fab", "twitter"]}
                    size="sm"/>
                </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
