import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        width: '100%',
        minHeight: '100px',
        flexGrow: 1,
    },
      header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        backgroundColor: theme.palette.background.default,
      },
      img: {
        height: 255,
        display: 'block',
        maxWidth: 400,
        overflow: 'hidden',
        width: '100%',
      },
      bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
      },
      paperRoot: {
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3,
        paddingTop: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 3,
      },
      paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 3,
        // backgroundColor: 'rgb(244, 151, 185)',
        borderRadius: '30px',
      },
      paperText: {
        margin: 10,
      },
      quote: {
        fontFamily: "Montserrat, GothamBlack, Helvetica, Arial, sans-serif",
        fontWeight: "22pt",
        color: 'rgb(17, 17, 47)',
        padding: theme.spacing.unit * 2,
      },
      name: {
        fontFamily: "Montserrat, GothamBlack, Helvetica, Arial, sans-serif",
        color: 'rgb(17, 17, 47)',
      },
      project: {
        fontFamily: "Montserrat, GothamBlack, Helvetica, Arial, sans-serif",
        color: 'rgb(17, 17, 47)',
      }
});

const testimonials = [
  {
      quote: 'Instead of emphasizing competition, HackIllinois emphasizes teaching and introducing a new generation of developers to the collaborative open-source process – this is a phenomenal way to get fresh faces contributing to OSS projects.',
      name: 'Ben Coe',
      project: 'NPM',
      year: '2018',
      avatar: '../static/avatars/ben.jpg'
  },
  {
      quote: 'HackIllinois gives students the opportunity to learn something new while also giving back to the open source community that we all love. By showing that open source projects are approachable, HackIllinois is helping get more people into open  source which is great for growing the community!',
      name: 'Tyler Leonhardt',
      project: 'PowerShell',
      year: '2018',
      avatar: '../static/avatars/tyler.jpg'
  },
  {
      quote: 'It’s been really invigorating to get this many pull requests … I’ve [merged] 10 pull requests this weekend, which is probably more I’ve gotten in the last 6 months for this project ',
      name: 'Blaine Bublitz',
      project: 'Gulp.js',
      year: '2017',
      avatar: '../static/avatars/blaine.png'
  },
];
class Quotes extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { spacing } = this.state;
    const { activeStep } = this.state;
    const maxSteps = testimonials.length;

    return (
      <div className={classes.root}>
        <Grid container>
        {testimonials.map((step, index) => (
          <Grid key={index} item xs={4}>
            <div className={classes.paperRoot}>
            <Paper className={classes.paper} elevation={1}>
                <Typography className={classes.quote} variant="h6" component="p"> "{step.quote}"</Typography>
                <Grid container>
                  <Grid item>
                  <Avatar alt={step.name} src={step.avatar} className={classes.bigAvatar} />
                  </Grid>
                  <Grid item className={classes.paperText}>
                  <Typography className={classes.name} variant="h6" component="p"><strong>{step.name}</strong></Typography>
                  <Typography className={classes.project} variant="h6" component="p">{step.project}</Typography>
                  </Grid>
                </Grid>
                </Paper>
            </div>
          </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

Quotes.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Quotes);
