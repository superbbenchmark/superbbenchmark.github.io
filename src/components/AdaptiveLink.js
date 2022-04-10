import React from 'react';
import { HashLink } from 'react-router-hash-link';
import {
  useLocation,
} from "react-router-dom";
import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
}));


export default function AdaptiveLink(props) {
  const { link, children } = props;
  const Link = link ? HashLink : Box;
  const location = useLocation();
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box component="span" fontWeight={location.pathname.includes(link) ? "bold" : "inherit"}>
      {
        (link ? link : "").includes("http") ?
          <a className="unlink" href={link ? link : ""} target="_blank">
            {children}
          </a>
          :
          <Link className="unlink" to={link ? link : ""}>
            {children}
          </Link>
      }
    </Box>
  )
}