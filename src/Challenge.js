import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { FaBars } from "react-icons/fa";
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight as colorTheme } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { HashLink } from 'react-router-hash-link';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';

import { Section } from "./components/Sections";
import { scrollWithOffset } from "./utils/scroll-with-offset";
import policy from "./policy";
import './custom.scss';



const useStyles = makeStyles((theme) => ({
    ProSidebar: {
        position: "fixed",
        top: "0px",
        left: "0px",
        "padding-top": "60px",
        color: "#aaa",
        "background-color": "#aeaeae",
        boxShadow: "2px 3px 5px rgba(0, 0, 0, 0.1)",
    },
    BtnToggle: {
        position: "fixed",
        top: "80px",
        left: "20px",
        fontSize: "20px",
    }
}));

function Challenge(props) {
    const theme = useTheme();
    const classes = useStyles();
    const [toggled, setToggled] = React.useState(false);
    
    const markdown_block = (
        <Section align="left">
            <ReactMarkdown
                children={policy}
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[rehypeKatex]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                language={match[1]}
                                PreTag="div"
                                style={colorTheme}
                                showLineNumbers={true}
                                {...props}
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    },
                    a({ href, children, ...props }) {
                        const match = /.*superbbenchmark\.org\/\w+/.exec(href || '')
                        return match ? (
                            <HashLink to={match[0].replace(/.*superbbenchmark\.org/, "") + "#top"} {...props}>
                                {children}
                            </HashLink>
                        ) : (
                            <a href={href} {...props}>
                                {children}
                            </a>
                        )
                    },
                    h1({ level, children, ...props }) {
                        const id = children.toString().replace(/ /g, '-')
                        return <h1 id={id}>{children}</h1>
                    },
                    h2({ level, children, ...props }) {
                        const id = children.toString().replace(/ /g, '-')
                        return <h2 id={id}>{children}</h2>
                    },
                    h3({ level, children, ...props }) {
                        const id = children.toString().replace(/ /g, '-')
                        return <h3 id={id}>{children}</h3>
                    },
                    h4({ level, children, ...props }) {
                        const id = children.toString().replace(/ /g, '-')
                        return <h4 id={id}>{children}</h4>
                    },
                    h5({ level, children, ...props }) {
                        const id = children.toString().replace(/ /g, '-')
                        return <h5 id={id}>{children}</h5>
                    }

                }}
            />
        </Section>
    )

    const headers = policy.split("\n").filter(e => e.match(/^[#]{1,3}[^#]+$/g))

    function getMenuItem(item) {
        const id = item.replace(/^[#]+\s/g, "").toString().replace(/ /g, '-')
        return (
            <MenuItem>
                <HashLink to={"#" + id} scroll={scrollWithOffset}>
                    {item.slice(1).replace(/#/g, "\xa0\xa0")}
                </HashLink>
            </MenuItem>
        )
    }

    return (
        <div>
            <div 
                className={`${classes.BtnToggle}`}
                onClick={() => setToggled(true)}
            >
                <FaBars />
            </div>
            <ProSidebar
                toggled={toggled}
                onToggle={setToggled}
                className={`${classes.ProSidebar}`}
                breakPoint="xl"
            >
                <Menu iconShape="square">
                    {headers.map(getMenuItem)}
                </Menu>
            </ProSidebar>
            {markdown_block}
        </div>
    );
}

export default Challenge;