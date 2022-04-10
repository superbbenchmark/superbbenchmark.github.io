import React, { useRef, useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import { Typography, Link, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Section, SubSection, SubSubSection } from "./components/Sections";
import { DescriptionButton } from "./components/Buttons";
import { Strong } from "./components/Utilies";
import { subscribe_link } from "./Data";
import YouTube from 'react-youtube';
import { Title } from "./components/Titles";
import { HashLink } from "react-router-hash-link";

export default function Landing(props) {
    const theme = useTheme();
    const ref = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(ref.current.offsetWidth)
    }, []);

    const videoWidth = Math.min(width, 700)
    const opts = {
        height: videoWidth / 1920 * 1080,
        width: videoWidth,
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return (
        <Box ref={ref} margin={theme.spacing(0, 0, 8)}>
            <Box margin={theme.spacing(8, "auto", 1)}>
                <Typography variant="h2" color="textPrimary">
                    <strong>SUPERB</strong>
                </Typography>
            </Box>
            <Box margin={theme.spacing(1, "auto", 6)}>
                <Typography
                    variant={
                        useMediaQuery(theme.breakpoints.up("sm")) ? "h4" : "h5"
                    }
                    color="textPrimary"
                >
                    <strong>S</strong>peech processing <strong>U</strong>
                    niversal <strong>PER</strong>formance <strong>B</strong>
                    enchmark
                </Typography>
            </Box>
            <Box margin={theme.spacing(1, "auto", 6)}>
                <p><strong><a href={subscribe_link} target="_blank" rel="noopener noreferrer">Subscribe</a></strong> our e-news to receive all the latest information about SUPERB or <strong>contact us</strong> via</p>
                <p><strong><a href="mailto:superb.announcement@gmail.com" target="_blank">superb.announcement@gmail.com</a></strong></p>
            </Box>
            <Box maxWidth={800} margin={theme.spacing(1, "auto", 6)}>
                <Typography variant="h6" color="textPrimary">
                    <strong>2021 SUPERB Challenge Timeline</strong>
                </Typography>
                <span align="left">
                    <HashLink to="/challenge-aaai2022#top">Challenge Policy</HashLink>
                    <ul>
                        <li><span><Strong>Sep 18, 2021</Strong>: <HashLink to="/news#announcement2021">Challenge announcement</HashLink> &amp; </span><a
                            href="https://github.com/s3prl/s3prl" target="_blank" rel="noopener"><span>S3PRL</span></a><span> released</span></li>
                        <li><span><Strong>Sep 30, 2021</Strong>: <HashLink to="/challenge-aaai2022#Overall-Metrics">Overall metrics</HashLink> announcement &amp; </span>
                            <HashLink to="/leaderboard?subset=Public+Set&track=constrained">public-set leaderboard</HashLink>
                            <span> is online and <HashLink to="/submit?type=public">accepts submissions</HashLink></span></li>
                        <li><span><Strong>Oct 15, 2021</Strong>: <HashLink to="/leaderboard?subset=Hidden+Dev+Set&track=constrained">Hidden-set leaderboard</HashLink> is online and <HashLink to="/submit?type=hidden">accepts submissions</HashLink></span></li>
                        <li><span><Strong>Nov 12, 2021</Strong>: </span><a href="https://aaai-sas-2022.github.io/" target="_blank"
                            rel="noopener"><span>AAAI workshop</span></a><span> paper submission deadline (encouraged)</span></li>
                        <li><span><Strong>Dec 3, 2021</Strong>: </span><a href="https://aaai-sas-2022.github.io/" target="_blank"
                            rel="noopener"><span>AAAI workshop</span></a><span> paper acceptance / rejection announcement</span>
                        </li>
                        <li><span><Strong>Jan 10, 2022</Strong>: Hidden-set leaderboard submission deadline</span></li>
                        <li><span><Strong>Jan 13, 2022</Strong>: Submission selection &amp; system description paper deadline</span></li>
                        <li><span><Strong>Jan 20, 2022</Strong>: Winner announcement &amp; reveal hidden-set private scores</span></li>
                        <li><span><Strong>Jan 22, 2022</Strong>: AAAI late </span><a href="https://aaai.org/Conferences/AAAI-21/registration/"
                            target="_blank" rel="noopener"><span>registration</span></a><span> deadline</span></li>
                        <li><span>Feb 28 - Mar 1, 2022: </span><a href="https://aaai-sas-2022.github.io/" target="_blank"
                            rel="noopener"><span>AAAI workshop</span></a><span> presentation</span></li>
                    </ul>
                </span>
            </Box>
            <YouTube videoId="zd9fiVvej0k" opts={opts} />
            <Box maxWidth={800} margin="auto" textAlign="left">
                <SubSection>
                    <SubSubSection>
                        <Typography
                            component={"span"}
                            variant="body1"
                            color="textSecondary"
                        >
                            SUPERB is a collection of benchmarking resources to
                            evaluate the capability of a universal shared
                            representation for speech processing.SUPERB
                            consists of the following:
                            <div
                                style={{
                                    width: "fit-content",
                                    margin: "auto",
                                    textAlign: "left",
                                }}
                            >
                                <ol>
                                    <li>
                                        A benchmark of ten speech processing
                                        tasks[1]built on established public
                                        datasets,
                                    </li>
                                    <li>
                                        A
                                        <DescriptionButton
                                            name={<a>benchmark toolkit</a>}
                                            link={
                                                "https://github.com/s3prl/s3prl"
                                            }
                                        />
                                        designed to evaluate and analyze
                                        pretrained model performance on various
                                        downstream tasks following the
                                        conventional evaluation protocols from
                                        speech communities,
                                    </li>
                                    <li>
                                        A public
                                        <DescriptionButton
                                            name={<a>leaderboard</a>}
                                            link="/leaderboard"
                                        />
                                        for{" "}
                                        <DescriptionButton
                                            name={<a>submissions</a>}
                                            link="/submit"
                                        />
                                        and performance tracking on the
                                        benchmark.
                                    </li>
                                </ol>
                            </div>
                        </Typography>
                    </SubSubSection>
                    <SubSubSection>
                        <Typography variant="body1" color="textSecondary">
                            SUPERB aims to offer the community a standard and
                            comprehensive framework to train, evaluate, and
                            compare the generalizability of universal speech
                            representations on speech processing tasks.A
                            universal speech representation can be leveraged to
                            quickly adapt to diverse downstream tasks with
                            minimum architectural change and downstream
                            fine-tuning, so as to reduce the model development
                            cycle time for new tasks.To emphasize on evaluating
                            the quality of the learned universal representation,
                            SUPERB puts an explicit constraint on the downstream
                            model and limits its parameter size.
                        </Typography>
                    </SubSubSection>
                    <SubSubSection>
                        <Typography variant="body1" color="textSecondary">
                            The ultimate goal of SUPERB is to democratize the
                            advancement in speech processing with powerful,
                            generalizable, and reusable speech representations.
                            SUPERB is a long-term maintained and continuously
                            developing project.As we are gradually releasing
                            new tasks and opening new tracks, we invite
                            researchers to participate in the challenge and
                            advance the research frontier together.
                        </Typography>
                    </SubSubSection>
                    <SubSubSection>
                        <Typography variant="body1" color="textSecondary">
                            We also want to let you know that <a href="https://signalprocessingsociety.org/blog/ieee-jstsp-special-issue-self-supervised-learning-speech-and-audio-processing" target="_blank" rel="noopener noreferrer">IEEE JSTSP Special Issue on Self-Supervised Learning for Speech and Audio Processing</a> is call-for-paper.The deadline is <Strong>December 31, 2021</Strong>.The research based on SUPERB will be very suitable for the special issue.If you have any questions about the special issue, please feel free to contact Hung-yi Lee (<a href="mailto:hungyilee@ntu.edu.tw" target="_blank" rel="noopener noreferrer">hungyilee@ntu.edu.tw</a>).
                        </Typography>
                    </SubSubSection>
                </SubSection>
                <SubSection>
                    <Grid container justify="space-evenly" spacing={0}>
                        {[
                            ["ntu-1000.png", "https://www.ntu.edu.tw/english/"],
                            ["cmu-1000.png", "https://www.cmu.edu/"],
                            ["mit-1000.png", "https://www.mit.edu/"],
                            ["jhu-1000.png", "https://www.jhu.edu/"],
                            ["fair-1000.png", "https://ai.facebook.com/"],
                            ["lxt-1000.png", "https://www.lxt.ai/"],
                            ["huggingface-1000.png", "https://huggingface.co/"]
                        ].map((filename) => {
                            return (
                                <Grid item xs={6} sm={4} md={4} key={filename[0]}>
                                    <a target="_blank" href={filename[1]}>
                                        <img src={filename[0]} width="100%" />
                                    </a>
                                </Grid>
                            );
                        })}
                    </Grid>
                </SubSection>
                <Box margin={theme.spacing(8, 0)} textAlign="center">
                    <Title title="Acknowledgement"/>
                    <Typography variant="body1" color="textSecondary">
                        We thank <DescriptionButton name={<a>Ming-Yang Ho</a>} link="https://kaminyou.com/" /> for creating and maintaining the SUPERB official website.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
