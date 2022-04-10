import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import {
    useTable,
    useBlockLayout,
    useSortBy,
    useResizeColumns,
    useGlobalFilter,
} from "react-table";
import { useSticky } from "react-table-sticky";
import InsertLinkIcon from "@material-ui/icons/InsertLink";

import { useTheme, fade } from "@material-ui/core/styles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { blueGrey, grey, red, orange, green } from "@material-ui/core/colors";
import { Typography, TextField } from "@material-ui/core";
import { Title } from "./components/Titles";
import { Section } from "./components/Sections";
import CheckIcon from "@material-ui/icons/Check";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import CropSquareIcon from "@material-ui/icons/CropSquare";
import {
    individual_submission_columnInfo,
    individual_submission_hidden_columnInfo,
    leaderboard_selections,
} from "./Data";
import { AuthContext } from "./context/auth-context";
import swal from "sweetalert";
import Model from "./components/Modal";
import TrackSelect from "./components/TrackSelect";
import SubsetSelect from "./components/SubsetSelect";
import { overall_metric_adder } from "./overall_metrics";
import { Box, Divider, FormControl, InputLabel, Select, MenuItem, Input, FormControlLabel, Switch } from "@material-ui/core";
import { NumericalSort, is_number_and_not_nan } from "./components/Utilies";
import { useLocation } from "react-router-dom";

const Styles = styled.div`
  .table {
    outline: 1px solid #ddd;

    .click-btn {
      cursor: pointer;
    }
    
    .th,
    .td {
      background-color: ${(props) => props.theme.palette.primary.main};
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      border: 0.2px solid #ddd;
      vertical-align: middle;
      padding: ${(props) => props.theme.spacing(1, 1)};
    }

    .th {
      font-weight: bold;
      padding: ${(props) => props.theme.spacing(1.5, 1)};
    }

    .toggle {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &.sticky {
      overflow: scroll;
      .header,
      .footer {
        position: sticky;
        z-index: 1;
        width: fit-content;
      }

      .header {
        top: 0;
        box-shadow: 0px 3px 3px #ccc;
      }

      .footer {
        bottom: 0;
        box-shadow: 0px -3px 3px #ccc;
      }

      .body {
        position: relative;
        z-index: 0;
      }

      [data-sticky-td] {
        position: sticky;
      }

      [data-sticky-last-left-td] {
        box-shadow: 2px 2px 3px #ccc;
      }

      [data-sticky-first-right-td] {
        box-shadow: -2px -2px 3px #ccc;
      }
    }
  }

  .resizer {
    display: inline-block;
    background: ${(props) => `${fade(props.theme.palette.text.primary, 0.2)}`};
    width: ${(props) => `${props.theme.spacing(2)}px`};
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(50%);
    z-index: 1;
    ${"" /* prevents from scrolling while dragging on touch devices */}
    touch-action:none;

    &.isResizing, &:hover {
      background: ${(props) =>
        `${fade(props.theme.palette.text.primary, 0.6)}`};
    }
`;

function Table({ columns, data, height = "500px", tableControlRef = null }) {
    const theme = useTheme();
    const defaultColumn = React.useMemo(
        () => ({
            minWidth: 10,
            width: 150,
            maxWidth: 400,
        }),
        []
    );
    const defaultSortby = React.useMemo(() => [
        {
            id: "aoeTimeUpload",
            desc: true,
        },
    ]);

    const tableInstance = useTable(
        {
            columns,
            data,
            defaultColumn,
            initialState: {
                hiddenColumns: [
                    "modelURL",
                    "stride",
                    "inputFormat",
                    "corpus",
                    "paramDesc",
                    "paramShared",
                    "fineTunedParam",
                    "taskSpecParam",
                    "stateInfo",
                    "submitUUID",
                ],
                sortBy: defaultSortby,
            },
        },
        useSortBy,
        useBlockLayout,
        useResizeColumns,
        useSticky
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        tableInstance;

    return (
        <Styles theme={theme}>
            <Model
                tableInstance={tableInstance}
                modalOpenRef={tableControlRef}
            />
            <div
                {...getTableProps()}
                className="table sticky"
                style={{
                    width: "fit-content",
                    maxWidth: "100%",
                    maxHeight: height,
                    margin: "auto",
                }}
            >
                <div className="header">
                    {headerGroups.map((headerGroup) => (
                        <div
                            {...headerGroup.getHeaderGroupProps()}
                            className="tr"
                        >
                            {headerGroup.headers.map((column) => {
                                let color =
                                    column.isSortedDesc == undefined ||
                                        column.higherBetter == undefined
                                        ? theme.palette.text.primary
                                        : column.isSortedDesc ==
                                            column.higherBetter
                                            ? green[300]
                                            : red[300];

                                return (
                                    <div
                                        {...column.getHeaderProps()}
                                        className="th"
                                    >
                                        <div
                                            {...column.getSortByToggleProps()}
                                            className="toggle"
                                        >
                                            <span
                                                style={{
                                                    margin: "0px 1px",
                                                    color: color,
                                                }}
                                            >
                                                {column.render("Header")}
                                            </span>
                                            {column.higherBetter != undefined &&
                                                (column.higherBetter ? (
                                                    <ArrowUpwardIcon
                                                        style={{
                                                            fontSize: 16,
                                                            color: color,
                                                        }}
                                                    />
                                                ) : (
                                                    <ArrowDownwardIcon
                                                        style={{
                                                            fontSize: 16,
                                                            color: color,
                                                        }}
                                                    />
                                                ))}
                                        </div>
                                        <div
                                            {...column.getResizerProps()}
                                            className={`resizer ${column.isResizing
                                                ? "isResizing"
                                                : ""
                                                }`}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>

                <div {...getTableBodyProps()} className="body">
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <div {...row.getRowProps()} className="tr">
                                {row.cells.map((cell) => {
                                    return (
                                        <div
                                            {...cell.getCellProps()}
                                            className="td"
                                        >
                                            {cell.render("Cell")}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </Styles>
    );
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Profile(props) {
    let query = useQuery();

    const theme = useTheme();
    const auth = useContext(AuthContext);
    const [allSubmissionData, setAllSubmissionData] = useState([]);
    const [allHiddenSubmissionData, setAllHiddenSubmissionData] = useState([]);
    const [shownData, setShownData] = useState([]);
    const [shownHiddenData, setShownHiddenData] = useState([]);
    const [task, setTask] = useState(query.get("track") || "constrained");
    const [username, setUsername] = useState("");
    const [resetUserName, setResetUserName] = useState("");
    const [dailyCounts, setDailyCounts] = useState(0);
    const [weeklyCounts, setWeeklyCounts] = useState(0);
    const [hiddenDailyCounts, setHiddenDailyCounts] = useState(0);
    const [hiddenWeeklyCounts, setHiddenWeeklyCounts] = useState(0);
    const [subset, setSubset] = useState(query.get("subset") || "Paper");
    const track = subset.toLowerCase().includes("hidden") ? "hidden" : "public"
    const memoizedNumericSort = React.useCallback(NumericalSort);

    // edit hidden score
    const [editTask, setEditTask] = useState('');
    const [entireHiddenSubmissionData, setEntireHiddenSubmissionData] = useState([]);
    const [showAll, setShowAll] = useState(true);

    const mapping_array = {
        CONSTRAINED: "constrained",
        LESS_CONSTRAINED: "less-constrained",
        UNCONSTRAINED: "unconstrained",
    };

    const getUserName = async () => {
        await axios({
            method: "get",
            url: "/api/user/info",
            headers: {
                Authorization: "Bearer " + auth.token,
            },
        })
            .then((res) => {
                setUsername(res.data.username);
                setDailyCounts(res.data.daily_counts);
                setWeeklyCounts(res.data.weekly_counts);
                setHiddenDailyCounts(res.data.hidden_daily_counts);
                setHiddenWeeklyCounts(res.data.hidden_weekly_counts);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleResetUserName = async () => {
        await axios({
            method: "patch",
            url: "/api/user/info",
            headers: {
                Authorization: "Bearer " + auth.token,
            },
            data: {
                name: resetUserName,
            },
        })
            .then((res) => {
                setUsername(res.data.newUserName);
                swal({
                    text: `Reset to ${res.data.newUserName}!`,
                    icon: "success",
                });
            })
            .catch((error) => {
                swal({ text: "Internal server error", icon: "error" });
                console.error(error);
            });
    };

    const getIndividualSubmission = async () => {
        await axios({
            method: "get",
            url: "/api/submissions",
            headers: {
                Authorization: "Bearer " + auth.token,
            },
        })
            .then((res) => {
                setAllSubmissionData(res.data.submission_info);
                // console.log(res.data.submission_info);
                task === "all"
                    ? setShownData(res.data.submission_info)
                    : setShownData(
                        res.data.submission_info.filter(
                            (data) => mapping_array[data.task] === task
                        )
                    );
            })
            .catch((error) => {
                console.error(error);
            });
        await axios({
            method: "get",
            url: "/api/hiddensubmissions",
            headers: {
                Authorization: "Bearer " + auth.token,
            },
        })
            .then((res) => {
                setAllHiddenSubmissionData(res.data.submission_info);
                // console.log(res.data.submission_info);
                task === "all"
                    ? setShownHiddenData(res.data.submission_info)
                    : setShownHiddenData(
                        res.data.submission_info.filter(
                            (data) => mapping_array[data.task] === task
                        )
                    );
            })
            .catch((error) => {
                console.error(error);
            });
        if (auth.isAdmin) {
            await axios({
                method: "get",
                url: "/api/hiddensearch/",
                headers: {
                    Authorization: "Bearer " + auth.token,
                },
            })
                .then((res) => {
                    setEntireHiddenSubmissionData(res.data.submission_info)
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    const onTaskChange = (e) => {
        setTask(e.target.value);

        // push history
        const url = new URL(window.location);
        url.searchParams.set("track", e.target.value);
        window.history.pushState({}, '', url);

        let setShown = track === "hidden" ? setShownHiddenData : setShownData;
        let allData = track === "hidden" ? allHiddenSubmissionData : allSubmissionData;
        e.target.value === "all"
            ? setShown(allData)
            : setShown(
                allData.filter(
                    (data) => mapping_array[data.task] === e.target.value
                )
            );
    };

    const handleNameOnChange = (e) => {
        setResetUserName(e.target.value);
    };

    const setShowOnLeaderboard = async (submission_id) => {
        await axios({
            method: "patch",
            url: (track == "hidden" ? "/api/hiddensubmission/" : "/api/submission/") + submission_id,
            headers: {
                Authorization: "Bearer " + auth.token,
            },
        })
            .then((res) => {
                swal({ text: res.data.message, icon: "success" });
                getIndividualSubmission();
            })
            .catch((error) => {
                swal({ text: "Internal server error", icon: "error" });
            });
    };
    const parseShowCell = ({ row, value }) => {
        if (value === "NO")
            return (
                <CropSquareIcon
                    className="click-btn"
                    onClick={() => setShowOnLeaderboard(row.original.submitUUID)}
                ></CropSquareIcon>
            );
        else
            return (
                <CheckIcon
                    className="click-btn"
                    style={{ color: green[500] }}
                    onClick={() => setShowOnLeaderboard(row.original.submitUUID)}
                ></CheckIcon>
            );
    };

    const parseDownload = ({ row }) => {
        return (
            <InsertLinkIcon
                className="click-btn"
                onClick={() => downloadPreviousUpload(row.allCells[16].value)}
            ></InsertLinkIcon>
        );
    };

    const downloadPreviousUpload = async (submission_id) => {
        await axios({
            method: "get",
            url: "/api/submission/" + submission_id,
            headers: {
                Authorization: "Bearer " + auth.token,
            },
            responseType: "blob",
        })
            .then((data) => {
                let blob = new Blob([data.data], { type: "application.zip" });
                const link = document.createElement("a");
                const url = URL.createObjectURL(blob);
                link.href = url;
                link.download = "predict.zip";
                link.click();
            })
            .catch((error) => {
                swal({ text: "Internal server error", icon: "error" });
            });
    };

    const parseModelURL = ({ value }) => {
        if (value === "-") return String(value);
        else
            return (
                <a href={value}>
                    <InsertLinkIcon style={{ height: "20px" }}></InsertLinkIcon>
                </a>
            );
    };

    useEffect(() => {
        getIndividualSubmission();
        getUserName();
    }, [auth.isAdmin]);

    const patchhiddenscore = async () => {
        if (auth.isAdmin) {
            let submissionID = document.getElementById("submission-id").value;
            let editValue = document.getElementById("edit-value").value;

            await axios({
                method: "patch",
                url: `/api/hiddenmodify/${submissionID}&${editTask}&${editValue}`,
                headers: {
                    Authorization: "Bearer " + auth.token,
                },
            })
                .then((res) => {
                    swal({ text: res.data.message, icon: "success" });
                    getIndividualSubmission();
                })
                .catch((error) => {
                    swal({ text: "Internal server error", icon: "error" });
                });
        }
    }

    let columnInfo = track == "hidden" ? individual_submission_hidden_columnInfo : individual_submission_columnInfo;
    let columns = Object.keys(columnInfo).map((key) => {
        let isScore = columnInfo[key].isScore
        return {
            Header: columnInfo[key].header,
            accessor: key,
            width: columnInfo[key].width,
            sortType:
                columnInfo[key] == "number"
                    ? memoizedNumericSort
                    : "alphanumeric",
            higherBetter: columnInfo[key].higherBetter,
            isScore: isScore,
            Cell:
                key === "showOnLeaderboard"
                    ? parseShowCell
                    : key === "modelURL"
                        ? parseModelURL
                        : key === "download" && track === "public"
                            ? parseDownload
                            : ({ value }) => isScore ? (is_number_and_not_nan(value) ? String(Math.round(value * 100) / 100) : "-") : (value == undefined ? "-" : String(value)),
        };
    });
    columns[0]["sticky"] = "left";

    const onSubsetChange = (e) => {
        setSubset(e.target.value);

        // push history
        const url = new URL(window.location);
        url.searchParams.set("subset", e.target.value);
        window.history.pushState({}, '', url);
    };

    let trimmedColumns, trimmedShownData;
    let data;
    if (track == "hidden") {
        if (showAll && auth.isAdmin) {
            data = entireHiddenSubmissionData;
        }
        else {
            data = shownHiddenData;
        }
    }
    else {
        data = shownData
    }
    [trimmedColumns, trimmedShownData] = overall_metric_adder(["interpolation", "interpolation_p"], columns, data, subset, memoizedNumericSort)
    const memoColumns = React.useMemo(() => trimmedColumns);

    const resetbtnstyle = {
        margin: 10,
    };

    return (
        <>
            <Section anchorKey="personal-profile" margin={theme.spacing(8, "auto", 1)}>
                <Title
                    title={"Hello " + username}
                    description={
                        <div>
                            <p><span>Public submissions: </span><strong>{`${dailyCounts}/day, ${weeklyCounts}/week`}</strong></p>
                            <p><span>Hidden submissions: </span><strong>{`${hiddenDailyCounts}/day, ${hiddenWeeklyCounts}/week`}</strong></p>
                        </div>
                    }
                />
                <TextField
                    required
                    label="Reset your name"
                    id="name-reset"
                    defaultValue={username}
                    size="small"
                    color="secondary"
                    onChange={handleNameOnChange}
                />
                <Button
                    variant="contained"
                    size="small"
                    className="reset-name-btn"
                    style={resetbtnstyle}
                    onClick={handleResetUserName}
                >
                    Reset
                </Button>
            </Section>
            <Section anchorKey="personal-submission">
                <Title
                    title="Submission history"
                    description="You can check the checkbox to show your submission result(s) on the leaderboard."
                />
                <Box width="90%" margin="auto">
                    {
                        auth.isAdmin &&
                        <>
                            <FormControlLabel
                                control={<Switch checked={showAll} onChange={(e) => { setShowAll(e.target.checked) }} name="showAll" />}
                                label="All Submissions"
                            />
                            <Divider style={{ width: "600px", maxWidth: "80%", margin: "auto" }} />
                        </>
                    }
                    <Box margin={theme.spacing(2, "auto", 0.2)}>
                        <TrackSelect task={task} onTaskChange={onTaskChange} />
                    </Box>
                    <Divider style={{ width: "600px", maxWidth: "80%", margin: "auto" }} />
                    <Box margin={theme.spacing(0.2, "auto", 1)}>
                        <SubsetSelect subset={subset} selections={["Paper", "Public Set", "Hidden Dev Set"]} onChange={onSubsetChange} />
                    </Box>
                </Box>
                <Table columns={memoColumns} data={trimmedShownData} {...props} />
                {
                    auth.isAdmin &&
                    <Section>
                        <Box margin="10px">
                            <Title
                                title="Edit Hidden Score"
                                description="Great power comes with great responsibility."
                            />
                            <FormControl style={{ margin: "10px" }}>
                                <InputLabel style={{ color: grey[600] }} htmlFor="submission-id">Submission ID</InputLabel>
                                <Input id="submission-id" />
                            </FormControl>
                            <FormControl style={{ width: "200px", margin: "10px" }}>
                                <InputLabel id="demo-customized-select-label">Task</InputLabel>
                                <Select
                                    labelId="demo-customized-select-label"
                                    id="demo-customized-select"
                                    value={editTask}
                                    onChange={(e) => { setEditTask(e.target.value) }}
                                >
                                    {
                                        Object.keys(individual_submission_hidden_columnInfo).map((key) => {
                                            return (
                                                individual_submission_hidden_columnInfo[key].isScore &&
                                                <MenuItem value={key}>{key}</MenuItem>
                                            )
                                        })
                                    }
                                </Select>
                            </FormControl>
                            <FormControl style={{ margin: "10px" }}>
                                <InputLabel style={{ color: grey[600] }} htmlFor="edit-value">Edit Value</InputLabel>
                                <Input id="edit-value" />
                            </FormControl>
                        </Box>
                        <Button color="primary" variant="contained" onClick={patchhiddenscore}>Edit</Button>
                    </Section>
                }
            </Section>
        </>
    );
}

export default Profile;
