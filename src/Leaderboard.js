import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import {
    useTable,
    useBlockLayout,
    useSortBy,
    useResizeColumns,
} from "react-table";
import { useSticky } from "react-table-sticky";
import { useTheme, fade } from "@material-ui/core/styles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { blueGrey, grey, red, orange, green } from "@material-ui/core/colors";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import { hidden_dev_set, hidden_test_set, leaderboard_columnInfo, leaderboard_hidden_columnInfo } from "./Data";
import Model from "./components/Modal";
import TrackSelect from "./components/TrackSelect";
import SubsetSelect from "./components/SubsetSelect";
import { overall_metric_adder } from "./overall_metrics";
import { NumericalSort, is_number_and_not_nan, CapitalizeLetter } from "./components/Utilies";
import { Box, Divider } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { AuthContext } from "./context/auth-context";

const Styles = styled.div`
  .table {
    outline: 1px solid #ddd;
    
    .th,
    .td {
      background-color: ${(props) => props.theme.palette.primary.main};
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      border: 0.2px solid #ddd;
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
    const scores = columns.filter((item) => item.isScore);
    const randomColumn = scores[Math.floor(Math.random() * scores.length)];
    const defaultSortby = React.useMemo(() => [
        {
            id: "rank",
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
                    "aoeTimeUpload",
                    "task",
                    "stride",
                    "inputFormat",
                    "corpus",
                    "paramDesc",
                    "paramShared",
                    "fineTunedParam",
                    "taskSpecParam",
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

function LeaderBoard(props) {
    let query = useQuery();

    const auth = useContext(AuthContext);
    const theme = useTheme();
    const [LeaderboardData, setLeaderboardData] = useState([]);
    const [LeaderboardShownData, setLeaderboardShownData] = useState([]);
    const [LeaderboardHiddenData, setLeaderboardHiddenData] = useState([]);
    const [LeaderboardHiddenShownData, setLeaderboardHiddenShownData] = useState([]);
    const [task, setTask] = useState(query.get("track") || "constrained");
    const [subset, setSubset] = useState(query.get("subset") || "Paper");
    const track = subset.toLowerCase().includes("hidden") ? "hidden" : "public"
    const memoizedNumericSort = React.useCallback(NumericalSort);

    const mapping_array = {
        CONSTRAINED: "constrained",
        LESS_CONSTRAINED: "less-constrained",
        UNCONSTRAINED: "unconstrained",
    };

    const getLeaderboard = async () => {
        await axios
            .get("/api/submission/leaderboard")
            .then((res) => {
                setLeaderboardData(res.data.leaderboard);
                setLeaderboardShownData(res.data.leaderboard.filter((data) => mapping_array[data.task] === task));
            })
            .catch((error) => {
                console.error(error);
            });

        await axios({
            method: "get",
            url: "/api/hiddensubmission/leaderboard",
        })
            .then((res) => {
                let leaderboardData = res.data.leaderboard;
                function all_not_nan(submission) {
                    for (let accessor of hidden_dev_set) {
                        if(! is_number_and_not_nan(submission[accessor])) {
                            return false;
                        }
                    }
                    return true;
                }
                leaderboardData = leaderboardData.filter(submission => all_not_nan(submission));

                if (leaderboardData.length > 0) {
                    let newShownData = []
                    let names = new Set(leaderboardData.map(data => data.name));
                    for (let name of names) {
                        let submissions = leaderboardData.filter(data => data.name === name);

                        if (submissions.length < 1) {
                            continue;
                        }
                        if (name.includes("baseline")) {
                            newShownData.push(...submissions);
                            continue;
                        }

                        let userEmail = auth.email;
                        for (let submission of submissions) {
                            if (submission.email != userEmail) {
                                submission.name = "-";
                                submission.submitName = "-";
                                submission.modelDesc = "-";
                            }
                        }

                        let selected = submissions.reduce((a, b) => (a.showOnLeaderboard === "YES") || (b.showOnLeaderboard === "YES"), {
                            showOnLeaderboard: false,
                        })
                        if (selected) {
                            newShownData.push(...submissions.filter(data => data.showOnLeaderboard));
                        }
                        else {
                            newShownData.push(...submissions);
                        }
                    }
                    setLeaderboardHiddenData(newShownData);
                    setLeaderboardHiddenShownData(newShownData);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const onTaskChange = (e) => {
        setTask(e.target.value);

        // push history
        const url = new URL(window.location);
        url.searchParams.set("track", e.target.value);
        window.history.pushState({}, '', url);

        let setShown = track === "hidden" ? setLeaderboardHiddenShownData : setLeaderboardShownData;
        let allData = track === "hidden" ? LeaderboardHiddenData : LeaderboardData;
        e.target.value === "all"
            ? setShown(allData)
            : setShown(
                allData.filter(
                    (data) => mapping_array[data.task] === e.target.value
                )
            );
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
        getLeaderboard();
    }, []);

    let columnInfo = track == "hidden" ? leaderboard_hidden_columnInfo : leaderboard_columnInfo;
    let columns = Object.keys(columnInfo).map((key) => {
        let isScore = columnInfo[key].isScore
        return {
            Header: columnInfo[key].header,
            accessor: key,
            width: columnInfo[key].width,
            sortType:
                columnInfo[key].isScore
                    ? memoizedNumericSort
                    : "alphanumeric",
            higherBetter: columnInfo[key].higherBetter,
            isScore: isScore,
            Cell:
                key === "modelURL"
                    ? parseModelURL
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

    let data;
    if (track == "hidden") {
        data = LeaderboardHiddenShownData;
    }
    else {
        data = LeaderboardShownData;
    }
    let trimmedColumns, trimmedLeaderboardShownData
    [trimmedColumns, trimmedLeaderboardShownData] = overall_metric_adder(["rank", "rank_p", "interpolation", "interpolation_p"],
        columns, data, subset, memoizedNumericSort)

    const memoColumns = React.useMemo(() => trimmedColumns);

    return (
        <>
            <Box width="90%" margin="auto">
                <Box margin={theme.spacing(2, "auto", 0.2)}>
                    <TrackSelect task={task} onTaskChange={onTaskChange} />
                </Box>
                <Divider style={{ width: "600px", maxWidth: "80%", margin: "auto" }} />
                <Box margin={theme.spacing(0.2, "auto", 1)}>
                    <SubsetSelect subset={subset} selections={["Paper", "Public Set", "Hidden Dev Set"]} onChange={onSubsetChange} />
                </Box>
            </Box>
            <Table
                columns={memoColumns}
                data={trimmedLeaderboardShownData}
                {...props}
            />
        </>
    );
}

export default LeaderBoard;
