import React from "react";
import {
  useRouteMatch,
  useParams
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { Box, Typography, Divider } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { capitalizeFirstLetter } from './Utilies';


function Subsection(props) {
  const theme = useTheme();
  const { children, sectionName } = props;
  return (
    <Box margin={theme.spacing(6, "auto")}>
      <Box id={sectionName.toLowerCase()} position="relative" top={theme.spacing(-4)} visibility="hidden"></Box>
      <Box margin={theme.spacing(2, "auto")}>
        <Typography variant="h5" color="primary">{capitalizeFirstLetter(sectionName.toLowerCase())}</Typography>
      </Box>
      {children}
    </Box>
  )
}


export default function Track(props) {
  const theme = useTheme();
  const match = useRouteMatch();
  const { urlTrack } = useParams();
  const { Icon, intro, color, rules } = props.infos.filter((info) => (info.name == urlTrack))[0];

  const trackTheme = createMuiTheme({
    ...theme,
  })
  trackTheme.palette.primary.main = color;

  return (
    <ThemeProvider theme={trackTheme}>
      <Box margin={trackTheme.spacing(4, "auto", 8)}>
        <Box margin={trackTheme.spacing(4, "auto")}>
          <Box margin={trackTheme.spacing(2, "auto")}>
            <Typography variant="h4" color="primary"><strong>{capitalizeFirstLetter(urlTrack)}</strong> Track</Typography>
          </Box>
          <Divider />
        </Box>
        <Subsection sectionName="rules">
          <Typography variant="body1" color="textSecondary">Some rules</Typography>
        </Subsection>
      </Box>
    </ThemeProvider>
  )
}
