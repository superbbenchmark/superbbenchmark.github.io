import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import { Box, Button, Grid, Typography, Link } from "@material-ui/core";

import { Title } from "./components/Titles";
import SubmitForm from "./components/SubmitForm";
import { Section } from "./components/Sections";
import { DescriptionButton, MultiLinkButton } from "./components/Buttons";
import { Strong, capitalizeFirstLetter } from "./components/Utilies";
import { tracks } from "./Data";
import AdaptiveLink from "./components/AdaptiveLink";
import { HashLink } from "react-router-hash-link";

const useStyles = makeStyles((theme) => ({}));

export default function Submit(props) {
    const classes = useStyles();
    const theme = useTheme();
    const match = useRouteMatch();

    return (
        <Section>
            <Switch>
                <Route path={`${match.path}`} exact>
                    <Section margin={theme.spacing(8, "auto", 1)}>
                        <Title
                            title="Rules"
                            description={
                                <span>
                                    Submissions are categorized into{" "}
                                    <Strong>three tracks</Strong> for different
                                    usages of the shared pretrained model, and
                                    should follow the{" "}
                                    <DescriptionButton
                                        name="general rules"
                                        link={`${match.url}#general-rules`}
                                    />
                                    and the track-specific rules.
                                </span>
                            }
                        />
                        <Grid
                            container
                            direction="row"
                            spacing={4}
                            justify="center"
                            alignItems="center"
                        >
                            {tracks.map(
                                ({ name, rules, submit, theme: trackTheme }) => {
                                    return (
                                        <Grid item>
                                            <ThemeProvider theme={trackTheme}>
                                                <div>
                                                    <Typography
                                                        component="span"
                                                        variant="body1"
                                                        color="primary"
                                                    >
                                                        <strong>
                                                            {capitalizeFirstLetter(
                                                                name.toLowerCase()
                                                            )}
                                                        </strong>{" "}
                                                        track
                                                    </Typography>
                                                    <Box
                                                        marginTop={`${theme.spacing(
                                                            1
                                                        )}px`}
                                                    >
                                                        <MultiLinkButton
                                                            buttons={[
                                                                {
                                                                    name: "rules",
                                                                    link: rules
                                                                        ? `${match.url}#${name}`
                                                                        : null,
                                                                },
                                                            ]}
                                                        />
                                                    </Box>
                                                </div>
                                            </ThemeProvider>
                                        </Grid>
                                    );
                                }
                            )}
                        </Grid>
                    </Section>
                    <Section anchorKey="general-rules" margin={theme.spacing(8, "auto", 1)}>
                        <Title
                            title="General Rules"
                            description="The general rules applied to all tracks."
                        />
                        <Typography variant="body1" color="textSecondary">
                            <p>The rules here apply to all the submissions, including</p>
                            <p><HashLink to="/leaderboard?track=constrained&subset=Paper">SUPERB Benchmark</HashLink></p>
                            <p><HashLink to="/leaderboard?track=constrained&subset=Public+Set">SUPERB Challenge Public-set</HashLink></p>
                            <p><HashLink to="/leaderboard?track=constrained&subset=Hidden+Dev+Set">SUPERB Challenge Hidden-set</HashLink></p>
                        </Typography>
                    </Section>
                    <Section anchorKey="track-rules" margin={theme.spacing(8, "auto", 1)}>
                        <Title
                            title="Track Rules"
                            description="The track-specific rules for each of the tracks."
                        />
                        {tracks.map(
                            ({ name, rules, submit, theme: trackTheme }) => {
                                return (
                                    <ThemeProvider theme={trackTheme}>
                                        <Box maxWidth={650} margin="auto">
                                            <Section anchorKey={name}>
                                                <Title
                                                    title={capitalizeFirstLetter(
                                                        name.toLowerCase()
                                                    )}
                                                    titleVariant="h5"
                                                    titleColor="primary"
                                                    divider={false}
                                                />
                                                <Typography
                                                    variant="body1"
                                                    color="textSecondary"
                                                >
                                                    {rules}
                                                </Typography>
                                            </Section>
                                        </Box>
                                    </ThemeProvider>
                                );
                            }
                        )}
                    </Section>
                    <Section anchorKey="download-example" margin={theme.spacing(8, "auto", 1)}>
                        <Title
                            title="Submission example"
                            description="Download an example of submission."
                        />
                        <Typography variant="body1" color="textSecondary">
                            The prediction output of each task should be put in seperated folder sepified by the task.
                            Finally, please put all the task folders in one folder called <Strong>predict</Strong>{" "}
                            and submit a zip archive. You can download an example for submission from this&nbsp;
                            <Link href={"/api/download/example"} color="secondary">Link</Link>.
                        </Typography>
                    </Section>
                </Route>
                {tracks.map((track) => {
                    const { name, theme: trackTheme } = track;
                    return (
                        <Route path={`${match.path}/${name}`}>
                            <ThemeProvider theme={trackTheme}>
                                <SubmitForm {...track} />
                            </ThemeProvider>
                        </Route>
                    );
                })}
            </Switch>
        </Section>
    );
}
