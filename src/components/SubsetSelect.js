import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { capitalizeFirstLetter } from "./Utilies";
import { Typography, FormControl } from "@material-ui/core";
import AdaptiveLink from "./AdaptiveLink";

export default function SubsetSelect({ subset, selections, onChange }) {
    let get_shown_name = (originName) => {
        let name = originName.toLowerCase();
        if (name === "paper") {
            return "Paper";
        }
        else if (name === "public set") {
            return "Challenge Public";
        }
        else if (name === "hidden dev set") {
            return "Challenge Hidden Dev";
        }
        return originName;
    }

    return (
        <div className="select group" style={{ width: "fit-content", maxWidth: "100%", margin: "10px auto" }}>
            <FormControl component="fieldset">
                <span style={{ color: "#4697E1"}}>
                    Task Collections
                </span>
                <RadioGroup row aria-label="position" name="position" defaultValue="Public Set" value={subset} onChange={onChange}>
                    {selections.map((selection) => {
                        return (
                            <FormControlLabel
                                value={selection}
                                control={<Radio color="textPrimary" />}
                                label={
                                    <Typography color="textPrimary">
                                        {get_shown_name(selection)}
                                    </Typography>
                                }
                                color="primary"
                            />
                        );
                    })}
                </RadioGroup>
            </FormControl>
        </div>
    )
}