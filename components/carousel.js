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
import IconButton from '@material-ui/core/IconButton';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import projectData from '../static/projectData';
library.add(fab);

const styles = theme => ({
    root: {
        paddingBottom: theme.spacing.unit * 2,
    },
    subtitle: {
        fontFamily: "Montserrat, GothamBlack, Helvetica, Arial, sans-serif",
        fontWeight: "bold",
        textAlign: "center",
        color: "rgb(17, 17, 47)",
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 2,
    },
    cardCarousel: {
        display: 'flex',
    },
    card: {
        maxWidth: 335,
        margin: '0 auto',
        borderRadius: '7%'
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
        fontFamily: 'Montserrat, GothamBlack, Helvetica, Arial, sans-serif',
        color: 'white',
        position: 'absolute',
        bottom: 0,
        padding: '10px',
        fontWeight: 'bold'
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
        fontFamily: "Montserrat, GothamBlack, Helvetica, Arial, sans-serif",
    },
    cardBlurb: {
        fontFamily: "Montserrat, GothamBlack, Helvetica, Arial, sans-serif",
        fontWeight: 'bold'
    },
    chipContribute: {
        fontFamily: "Montserrat, GothamBlack, Helvetica, Arial, sans-serif",
        background: 'rgb(237, 97, 164)'
    },
    chipCreate: {
        fontFamily: "Montserrat, GothamBlack, Helvetica, Arial, sans-serif",
        background: 'rgb(64, 73, 158)'
    },
    githubLogo: {
        position: 'absolute',
        right: 0,
        padding: '5px 10px'
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
      },
});

function Blurb(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Typography className={classes.subtitle} variant="h5" component="h5">
                PROJECTS
            </Typography>
            {/* <GridList className={classes.gridList} cols={4}>
            <GridListTile key={project.name}>
            <Card className={classes.card}>
                    <CardMedia
                    className={classes.media}
                    image="https://cdn-images-1.medium.com/max/2000/1*y6C4nSvy2Woe0m7bWEn4BA.png"
                    title="Contemplative Reptile"
                    >
                    <Chip className={classes.chipContribute} label="Contributed" color="primary"></Chip>
                    <IconButton className={classes.githubLogo} color="inherit" padding="20px">
                    <FontAwesomeIcon 
                        icon={["fab", "github"]}/>
                    </IconButton>
                    <Typography className={classes.cardTitle} variant="h5">Julia
                    </Typography>
                    </CardMedia>
                    <CardContent>
                    <Typography className={classes.cardFont} variant="subtitle1">
                    Julia is a high-level, high-performance dynamic language for technical computing.
                    </Typography>
                    </CardContent>
                </Card>
            </GridListTile>
            <GridListTile key={project.name}>
                <Card className={classes.card}>
                    <CardMedia
                    className={classes.media}
                    image="https://cdn-images-1.medium.com/max/2000/1*y6C4nSvy2Woe0m7bWEn4BA.png"
                    title="Contemplative Reptile"
                    >
                    <Chip className={classes.chipCreate} label="Contributed" color="primary"></Chip>
                    <IconButton className={classes.githubLogo} color="inherit" padding="20px">
                    <FontAwesomeIcon 
                        icon={["fab", "github"]}
                        size="md"/>
                    </IconButton>
                    <Typography className={classes.cardTitle} variant="h5">Julia
                    </Typography>
                    </CardMedia>
                    <CardContent>
                    <Typography className={classes.cardFont} variant="subtitle1">
                    Julia is a high-level, high-performance dynamic language for technical computing.
                    </Typography>
                    </CardContent>
                </Card>
            </GridListTile> */}
            {/* {Object.keys(projectData).map(project => (
                <GridListTile key={project.name}>
                <Card className={classes.card}>
                <CardMedia
                className={classes.media}
                image={project.image}
                title={project.name}
                >
                <Chip className={classes.chipContribute} label={project.label}></Chip>
                <IconButton className={classes.githubLogo} color="inherit" padding="20px" href={project.link}>
                <FontAwesomeIcon 
                    icon={["fab", "github"]}
                    size="md"/>
                </IconButton>
                <Typography className={classes.cardTitle} variant="h5">{project.name}</Typography>
                </CardMedia>
                <CardContent>
                <Typography className={classes.cardFont} variant="subtitle1">
                {project.desc}
                </Typography>
                </CardContent>
                </Card>
                </GridListTile>
            ))} */}
      {/* </GridList> */}
            <div className={classes.cardCarousel}>
                <Card className={classes.card}>
                    <CardMedia
                    className={classes.media}
                    image="https://cdn-images-1.medium.com/max/2000/1*y6C4nSvy2Woe0m7bWEn4BA.png"
                    title="Contemplative Reptile"
                    >
                    <Chip className={classes.chipContribute} label="Contributed" color="primary"></Chip>
                    <IconButton className={classes.githubLogo} color="inherit" padding="20px">
                    <FontAwesomeIcon 
                        icon={["fab", "github"]}/>
                    </IconButton>
                    <Typography className={classes.cardTitle} variant="h5">Julia
                    </Typography>
                    </CardMedia>
                    <CardContent>
                    <Typography className={classes.cardFont} variant="subtitle1">
                    Julia is a high-level, high-performance dynamic language for technical computing.
                    </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardMedia
                    className={classes.media}
                    image="https://cdn-images-1.medium.com/max/2000/1*y6C4nSvy2Woe0m7bWEn4BA.png"
                    title="Contemplative Reptile"
                    >
                    <Chip className={classes.chipCreate} label="Contributed" color="primary"></Chip>
                    <IconButton className={classes.githubLogo} color="inherit" padding="20px">
                    <FontAwesomeIcon 
                        icon={["fab", "github"]}/>
                    </IconButton>
                    <Typography className={classes.cardTitle} variant="h5">Julia
                    </Typography>
                    </CardMedia>
                    <CardContent>
                    <Typography className={classes.cardFont} variant="subtitle1">
                    Julia is a high-level, high-performance dynamic language for technical computing.
                    </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardMedia
                    className={classes.media}
                    image="https://cdn-images-1.medium.com/max/2000/1*y6C4nSvy2Woe0m7bWEn4BA.png"
                    title="Contemplative Reptile"
                    >
                    <Chip className={classes.chipCreate} label="Contributed" color="primary"></Chip>
                    <IconButton className={classes.githubLogo} color="inherit" padding="20px">
                    <FontAwesomeIcon 
                        icon={["fab", "github"]}
                        size="md"/>
                    </IconButton>
                    <Typography className={classes.cardTitle} variant="h5">Julia
                    </Typography>
                    </CardMedia>
                    <CardContent>
                    <Typography className={classes.cardFont} variant="subtitle1">
                    Julia is a high-level, high-performance dynamic language for technical computing.
                    </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardMedia
                    className={classes.media}
                    image="https://cdn-images-1.medium.com/max/2000/1*y6C4nSvy2Woe0m7bWEn4BA.png"
                    title="Contemplative Reptile"
                    >
                    <Chip className={classes.chipCreate} label="Contributed" color="primary"></Chip>
                    <IconButton className={classes.githubLogo} color="inherit" padding="20px">
                    <FontAwesomeIcon 
                        icon={["fab", "github"]}
                        size="md"/>
                    </IconButton>
                    <Typography className={classes.cardTitle} variant="h5">Julia
                    </Typography>
                    </CardMedia>
                    <CardContent>
                    <Typography className={classes.cardFont} variant="subtitle1">
                    Julia is a high-level, high-performance dynamic language for technical computing.
                    </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

Blurb.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blurb);
