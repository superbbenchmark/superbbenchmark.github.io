import { public_hidden_selections } from "../Data";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { capitalizeFirstLetter } from "./Utilies";
import { Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

export default function PubHidSelect({ type, onTypeChange }) {
    let getName = (originalName) => {
        let name = originalName.toLowerCase()
        if (name === "public") {
            return "Paper / Challenge Public"
        }
        else if (name === "hidden"){
            return "Challenge Hidden"
        }
    }

    return (
    <div className="select group" style={{width: "fit-content", maxWidth: "100%", margin: "auto",}}>
        <RadioGroup row aria-label="position" name="position" defaultValue="constrained" value={type} onChange={onTypeChange}>
        {public_hidden_selections.map((public_hidden_selection) => {
                  return (
                      <ThemeProvider theme={public_hidden_selection.theme}>
                          <FormControlLabel
                              value={public_hidden_selection.name}
                              control={<Radio color="primary" />}
                              label={
                                  <Typography color="primary">
                                      {getName(
                                          public_hidden_selection.name
                                      )}
                                  </Typography>
                              }
                              color="primary"
                          />
                      </ThemeProvider>
                  );
              })}
        </RadioGroup>
    </div>
    )
  }