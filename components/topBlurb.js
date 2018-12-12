import AnimatedNumber from 'react-animated-number';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 4,
    background: 'rgb(17, 17, 47)',
    borderRadius: '0',
  },
  title: {
    fontFamily: "Montserrat",
    textAlign: "center",
    fontWeight: "regular",
    color: "white",
  },
  logo: {
    fontFamily: "GothamBlack",
    textAlign: "center",
    fontWeight: "medium",
    color: "white",
  },
  body: {
    fontFamily: "Montserrat",
    textAlign: "center",
    color: "white",
    useNextVariants: true,
    fontWeight: "24pt",
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 2,
  },
  right: {
    fontFamily: "Montserrat",
    textAlign: "right",
    color: "white",
    useNextVariants: true,
    fontWeight: "24pt",
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 8,
  },
  left: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 8,
  },
  blurb: {
    padding: "30px 30px 10px 30px",
    align: "center",
    alignItems: "center",
    display: "block",
  },
  table: {
    margin: "0 auto",
    width: "70%",
    textAlign: "center",
    fontFamily: "Montserrat",
    padding: "10px",
  }
});

const animatedStyle = {
  transition: '1s ease-out',
  transitionProperty:
    'background-color, color',
  fontSize: 48,
  color: 'rgb(244, 151, 185)',
  fontWeight: '600'
};

function Blurb(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Grid container sm={12}>
          {/* Left */}
          <Grid item sm={12} md={6} lg={6} className={classes.left}>
            <Typography className={classes.logo} variant="h3" component="h3">
              HACKILLINOIS
            </Typography>
            <br />
            <Typography className={classes.title} variant="h3" component="h3">
              Open Source
            </Typography>
          </Grid>
          {/* Right */}
          <Grid item sm={12} md={6} lg={6}>
            <Typography className={classes.right} variant="h5" component="p">
              2 years ago HackIllinois reinvented the college Hackathon. <p /> We brought the best <strong>open source engineers</strong> in the world to work with <strong>college students</strong> on open source.<p/>
            </Typography>
          </Grid>
        </Grid>
        <Typography className={classes.body} variant="h5" component="p">
          Here is how we are doing so far:
      </Typography>
      <Grid container sm={12} className={classes.table}>
        <Grid item sm={4} xs={7}>
        <AnimatedNumber
                style={animatedStyle}
                stepPrecision={0}
                value={200}
                duration={1000}
                formatValue={n => `${n}`} />
        <p>pull requests</p>      
        </Grid>
        <Grid item sm={4} xs={7}>
        <AnimatedNumber
                style={animatedStyle}
                stepPrecision={0}
                value={1738}
                duration={1000}
                formatValue={n => `${n}`} />
                        <p>students</p>   
        </Grid>
        <Grid item sm={4} xs={7}>
        <AnimatedNumber
              style={animatedStyle}
              stepPrecision={0}
              value={1871}
              duration={1000}
              formatValue={n => `${n}`} />
                      <p>mentors</p>   
        </Grid>
      </Grid>
      </Paper>
    </div>
  );
}

Blurb.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blurb);
