import { leaderboard_selections } from "../Data";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { capitalizeFirstLetter } from "./Utilies";
import { Typography, FormControl } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import AdaptiveLink from "./AdaptiveLink";

export default function TrackSelect({ task, onTaskChange }) {
    let get_shown_name = (originName) => {
        let name = originName.toLowerCase();
        if (name === "less-constrained") {
            return "Less.";
        }
        else if (name === "unconstrained") {
            return "Un.";
        }
        else if (name === "constrained") {
            return "Const.";
        }
        else if (name === "all") {
            return "All";
        }
        else {
            return originName;
        }
    }

    return (
        <div className="select group" style={{ width: "fit-content", maxWidth: "100%", margin: "5px auto" }}>
            <FormControl component="fieldset">
                <AdaptiveLink link="rules">
                    <span style={{ color: "#4697E1", textDecoration: "underline", textDecorationThickness: 0.5 }}>
                        Tracks
                    </span>
                </AdaptiveLink>
                <RadioGroup row aria-label="position" name="position" defaultValue="constrained" value={task} onChange={onTaskChange}>
                    {leaderboard_selections.map((leaderboard_selection) => {
                        return (
                            <ThemeProvider theme={leaderboard_selection.theme}>
                                <FormControlLabel
                                    value={leaderboard_selection.name}
                                    control={<Radio color="primary" />}
                                    label={
                                        <Typography color="primary">
                                            {get_shown_name(leaderboard_selection.name)}
                                        </Typography>
                                    }
                                    color="primary"
                                />
                            </ThemeProvider>
                        );
                    })}
                </RadioGroup>
            </FormControl>
        </div>
    )
}