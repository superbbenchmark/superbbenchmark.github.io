import React from "react";
import { Paper } from "@material-ui/core";

function LiftedPaper(props) {
  const { elevation = 3, liftDegree = 6, ...remainedProps } = props;
  const [hover, setHover] = React.useState(false);

  return (
    <Paper
      {...remainedProps}
      elevation={hover ? elevation + liftDegree : elevation}
      onMouseOver={() => {
        setHover((prev) => !prev);
      }}
      onMouseOut={() => {
        setHover((prev) => !prev);
      }}
    />
  );
}

export { LiftedPaper };
