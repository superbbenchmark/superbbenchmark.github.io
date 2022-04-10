import React from "react";
import { useRouteMatch } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Typography, Grid, Paper, Button } from "@material-ui/core";

import AdaptiveLink from "./AdaptiveLink";
import { capitalizeFirstLetter } from "./Utilies";

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: 64,
  },
  title: {
    fontWeight: "bold",
  },
}));

export default function FlowCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const match = useRouteMatch();
  const { Icon, title, description, color, disabled } = props;
  const [hover, setHover] = React.useState(false);

  return (
    <React.Fragment>
      <Paper
        elevation={hover ? 7 : 2}
        onMouseOver={() => {
          setHover((prev) => !prev);
        }}
        onMouseOut={() => {
          setHover((prev) => !prev);
        }}
      >
        <Box padding={theme.spacing(4, 3)}>
          <Grid container direction="column" spacing={3} justify="center">
            {[
              <Icon style={{ fontSize: 64, color: color }} />,
              <Typography
                color="textPrimary"
                variant="h5"
                className={classes.title}
              >
                {capitalizeFirstLetter(title)}
              </Typography>,
              <Typography color="textSecondary" variant="body1">
                {description}
              </Typography>,
              <Grid container direction="row" spacing={2} justify="center">
                {[["enter", ""]].map(([buttonName, urlPostfix]) => (
                  <Grid item>
                    <AdaptiveLink
                      link={`${match.url}/${title}${urlPostfix}`}
                      disabled={disabled}
                    >
                      <Button
                        size="medium"
                        variant="outlined"
                        disabled={disabled}
                        style={{
                          color: disabled ? theme.palette.primary : color,
                        }}
                      >
                        {buttonName}
                      </Button>
                    </AdaptiveLink>
                  </Grid>
                ))}
              </Grid>,
            ].map((item) => (
              <Grid item>{item}</Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </React.Fragment>
  );
}
