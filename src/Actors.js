import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  root: {
    maxWidth: 360,
    maxHeight: 600,
    margin: 20,
    objectFit: "cover"
  },
});




function Actors({actors}) {
  
  const classes = useStyles();

    return (
        <div>
           <Grid container>
           {actors.map(a => (
                   <Grid key={a.id} item xs={12} sm={6} md={3}>
                   <Card  className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="actor"
                  height="460"
                  image={a.image}
                  title={a.firstName + " " +a.lastName}
                />
                <CardContent>
                <Typography gutterBottom variant="h3" component="h1">
                {a.firstName + " " +a.lastName}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                   {a.birthday}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                 Age:  {2020 - Number(a.birthday.split(",").pop())}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href={a.imdbLink}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
                   </Grid>
             
            )
              
            )}
           </Grid>
         
            
        </div>
    )
}

export default Actors
