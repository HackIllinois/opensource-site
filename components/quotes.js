import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
        minHeight: '100px',
        background: 'red'
    },

});

function Quotes(props) {
    const {classes} = props;

    return(
        <div className={classes.root}>

        </div>
    );
}

Quotes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Quotes);
