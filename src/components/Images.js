import React from "react";
import { Container, Grid, Paper } from "../Matrial-ui/imports";
import GetAppIcon from "@material-ui/icons/GetApp";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const Images = ({ searchedImages }) => {
  return (
    <Container maxWidth="false">
      <Grid container spacing={2} className="imgs-ctr">
        {searchedImages.map((image) => (
          <Grid container item lg={4} key={image.id} className="image-border">
            <Paper>
              <img id="image" src={image.largeImageURL} />
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
                <Grid className="tags" container>
                  {image.tags.split(",").map((tag) => (
                    <Grid item spacing={2} id="tag">
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
