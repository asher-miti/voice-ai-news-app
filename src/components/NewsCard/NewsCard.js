import React from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import useStyles from "./styles.js";

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea href={url} target="_blank">
        <CardMedia
          className={classes.media}
          image={
            urlToImage ||
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.industry.gov.au%2Fsites%2Fdefault%2Ffiles%2FAugust%25202018%2Fimage%2Fnews-placeholder-738.png&imgrefurl=https%3A%2F%2Fwww.industry.gov.au%2Fimage%2Fnews-placeholder-image&tbnid=PKxI4hOKjfHrNM&vet=12ahUKEwj9htK1wprrAhVegM4BHY1uBiEQMygAegQIARB9..i&docid=9ebzIygDo9aMEM&w=738&h=432&q=news-placeholder-738.png&ved=2ahUKEwj9htK1wprrAhVegM4BHY1uBiEQMygAegQIARB9"
          }
        />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5">
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
