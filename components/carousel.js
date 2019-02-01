import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Icon from '@material-ui/core/Icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import projectData from '../static/projectData';
library.add(fab);

const styles = theme => ({
    root: {
        paddingBottom: theme.spacing.unit * 2,
    },
    subtitle: {
        fontFamily: "Montserrat",
        fontWeight: "bold",
        textAlign: "center",
        color: "rgb(17, 17, 47)",
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 2,
    },
    cardCarousel: {
        display: 'flex',
	margin: '2px',
    },
    card: {
        maxWidth: 335,
        margin: '0 auto',
        borderRadius: '7%',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 20,
    },
    pos: {
        marginBottom: 12,
    },
    cardTitle: {
        fontFamily: 'Montserrat',
        paddingBottom: '10px',
        fontWeight: 'bold',
    },
    cardLink: {
        textDecoration: 'none',
    },
    media: {
        height: 160,
        padding: '10px',
        position: 'relative',
    },
    button: {
        margin: theme.spacing.unit,
    },
    cardFont: {
        fontFamily: "Montserrat",
    },
    cardBlurb: {
        fontFamily: "Montserrat",
        fontWeight: 'bold',
    },
    chipContribute: {
        fontFamily: "Montserrat",
        background: 'rgb(237, 97, 164)',
        cursor: 'pointer',
    },
    chipCreate: {
        fontFamily: "Montserrat",
        background: 'rgb(64, 73, 158)',
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
      },
});

function Carousel(props) {
    const { classes } = props;
    var projectData = require('../static/projectData');
    const projectData = projectData.projectData;

    let html = projectData.map(project => {
        return (
            <GridListTile key={project.name} rows="3">
                <a href={project.link} className={classes.cardLink}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={project.image}
                            title={project.name}
                        >
                            <Chip className={classes.chipContribute} color="primary" label={project.label}></Chip>
                        </CardMedia>
                        <CardContent>
                            <Typography className={classes.cardTitle} variant="title">
                                {project.name}
                            </Typography>
                            <Typography className={classes.cardFont} variant="subtitle1">
                                {project.desc}
                            </Typography>
                        </CardContent>
                    </Card>
                </a>
            </GridListTile>
        );
    });

    return (
        <div className={classes.root}>
            <Typography className={classes.subtitle} variant="h5" component="h5">
                PROJECTS
            </Typography>
            <div className={classes.cardCarousel}>
            <GridList className={classes.gridList} cols={4}>
            {html}
            </GridList>
            </div>
        </div>
    );
}

Carousel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Carousel);
