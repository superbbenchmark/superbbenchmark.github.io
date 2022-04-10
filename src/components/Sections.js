import React from "react";
import { useTheme } from "@material-ui/styles";
import { Box } from "@material-ui/core";

function SectionTemplate(props) {
  const theme = useTheme();
  const { anchorKey, ...remainedProps } = props;

  return (
    <React.Fragment>
      <Box
        id={anchorKey}
        position="relative"
        top={theme.spacing(-4)}
        visibility="hidden"
      ></Box>
      <Box {...remainedProps} />
    </React.Fragment>
  );
}

function Section(props) {
  const theme = useTheme();

  return <SectionTemplate margin={theme.spacing(4, "auto", 8)} {...props} />;
}

function SubSection(props) {
  const theme = useTheme();

  return <SectionTemplate margin={theme.spacing(4, "auto", 6)} {...props} />;
}

function SubSubSection(props) {
  const theme = useTheme();

  return <SectionTemplate margin={theme.spacing(4, "auto", 4)} {...props} />;
}

export { Section, SubSection, SubSubSection };
