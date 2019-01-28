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
import labPas from './../media/labPas.jpg'

const styles = {
  card: {
    maxWidth: 168,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

function MediaCardWorkshops(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"  
          className={classes.media}
          height="140" 
          src={labPas} alt={labPas}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Workshops
          </Typography>
          <Typography component="p">
          
            The theoretical-practical workshop deals with the uniqueness of the actor and of the person who directs it to develop 
            approaches and techniques in directing and directing.

          
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

MediaCardWorkshops.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCardWorkshops);