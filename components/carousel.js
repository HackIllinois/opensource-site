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
//import projectData from '../static/projectData';
library.add(fab);

const projectData = [
  {
    "name": "Julia",
    "desc": "",
    "image": "",
    "label": "contributed",
  },
  {
    "name": "Apache Mesos",
    "desc": "",
    "image": "",
    "label": "contributed",
    "link": "https://github.com/apache/mesos"
  },
  {
    "name": "Apache Airvata",
    "desc": "",
    "image": "",
    "label": "contributed",
    "link": "https://airavata.apache.org/index.html"
  },
  {
    "name": "NumPy",
    "desc": "",
    "image": "",
    "label": "contributed",
    "link": "https://github.com/numpy"
  },
  {
    "name": "Conda",
    "desc": "",
    "image": "",
    "label": "contributed",
    "link": "https://github.com/conda"
  },
  {
    "name": "Qtum",
    "desc": "",
    "image": "",
    "label": "contributed",
    "link": "https://qtum.org/en"
  },
  {
    "name": "Rust",
    "desc": "",
    "image": "",
    "label": "contributed",
    "link": "https://github.com/rust-lang"
  },
  {
    "name": "Jupyter",
    "desc": "",
    "image": "",
    "label": "contributed",
    "link": "https://github.com/jupyter"
  },
  {
    "name": "yargs",
    "desc": "",
    "image": "",
    "label": "contributed",
    "link": "https://github.com/yargs"
  },
  {
    "name": "gulp.js",
    "desc": "",
    "image": "",
    "label": "contributed",
    "link": "https://github.com/gulpjs/gulp"
  },
  {
    "name": "npm",
    "desc": "",
    "image": "",
    "label": "contributed",
    "link": "https://github.com/npm"
  },
  {
    "name": "PrairieLearn",
    "desc": "",
    "image": "",
    "label": "contributed",
    "link": "https://github.com/PrairieLearn/PrairieLearn"
  },
  {
    "name": "Powershell",
    "desc": "",
    "image": "",
    "label": "contributed",
    "link": "https://github.com/powershell"
  },
  {
    "name": "arcdata",
    "desc": "",
    "image": "",
    "label": "contributed",
    "link": "https://github.com/redcross/arcdata"
  },
  {
    "name": "spack",
    "desc": "",
    "image": "",
    "label": "contributed",
    "link": "https://github.com/spack/spack"
  },
  {
    "name": "Firebase",
    "desc": "",
    "image": "",
    "label": "contributed",
    "link": "https://github.com/firebase"
  },
  {
    "name": "pandas",
    "desc": "",
    "image": "",
    "label": "contributed",
    "link": "https://github.com/pandas-dev"
  },
  {
    "name": "donejs",
    "desc": "",
    "image": "",
    "label": "contributed",
    "link": "https://github.com/donejs/"
  },
  {
    "name": "now",
    "desc": "",
    "image": "",
    "label": "contributed",
    "link": "https://github.com/zeit/now-cli"
  },
  {
    "name": "puppeteer",
    "desc": "",
    "image": "",
    "label": "contributed",
    "link": "https://github.com/googlechrome/puppeteer"
  },
  {
    "name": "thefuck",
    "desc": "",
    "image": "",
    "label": "contributed",
    "link": "https://github.com/nvbn/thefuck"
  },
  {
    "name": "Puppeteer to Istanbul",
    "desc": "",
    "image": "",
    "label": "created",
    "link": "https://github.com/istanbuljs/puppeteer-to-istanbul"
  },
  {
    "name": "Rust Cookbook",
    "desc": "",
    "image": "",
    "label": "contributed",
    "link": "https://github.com/rust-lang-nursery/rust-cookbook"
  },
  {
    "name": "rustbridge",
    "desc": "",
    "image": "",
    "label": "created",
    "link": "https://github.com/rustbridge/rustbridge.io"
  },
  {
    "name": "Law --Less",
    "desc": "",
    "image": "",
    "label": "created",
    "link": "https://github.com/warut-vijit/law__--less"
  },
  {
    "name": "React Native Emoji Keyboard",
    "desc": "",
    "image": "",
    "label": "created",
    "link": "https://github.com/sskhandek/react-native-emoji-input"
  }
];

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
        fontFamily: 'Montserrat',
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
        fontFamily: "Montserrat",
    },
    cardBlurb: {
        fontFamily: "Montserrat",
        fontWeight: 'bold'
    },
    chipContribute: {
        fontFamily: "Montserrat",
        background: 'rgb(237, 97, 164)'
    },
    chipCreate: {
        fontFamily: "Montserrat",
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
    //console.log(projectData);
    let html = projectData.map((project) => {
        return (
            
            <GridListTile key={project.name}>
                    <Card className={classes.card}>
                    <CardMedia
                    className={classes.media}
                    image="https://cdn-images-1.medium.com/max/2000/1*y6C4nSvy2Woe0m7bWEn4BA.png"
                    title={project.name}
                    >
                    <Chip className={classes.chipContribute} color="primary" label={project.label}></Chip>
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

Blurb.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blurb);