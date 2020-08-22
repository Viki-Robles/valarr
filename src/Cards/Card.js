import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import GalleryOfCards from '../Cards/GalleryOfCards';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 0,
          paddingTop: '56.25%',
        },
        expand: {
          transform: 'rotate(0deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
          }),
        },
        expandOpen: {
          transform: 'rotate(180deg)',
        },
        avatar: {
          backgroundColor: "red[500]",
        },
      }));

    const MyCard = props => {
        const { title, details, picture } = props;
        const classes = useStyles();
        const [expanded, setExpanded] = React.useState(false);
      
        const handleExpandClick = () => {
          setExpanded(!expanded);
        };
        return (
            <Card className={classes.root}>
                <CardHeader title={title}/>
                <CardMedia image={picture}/>
                <CardContent>
                    <Typography>{details}</Typography>
                </CardContent>
                </Card>
                
)}

export default MyCard;