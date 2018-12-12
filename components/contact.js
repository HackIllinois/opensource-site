import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    contact: {
        padding: '30px 20px',
        alignItems: 'center',
        background: 'rgb(207, 216, 238)'
    }
});


const pStyle = {
    textAlign: 'center',
    fontFamily: "Montserrat",
    color: 'rgb(17, 17, 47)',
    fontSize: '14pt',
}

const aStyle = {
    color: 'rgb(236, 16, 140)',
}

function Contact(props) {
    const { classes } = props;
    return (
        <div className={classes.contact}>
            <p style={pStyle}>Interested in helping HackIllinois? Contact us at&nbsp;
                <a style={aStyle} href="mailto:opensource@hackillinois.org">
                    opensource@hackillinois.org
                </a>
            </p>
        </div>
    );
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);