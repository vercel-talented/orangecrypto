import React from "react";

export default function OverMenuBody() {
    return (
        <>
            <div
                className="md:py-[60px] border-b border-white border-opacity-30 flex-grow overflow-auto"
                style={{
                    margin: "0px",
                    padding: "0px",
                    height: 'calc(100vh - 104px - 117px)',
                    outline: "none",
                    boxShadow: "none",
                    scrollbarWidth: "unset",
                    borderWidth: "0px",
                    borderStyle: "solid",
                    boxSizing: "border-box",
                    flexGrow: 1,
                    overflow: "auto",
                    borderBottomWidth: "1px",
                    borderColor: "rgb(255 255 255 / .3)",
                    paddingTop: "60px",
                    paddingBottom: "60px",
                }}
            >
                <div
                    className="page-container"
                    style={{
                        padding: "0px",
                        outline: "none",
                        boxShadow: "none",
                        scrollbarWidth: "unset",
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px auto",
                        position: "relative",
                        width: "1290px",
                    }}
                >
                    <div
                        className="w-full flex max-sm:flex-col items-start justify-between md:gap-[60px]"
                        style={{
                            textAlign: 'left',
                            margin: "0px",
                            padding: "0px",
                            outline: "none",
                            boxShadow: "none",
                            scrollbarWidth: "unset",
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "flex",
                            width: "100%",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            gap: "60px",
                        }}
                    >
                        <div
                            className="desktop-menu__block"
                            style={{
                                margin: "0px",
                                padding: "0px",
                                outline: "none",
                                boxShadow: "none",
                                scrollbarWidth: "unset",
                                borderWidth: "0px",
                                borderStyle: "solid",
                                boxSizing: "border-box",
                                borderColor: "rgb(255 255 255 / .3)",
                                display: "flex",
                                flexDirection: "column",
                                gap: "26px",
                            }}
                        >
                            <div
                                className="desktop-menu__block-title-wrapper"
                                style={{
                                    margin: "0px",
                                    padding: "0px",
                                    outline: "none",
                                    boxShadow: "none",
                                    scrollbarWidth: "unset",
                                    borderWidth: "0px",
                                    borderStyle: "solid",
                                    borderColor: "rgb(229, 231, 235)",
                                    boxSizing: "border-box",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <p
                                    className="desktop-menu__block-title"
                                    style={{
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        fontSize: "1.5rem",
                                        fontWeight: 700,
                                        lineHeight: "31px",
                                        color: "rgb(255 255 255 / 1)",
                                    }}
                                >
                                    About
                                </p>
                                <svg
                                    className="w-6 md:hidden transition-transform rotate-180"
                                    height="30"
                                    width="30"
                                    fill="none"
                                    viewBox="0 0 30 30"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                        margin: "0px",
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        verticalAlign: "middle",
                                        width: "1.5rem",
                                        transform:
                                            "translate(0,0) rotate(180deg) skew(0) skewY(0) scaleX(1) scaleY(1)",
                                        transitionProperty: "transform",
                                        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                        transitionDuration: "0.15s",
                                        display: "none",
                                    }}
                                >
                                    <path
                                        d="M27.1338 19.1161L15.8838 7.86614C15.7678 7.75004 15.63 7.65795 15.4784 7.59511C15.3267 7.53228 15.1642 7.49993 15.0001 7.49993C14.8359 7.49993 14.6734 7.53228 14.5217 7.59511C14.3701 7.65795 14.2323 7.75004 14.1163 7.86614L2.86629 19.1161C2.74977 19.2321 2.65726 19.3699 2.59407 19.5217C2.53088 19.6734 2.49825 19.8362 2.49805 20.0005C2.49784 20.1649 2.53007 20.3278 2.59289 20.4797C2.6557 20.6316 2.74787 20.7696 2.86411 20.8859C2.98035 21.0021 3.11838 21.0943 3.27029 21.1571C3.42221 21.2199 3.58502 21.2521 3.74941 21.252C3.9138 21.2518 4.07654 21.2191 4.2283 21.1559C4.38006 21.0928 4.51787 21.0003 4.63383 20.8837L15.0001 10.5175L25.3663 20.8837C25.4823 21.0003 25.6201 21.0928 25.7718 21.1559C25.9236 21.2191 26.0863 21.2518 26.2507 21.252C26.4151 21.2521 26.5779 21.2199 26.7298 21.1571C26.8817 21.0943 27.0198 21.0021 27.136 20.8859C27.2523 20.7696 27.3444 20.6316 27.4072 20.4797C27.4701 20.3278 27.5023 20.1649 27.5021 20.0005C27.5019 19.8362 27.4692 19.6734 27.4061 19.5217C27.3429 19.3699 27.2504 19.2321 27.1338 19.1161Z"
                                        fill="white"
                                        style={{
                                            margin: "0px",
                                            padding: "0px",
                                            outline: "none",
                                            boxShadow: "none",
                                            scrollbarWidth: "unset",
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor: "rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                        }}
                                    />
                                </svg>
                            </div>
                            <div
                                className="desktop-menu__block-body-wrapper non-scrollbar"
                                style={{
                                    margin: "0px",
                                    padding: "0px",
                                    outline: "none",
                                    boxShadow: "none",
                                    borderWidth: "0px",
                                    borderStyle: "solid",
                                    borderColor: "rgb(229, 231, 235)",
                                    boxSizing: "border-box",
                                    gap: "26px",
                                    overflow: "hidden",
                                    display: "flex",
                                    flexDirection: "column",
                                    transitionProperty: "all",
                                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                    transitionDuration: "0.15s",
                                    scrollbarWidth: "none",
                                }}
                            >
                                <p
                                    className="desktop-menu__block-link"
                                    style={{
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        cursor: "pointer",
                                        fontSize: "1.25rem",
                                        fontWeight: 400,
                                        lineHeight: "26px",
                                        color: "rgb(255 255 255 / 1)",
                                    }}
                                >
                                    Explore
                                </p>
                                <a
                                    className="desktop-menu__block-link"
                                    href="https://wellfound.com/company/orangecrypto"
                                    rel="noreferrer"
                                    target="_blank"
                                    style={{
                                        margin: "0px",
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        textDecoration: "inherit",
                                        cursor: "pointer",
                                        fontSize: "1.25rem",
                                        fontWeight: 400,
                                        lineHeight: "26px",
                                        color: "rgb(255 255 255 / 1)",
                                    }}
                                >
                                    Careers
                                </a>
                                <a
                                    className="desktop-menu__block-link"
                                    href="https://drive.google.com/drive/folders/1eR4xFya_MQ5iT3UCPgq6Wnw_-CGz8ojf?usp=sharing"
                                    rel="noreferrer"
                                    target="_blank"
                                    style={{
                                        margin: "0px",
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        textDecoration: "inherit",
                                        cursor: "pointer",
                                        fontSize: "1.25rem",
                                        fontWeight: 400,
                                        lineHeight: "26px",
                                        color: "rgb(255 255 255 / 1)",
                                    }}
                                >
                                    Press Kit
                                </a>
                                <a
                                    className="desktop-menu__block-link"
                                    href="https://docs.orangecrypto.com/legal"
                                    rel="noreferrer"
                                    target="_blank"
                                    style={{
                                        margin: "0px",
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        textDecoration: "inherit",
                                        cursor: "pointer",
                                        fontSize: "1.25rem",
                                        fontWeight: 400,
                                        lineHeight: "26px",
                                        color: "rgb(255 255 255 / 1)",
                                    }}
                                >
                                    Legal
                                </a>
                            </div>
                        </div>
                        <div
                            className="desktop-menu__block"
                            style={{
                                margin: "0px",
                                padding: "0px",
                                outline: "none",
                                boxShadow: "none",
                                scrollbarWidth: "unset",
                                borderWidth: "0px",
                                borderStyle: "solid",
                                boxSizing: "border-box",
                                borderColor: "rgb(255 255 255 / .3)",
                                display: "flex",
                                flexDirection: "column",
                                gap: "26px",
                            }}
                        >
                            <div
                                className="desktop-menu__block-title-wrapper"
                                style={{
                                    margin: "0px",
                                    padding: "0px",
                                    outline: "none",
                                    boxShadow: "none",
                                    scrollbarWidth: "unset",
                                    borderWidth: "0px",
                                    borderStyle: "solid",
                                    borderColor: "rgb(229, 231, 235)",
                                    boxSizing: "border-box",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <p
                                    className="desktop-menu__block-title"
                                    style={{
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        fontSize: "1.5rem",
                                        fontWeight: 700,
                                        lineHeight: "31px",
                                        color: "rgb(255 255 255 / 1)",
                                    }}
                                >
                                    Products
                                </p>
                                <svg
                                    className="w-6 md:hidden transition-transform rotate-180"
                                    height="30"
                                    width="30"
                                    fill="none"
                                    viewBox="0 0 30 30"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                        margin: "0px",
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        verticalAlign: "middle",
                                        width: "1.5rem",
                                        transform:
                                            "translate(0,0) rotate(180deg) skew(0) skewY(0) scaleX(1) scaleY(1)",
                                        transitionProperty: "transform",
                                        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                        transitionDuration: "0.15s",
                                        display: "none",
                                    }}
                                >
                                    <path
                                        d="M27.1338 19.1161L15.8838 7.86614C15.7678 7.75004 15.63 7.65795 15.4784 7.59511C15.3267 7.53228 15.1642 7.49993 15.0001 7.49993C14.8359 7.49993 14.6734 7.53228 14.5217 7.59511C14.3701 7.65795 14.2323 7.75004 14.1163 7.86614L2.86629 19.1161C2.74977 19.2321 2.65726 19.3699 2.59407 19.5217C2.53088 19.6734 2.49825 19.8362 2.49805 20.0005C2.49784 20.1649 2.53007 20.3278 2.59289 20.4797C2.6557 20.6316 2.74787 20.7696 2.86411 20.8859C2.98035 21.0021 3.11838 21.0943 3.27029 21.1571C3.42221 21.2199 3.58502 21.2521 3.74941 21.252C3.9138 21.2518 4.07654 21.2191 4.2283 21.1559C4.38006 21.0928 4.51787 21.0003 4.63383 20.8837L15.0001 10.5175L25.3663 20.8837C25.4823 21.0003 25.6201 21.0928 25.7718 21.1559C25.9236 21.2191 26.0863 21.2518 26.2507 21.252C26.4151 21.2521 26.5779 21.2199 26.7298 21.1571C26.8817 21.0943 27.0198 21.0021 27.136 20.8859C27.2523 20.7696 27.3444 20.6316 27.4072 20.4797C27.4701 20.3278 27.5023 20.1649 27.5021 20.0005C27.5019 19.8362 27.4692 19.6734 27.4061 19.5217C27.3429 19.3699 27.2504 19.2321 27.1338 19.1161Z"
                                        fill="white"
                                        style={{
                                            margin: "0px",
                                            padding: "0px",
                                            outline: "none",
                                            boxShadow: "none",
                                            scrollbarWidth: "unset",
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor: "rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                        }}
                                    />
                                </svg>
                            </div>
                            <div
                                className="desktop-menu__block-body-wrapper non-scrollbar"
                                style={{
                                    margin: "0px",
                                    padding: "0px",
                                    outline: "none",
                                    boxShadow: "none",
                                    borderWidth: "0px",
                                    borderStyle: "solid",
                                    borderColor: "rgb(229, 231, 235)",
                                    boxSizing: "border-box",
                                    gap: "26px",
                                    overflow: "hidden",
                                    display: "flex",
                                    flexDirection: "column",
                                    transitionProperty: "all",
                                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                    transitionDuration: "0.15s",
                                    scrollbarWidth: "none",
                                }}
                            >
                                <p
                                    className="desktop-menu__block-link"
                                    style={{
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        cursor: "pointer",
                                        fontSize: "1.25rem",
                                        fontWeight: 400,
                                        lineHeight: "26px",
                                        color: "rgb(255 255 255 / 1)",
                                    }}
                                >
                                    Orange Wallet
                                </p>
                                <p
                                    className="desktop-menu__block-link"
                                    style={{
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        cursor: "pointer",
                                        fontSize: "1.25rem",
                                        fontWeight: 400,
                                        lineHeight: "26px",
                                        color: "rgb(255 255 255 / 1)",
                                    }}
                                >
                                    Orange Swap
                                </p>
                                <p
                                    className="desktop-menu__block-link"
                                    style={{
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        cursor: "pointer",
                                        fontSize: "1.25rem",
                                        fontWeight: 400,
                                        lineHeight: "26px",
                                        color: "rgb(255 255 255 / 1)",
                                    }}
                                >
                                    Orange Marketcap
                                </p>
                                <p
                                    className="desktop-menu__block-link"
                                    style={{
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        cursor: "pointer",
                                        fontSize: "1.25rem",
                                        fontWeight: 400,
                                        lineHeight: "26px",
                                        color: "rgb(255 255 255 / 1)",
                                    }}
                                >
                                    Orange Bridge
                                </p>
                                <p
                                    className="desktop-menu__block-link"
                                    style={{
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        cursor: "pointer",
                                        fontSize: "1.25rem",
                                        fontWeight: 400,
                                        lineHeight: "26px",
                                        color: "rgb(255 255 255 / 1)",
                                    }}
                                >
                                    Orange Assistant
                                </p>
                                <p
                                    className="desktop-menu__block-link"
                                    style={{
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        cursor: "pointer",
                                        fontSize: "1.25rem",
                                        fontWeight: 400,
                                        lineHeight: "26px",
                                        color: "rgb(255 255 255 / 1)",
                                    }}
                                >
                                    Orange Explorer
                                </p>
                                <p
                                    className="desktop-menu__block-link"
                                    style={{
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        cursor: "pointer",
                                        fontSize: "1.25rem",
                                        fontWeight: 400,
                                        lineHeight: "26px",
                                        color: "rgb(255 255 255 / 1)",
                                    }}
                                >
                                    Orange Starter
                                </p>
                            </div>
                        </div>
                        <div
                            className="desktop-menu__block"
                            style={{
                                margin: "0px",
                                padding: "0px",
                                outline: "none",
                                boxShadow: "none",
                                scrollbarWidth: "unset",
                                borderWidth: "0px",
                                borderStyle: "solid",
                                boxSizing: "border-box",
                                borderColor: "rgb(255 255 255 / .3)",
                                display: "flex",
                                flexDirection: "column",
                                gap: "26px",
                            }}
                        >
                            <div
                                className="desktop-menu__block-title-wrapper"
                                style={{
                                    margin: "0px",
                                    padding: "0px",
                                    outline: "none",
                                    boxShadow: "none",
                                    scrollbarWidth: "unset",
                                    borderWidth: "0px",
                                    borderStyle: "solid",
                                    borderColor: "rgb(229, 231, 235)",
                                    boxSizing: "border-box",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <p
                                    className="desktop-menu__block-title"
                                    style={{
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        fontSize: "1.5rem",
                                        fontWeight: 700,
                                        lineHeight: "31px",
                                        color: "rgb(255 255 255 / 1)",
                                    }}
                                >
                                    Team
                                </p>
                                <svg
                                    className="w-6 md:hidden transition-transform rotate-180"
                                    height="30"
                                    width="30"
                                    fill="none"
                                    viewBox="0 0 30 30"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                        margin: "0px",
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        verticalAlign: "middle",
                                        width: "1.5rem",
                                        transform:
                                            "translate(0,0) rotate(180deg) skew(0) skewY(0) scaleX(1) scaleY(1)",
                                        transitionProperty: "transform",
                                        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                        transitionDuration: "0.15s",
                                        display: "none",
                                    }}
                                >
                                    <path
                                        d="M27.1338 19.1161L15.8838 7.86614C15.7678 7.75004 15.63 7.65795 15.4784 7.59511C15.3267 7.53228 15.1642 7.49993 15.0001 7.49993C14.8359 7.49993 14.6734 7.53228 14.5217 7.59511C14.3701 7.65795 14.2323 7.75004 14.1163 7.86614L2.86629 19.1161C2.74977 19.2321 2.65726 19.3699 2.59407 19.5217C2.53088 19.6734 2.49825 19.8362 2.49805 20.0005C2.49784 20.1649 2.53007 20.3278 2.59289 20.4797C2.6557 20.6316 2.74787 20.7696 2.86411 20.8859C2.98035 21.0021 3.11838 21.0943 3.27029 21.1571C3.42221 21.2199 3.58502 21.2521 3.74941 21.252C3.9138 21.2518 4.07654 21.2191 4.2283 21.1559C4.38006 21.0928 4.51787 21.0003 4.63383 20.8837L15.0001 10.5175L25.3663 20.8837C25.4823 21.0003 25.6201 21.0928 25.7718 21.1559C25.9236 21.2191 26.0863 21.2518 26.2507 21.252C26.4151 21.2521 26.5779 21.2199 26.7298 21.1571C26.8817 21.0943 27.0198 21.0021 27.136 20.8859C27.2523 20.7696 27.3444 20.6316 27.4072 20.4797C27.4701 20.3278 27.5023 20.1649 27.5021 20.0005C27.5019 19.8362 27.4692 19.6734 27.4061 19.5217C27.3429 19.3699 27.2504 19.2321 27.1338 19.1161Z"
                                        fill="white"
                                        style={{
                                            margin: "0px",
                                            padding: "0px",
                                            outline: "none",
                                            boxShadow: "none",
                                            scrollbarWidth: "unset",
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor: "rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                        }}
                                    />
                                </svg>
                            </div>
                            <div
                                className="desktop-menu__block-body-wrapper non-scrollbar"
                                style={{
                                    margin: "0px",
                                    padding: "0px",
                                    outline: "none",
                                    boxShadow: "none",
                                    borderWidth: "0px",
                                    borderStyle: "solid",
                                    borderColor: "rgb(229, 231, 235)",
                                    boxSizing: "border-box",
                                    gap: "26px",
                                    overflow: "hidden",
                                    display: "flex",
                                    flexDirection: "column",
                                    transitionProperty: "all",
                                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                    transitionDuration: "0.15s",
                                    scrollbarWidth: "none",
                                }}
                            >
                                <p
                                    className="desktop-menu__block-link desktop-menu__block-link_inactive"
                                    style={{
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        fontSize: "1.25rem",
                                        fontWeight: 400,
                                        lineHeight: "26px",
                                        color: "rgb(255 255 255 / 1)",
                                        cursor: "auto",
                                        opacity: 0.45,
                                    }}
                                >
                                    Verify
                                </p>
                            </div>
                        </div>
                        <div
                            className="desktop-menu__block"
                            style={{
                                margin: "0px",
                                padding: "0px",
                                outline: "none",
                                boxShadow: "none",
                                scrollbarWidth: "unset",
                                borderWidth: "0px",
                                borderStyle: "solid",
                                boxSizing: "border-box",
                                borderColor: "rgb(255 255 255 / .3)",
                                display: "flex",
                                flexDirection: "column",
                                gap: "26px",
                            }}
                        >
                            <div
                                className="desktop-menu__block-title-wrapper"
                                style={{
                                    margin: "0px",
                                    padding: "0px",
                                    outline: "none",
                                    boxShadow: "none",
                                    scrollbarWidth: "unset",
                                    borderWidth: "0px",
                                    borderStyle: "solid",
                                    borderColor: "rgb(229, 231, 235)",
                                    boxSizing: "border-box",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <p
                                    className="desktop-menu__block-title"
                                    style={{
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        fontSize: "1.5rem",
                                        fontWeight: 700,
                                        lineHeight: "31px",
                                        color: "rgb(255 255 255 / 1)",
                                    }}
                                >
                                    Community
                                </p>
                                <svg
                                    className="w-6 md:hidden transition-transform rotate-180"
                                    height="30"
                                    width="30"
                                    fill="none"
                                    viewBox="0 0 30 30"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                        margin: "0px",
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        verticalAlign: "middle",
                                        width: "1.5rem",
                                        transform:
                                            "translate(0,0) rotate(180deg) skew(0) skewY(0) scaleX(1) scaleY(1)",
                                        transitionProperty: "transform",
                                        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                        transitionDuration: "0.15s",
                                        display: "none",
                                    }}
                                >
                                    <path
                                        d="M27.1338 19.1161L15.8838 7.86614C15.7678 7.75004 15.63 7.65795 15.4784 7.59511C15.3267 7.53228 15.1642 7.49993 15.0001 7.49993C14.8359 7.49993 14.6734 7.53228 14.5217 7.59511C14.3701 7.65795 14.2323 7.75004 14.1163 7.86614L2.86629 19.1161C2.74977 19.2321 2.65726 19.3699 2.59407 19.5217C2.53088 19.6734 2.49825 19.8362 2.49805 20.0005C2.49784 20.1649 2.53007 20.3278 2.59289 20.4797C2.6557 20.6316 2.74787 20.7696 2.86411 20.8859C2.98035 21.0021 3.11838 21.0943 3.27029 21.1571C3.42221 21.2199 3.58502 21.2521 3.74941 21.252C3.9138 21.2518 4.07654 21.2191 4.2283 21.1559C4.38006 21.0928 4.51787 21.0003 4.63383 20.8837L15.0001 10.5175L25.3663 20.8837C25.4823 21.0003 25.6201 21.0928 25.7718 21.1559C25.9236 21.2191 26.0863 21.2518 26.2507 21.252C26.4151 21.2521 26.5779 21.2199 26.7298 21.1571C26.8817 21.0943 27.0198 21.0021 27.136 20.8859C27.2523 20.7696 27.3444 20.6316 27.4072 20.4797C27.4701 20.3278 27.5023 20.1649 27.5021 20.0005C27.5019 19.8362 27.4692 19.6734 27.4061 19.5217C27.3429 19.3699 27.2504 19.2321 27.1338 19.1161Z"
                                        fill="white"
                                        style={{
                                            margin: "0px",
                                            padding: "0px",
                                            outline: "none",
                                            boxShadow: "none",
                                            scrollbarWidth: "unset",
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor: "rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                        }}
                                    />
                                </svg>
                            </div>
                            <div
                                className="desktop-menu__block-body-wrapper non-scrollbar"
                                style={{
                                    margin: "0px",
                                    padding: "0px",
                                    outline: "none",
                                    boxShadow: "none",
                                    borderWidth: "0px",
                                    borderStyle: "solid",
                                    borderColor: "rgb(229, 231, 235)",
                                    boxSizing: "border-box",
                                    gap: "26px",
                                    overflow: "hidden",
                                    display: "flex",
                                    flexDirection: "column",
                                    transitionProperty: "all",
                                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                    transitionDuration: "0.15s",
                                    scrollbarWidth: "none",
                                }}
                            >
                                <a
                                    className="desktop-menu__block-link desktop-menu__block-link_inactive"
                                    href="https://www.orangecrypto.com/#"
                                    rel="noreferrer"
                                    target="_blank"
                                    style={{
                                        margin: "0px",
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        textDecoration: "inherit",
                                        fontSize: "1.25rem",
                                        fontWeight: 400,
                                        lineHeight: "26px",
                                        color: "rgb(255 255 255 / 1)",
                                        cursor: "auto",
                                        opacity: 0.45,
                                    }}
                                >
                                    Developers
                                </a>
                                <p
                                    className="desktop-menu__block-link"
                                    style={{
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        cursor: "pointer",
                                        fontSize: "1.25rem",
                                        fontWeight: 400,
                                        lineHeight: "26px",
                                        color: "rgb(255 255 255 / 1)",
                                    }}
                                >
                                    Partners
                                </p>
                                <a
                                    className="desktop-menu__block-link desktop-menu__block-link_inactive"
                                    href="https://www.orangecrypto.com/#"
                                    rel="noreferrer"
                                    target="_blank"
                                    style={{
                                        margin: "0px",
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        textDecoration: "inherit",
                                        fontSize: "1.25rem",
                                        fontWeight: 400,
                                        lineHeight: "26px",
                                        color: "rgb(255 255 255 / 1)",
                                        cursor: "auto",
                                        opacity: 0.45,
                                    }}
                                >
                                    Governance
                                </a>
                                <a
                                    className="desktop-menu__block-link desktop-menu__block-link_inactive"
                                    href="https://www.orangecrypto.com/#"
                                    rel="noreferrer"
                                    target="_blank"
                                    style={{
                                        margin: "0px",
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        textDecoration: "inherit",
                                        fontSize: "1.25rem",
                                        fontWeight: 400,
                                        lineHeight: "26px",
                                        color: "rgb(255 255 255 / 1)",
                                        cursor: "auto",
                                        opacity: 0.45,
                                    }}
                                >
                                    Rewards
                                </a>
                            </div>
                        </div>
                        <div
                            className="desktop-menu__block"
                            style={{
                                margin: "0px",
                                padding: "0px",
                                outline: "none",
                                boxShadow: "none",
                                scrollbarWidth: "unset",
                                borderWidth: "0px",
                                borderStyle: "solid",
                                boxSizing: "border-box",
                                borderColor: "rgb(255 255 255 / .3)",
                                display: "flex",
                                flexDirection: "column",
                                gap: "26px",
                            }}
                        >
                            <div
                                className="desktop-menu__block-title-wrapper"
                                style={{
                                    margin: "0px",
                                    padding: "0px",
                                    outline: "none",
                                    boxShadow: "none",
                                    scrollbarWidth: "unset",
                                    borderWidth: "0px",
                                    borderStyle: "solid",
                                    borderColor: "rgb(229, 231, 235)",
                                    boxSizing: "border-box",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <p
                                    className="desktop-menu__block-title"
                                    style={{
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        fontSize: "1.5rem",
                                        fontWeight: 700,
                                        lineHeight: "31px",
                                        color: "rgb(255 255 255 / 1)",
                                    }}
                                >
                                    FAQ
                                </p>
                            </div>
                        </div>
                        <div
                            className="desktop-menu__block"
                            style={{
                                margin: "0px",
                                padding: "0px",
                                outline: "none",
                                boxShadow: "none",
                                scrollbarWidth: "unset",
                                borderWidth: "0px",
                                borderStyle: "solid",
                                boxSizing: "border-box",
                                borderColor: "rgb(255 255 255 / .3)",
                                display: "flex",
                                flexDirection: "column",
                                gap: "26px",
                            }}
                        >
                            <div
                                className="desktop-menu__block-title-wrapper"
                                style={{
                                    margin: "0px",
                                    padding: "0px",
                                    outline: "none",
                                    boxShadow: "none",
                                    scrollbarWidth: "unset",
                                    borderWidth: "0px",
                                    borderStyle: "solid",
                                    borderColor: "rgb(229, 231, 235)",
                                    boxSizing: "border-box",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <p
                                    className="desktop-menu__block-title"
                                    style={{
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        fontSize: "1.5rem",
                                        fontWeight: 700,
                                        lineHeight: "31px",
                                        color: "rgb(255 255 255 / 1)",
                                    }}
                                >
                                    Support
                                </p>
                                <svg
                                    className="w-6 md:hidden transition-transform rotate-180"
                                    height="30"
                                    width="30"
                                    fill="none"
                                    viewBox="0 0 30 30"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                        margin: "0px",
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        verticalAlign: "middle",
                                        width: "1.5rem",
                                        transform:
                                            "translate(0,0) rotate(180deg) skew(0) skewY(0) scaleX(1) scaleY(1)",
                                        transitionProperty: "transform",
                                        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                        transitionDuration: "0.15s",
                                        display: "none",
                                    }}
                                >
                                    <path
                                        d="M27.1338 19.1161L15.8838 7.86614C15.7678 7.75004 15.63 7.65795 15.4784 7.59511C15.3267 7.53228 15.1642 7.49993 15.0001 7.49993C14.8359 7.49993 14.6734 7.53228 14.5217 7.59511C14.3701 7.65795 14.2323 7.75004 14.1163 7.86614L2.86629 19.1161C2.74977 19.2321 2.65726 19.3699 2.59407 19.5217C2.53088 19.6734 2.49825 19.8362 2.49805 20.0005C2.49784 20.1649 2.53007 20.3278 2.59289 20.4797C2.6557 20.6316 2.74787 20.7696 2.86411 20.8859C2.98035 21.0021 3.11838 21.0943 3.27029 21.1571C3.42221 21.2199 3.58502 21.2521 3.74941 21.252C3.9138 21.2518 4.07654 21.2191 4.2283 21.1559C4.38006 21.0928 4.51787 21.0003 4.63383 20.8837L15.0001 10.5175L25.3663 20.8837C25.4823 21.0003 25.6201 21.0928 25.7718 21.1559C25.9236 21.2191 26.0863 21.2518 26.2507 21.252C26.4151 21.2521 26.5779 21.2199 26.7298 21.1571C26.8817 21.0943 27.0198 21.0021 27.136 20.8859C27.2523 20.7696 27.3444 20.6316 27.4072 20.4797C27.4701 20.3278 27.5023 20.1649 27.5021 20.0005C27.5019 19.8362 27.4692 19.6734 27.4061 19.5217C27.3429 19.3699 27.2504 19.2321 27.1338 19.1161Z"
                                        fill="white"
                                        style={{
                                            margin: "0px",
                                            padding: "0px",
                                            outline: "none",
                                            boxShadow: "none",
                                            scrollbarWidth: "unset",
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor: "rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                        }}
                                    />
                                </svg>
                            </div>
                            <div
                                className="desktop-menu__block-body-wrapper non-scrollbar"
                                style={{
                                    margin: "0px",
                                    padding: "0px",
                                    outline: "none",
                                    boxShadow: "none",
                                    borderWidth: "0px",
                                    borderStyle: "solid",
                                    borderColor: "rgb(229, 231, 235)",
                                    boxSizing: "border-box",
                                    gap: "26px",
                                    overflow: "hidden",
                                    display: "flex",
                                    flexDirection: "column",
                                    transitionProperty: "all",
                                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                    transitionDuration: "0.15s",
                                    scrollbarWidth: "none",
                                }}
                            >
                                <a
                                    className="desktop-menu__block-link"
                                    href="https://docs.orangecrypto.com/"
                                    rel="noreferrer"
                                    target="_blank"
                                    style={{
                                        margin: "0px",
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        textDecoration: "inherit",
                                        cursor: "pointer",
                                        fontSize: "1.25rem",
                                        fontWeight: 400,
                                        lineHeight: "26px",
                                        color: "rgb(255 255 255 / 1)",
                                    }}
                                >
                                    Documents
                                </a>
                                <a
                                    className="desktop-menu__block-link desktop-menu__block-link_inactive"
                                    href="https://www.orangecrypto.com/#"
                                    rel="noreferrer"
                                    target="_blank"
                                    style={{
                                        margin: "0px",
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        textDecoration: "inherit",
                                        fontSize: "1.25rem",
                                        fontWeight: 400,
                                        lineHeight: "26px",
                                        color: "rgb(255 255 255 / 1)",
                                        cursor: "auto",
                                        opacity: 0.45,
                                    }}
                                >
                                    APIs
                                </a>
                                <a
                                    className="desktop-menu__block-link desktop-menu__block-link_inactive"
                                    href="https://www.orangecrypto.com/#"
                                    rel="noreferrer"
                                    target="_blank"
                                    style={{
                                        margin: "0px",
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        textDecoration: "inherit",
                                        fontSize: "1.25rem",
                                        fontWeight: 400,
                                        lineHeight: "26px",
                                        color: "rgb(255 255 255 / 1)",
                                        cursor: "auto",
                                        opacity: 0.45,
                                    }}
                                >
                                    Listings
                                </a>
                                <a
                                    className="desktop-menu__block-link"
                                    href="mailto:help@orangecrypto.com"
                                    rel="noreferrer"
                                    target="_blank"
                                    style={{
                                        margin: "0px",
                                        padding: "0px",
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        textDecoration: "inherit",
                                        cursor: "pointer",
                                        fontSize: "1.25rem",
                                        fontWeight: 400,
                                        lineHeight: "26px",
                                        color: "rgb(255 255 255 / 1)",
                                    }}
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
html {
  outline: none;
  box-shadow: none;
  scrollbar-width: unset;
  border-width: 0px;
  border-style: solid;
  border-color: rgb(229, 231, 235);
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  height: 100%;
  background-color: rgb(17, 20, 29);
  line-height: 1.5;
  tab-size: 4;
  font-feature-settings: normal;
  font-variation-settings: normal;
  -webkit-tap-highlight-color: transparent;
  font-synthesis: none;
  font-family: Mont, Inter, Avenir, Helvetica, Arial, sans-serif;
  color: rgb(255, 255, 255);
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
}

body {
  outline: none;
  box-shadow: none;
  scrollbar-width: unset;
  border-width: 0px;
  border-style: solid;
  border-color: rgb(229, 231, 235);
  box-sizing: border-box;
  padding: 0px;
  height: 100%;
  background-color: rgb(17, 20, 29);
  margin: 0px;
  line-height: inherit;
  overflow: hidden;
}
`,
                }}
            />
        </>
    );
}
