import React from 'react';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 280,
        marginTop: 10,
        marginBottom: 100,
        padding: 20,
        marginLeft: 20,
        marginRight: 20
        },
    media: {
        height: 0,
        paddingTop: '56.25%',
        color:'#007aff'

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
        backgroundColor: '#007aff'
    },
}));

const MyCard = props => {
    const { title, details, picture, moredescription } = props;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card className={classes.root} id="work">
            <CardHeader title={title} 
            avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }/>
            <CardMedia image={picture} />
            <CardContent>Project:
            <Typography variant="caption" component="p" style={{ color: '#A16AE8' }}>{details}</Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more">
                    <ExpandMoreIcon style={{ color: '#007aff' }} />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="caption" component="p" style={{ color: '#fff' }} >
                        {moredescription}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    
    )
}

export default MyCard;