import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withStyles } from '@material-ui/core/styles';

library.add(fas);

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontFamily: 'Montserrat',
  },
  logo: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontFamily: 'GothamBlack',
    paddingRight: '3px',
    color: "rgb(17, 17, 47)",
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  at: {
    padding: '0 5px',
  },
  menuButton: {
    fontFamily: 'Montserrat',
    borderRadius: '25px',
    fontWeight: 'bold',
  }
});

function SearchAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography className={classes.logo} variant="h5" color="inherit" noWrap>
          HACKILLINOIS
          </Typography>
          <Typography className={classes.title} variant="h5" color="inherit" noWrap>
          &nbsp;Open Source
          </Typography>
          {/* <FontAwesomeIcon className={classes.at}
            icon={["fas", "at"]}
            size="12pt"
            color="black"/> */}
          <div className={classes.grow} />
          <div className={classes.menuButton}> 
          <Button className={classes.menuButton} color="inherit">2019</Button>
          <Button className={classes.menuButton} color="inherit">BLOG</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchAppBar);
