import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Modal,
  Backdrop,
  Fade,
  Paper,
  Switch,
  FormGroup,
  FormControlLabel,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";
import { blueGrey, grey, red, orange, green } from "@material-ui/core/colors";

import { Section, SubSection } from "./Sections";
import { SubTitle } from "./Titles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function TransitionsModal({
  tableInstance,
  modalOpenRef = null,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const { allColumns, setGlobalFilter } = tableInstance;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  return (
    <div>
      {modalOpenRef ? (
        <div ref={modalOpenRef} onClick={handleOpen} />
      ) : (
        <button type="button" onClick={handleOpen}>
          react-transition-group
        </button>
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box width="85%" maxWidth={700}>
            <Paper>
              <Box
                padding={theme.spacing(4, 6)}
                margin="auto"
                maxHeight="80vh"
                overflow="auto"
              >
                <SubSection>
                  <SubTitle title="Leaderboard" />
                  <Typography variant="body2" color="textSecondary">
                    All the submissions are presented in a single table. You can
                    use the buttons below to choose which tracks you are
                    interested or what information (column) you wish to compare.
                    The default ranking of all submissions are sorted by a
                    randomly selected task, so the ranking will be different
                    everytime you refresh the page. You can check the column
                    with the{" "}
                    <span style={{ color: green[300] }}>green task name</span>{" "}
                    for the current sorting column.
                  </Typography>
                </SubSection>
                <SubSection>
                  <SubTitle title="Toggles" />
                  <Box margin={theme.spacing(4, "auto", 0)}>
                    <Grid container direction="row">
                      {allColumns.map((column) => {
                        return (
                          <Grid item xs={12} sm={6} md={4} lg={3}>
                            <FormControlLabel
                              control={
                                <Switch
                                  checked={column.isVisible}
                                  onChange={() => {
                                    column.toggleHidden();
                                  }}
                                  name={column.Header}
                                />
                              }
                              label={column.Header}
                            />
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                </SubSection>
              </Box>
            </Paper>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
