import React from "react";
import { Container, Grid, Paper } from "../Matrial-ui/imports";
import GetAppIcon from "@material-ui/icons/GetApp";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const Images = ({ searchedImages }) => {
  return (
    <Container maxWidth={false}>
      <Grid container spacing={2} className="imgs-ctr">
        {searchedImages.map((image) => (
          <Grid container item lg={4} key={image.id} className="image-border">
            <Paper>
              <img alt={image.type} id="image" src={image.largeImageURL} />
              <div className="details">
                <h2 id="title">BY {image.user.toUpperCase()}</h2>
                <div className="counters">
                  <VisibilityIcon />
                  <span id="views"> {image.views}</span>
                  <br />
                  <GetAppIcon />
                  <span id="downloads"> {image.downloads}</span>
                  <br />
                  <ThumbUpIcon />
                  <span id="likes"> {image.likes}</span>
                </div>
                <Grid className="tags" spacing={2} container>
                  {image.tags.split(",").map((tag,index) => (
                    <Grid item key={index}  id="tag">
                      #{tag}
                    </Grid>
                  ))}
                </Grid>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Images;
