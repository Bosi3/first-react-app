import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ballo from './../media/ballo.jpg'

const styles = {
  card: {
    maxWidth: 168,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

function MediaCardAbout(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"  
          className={classes.media}
          height="140" 
          src={ballo} alt={ballo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            About
          </Typography>
          <Typography component="p">
          Rome, 1970. 

Graduate with full marks at the Faculty of Arts, 
with a thesis on Kieslowski compared to the ejzensteinian aesthetics.

          
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCardAbout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCardAbout);