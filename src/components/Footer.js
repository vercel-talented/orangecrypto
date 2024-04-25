import React from "react";

export default function Footer() {
    return (
        <>
            <div
                className="md:py-[60px] border-b border-gray-400 pb-[13px] md:pb-[110px]"
                style={{
                    margin: "0px",
                    padding: "0px",
                    outline: "none",
                    textAlign: 'left',
                    boxShadow: "none",
                    scrollbarWidth: "unset",
                    borderWidth: "0px",
                    borderStyle: "solid",
                    boxSizing: "border-box",
                    borderBottomWidth: "1px",
                    borderColor: "rgb(38 39 44 / 1)",
                    paddingTop: "60px",
                    paddingBottom: "110px",
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
                            className="desktop-menu__block border-b-0"
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
                                borderBottomWidth: "0px",
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
                                        color: "rgb(210 52 3 / 1)",
                                    }}
                                >
                                    About
                                </p>
                            </div>
                            <div
                                className="desktop-menu__block-body-wrapper non-scrollbar desktop-menu__block-body-wrapper_open max-sm:pl-6"
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
                                    display: "flex",
                                    flexDirection: "column",
                                    transitionProperty: "all",
                                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                    transitionDuration: "0.15s",
                                    maxHeight: "300px",
                                    paddingBottom: "14px",
                                    overflow: "hidden",
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
                            className="desktop-menu__block border-b-0"
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
                                borderBottomWidth: "0px",
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
                                        color: "rgb(210 52 3 / 1)",
                                    }}
                                >
                                    Products
                                </p>
                            </div>
                            <div
                                className="desktop-menu__block-body-wrapper non-scrollbar desktop-menu__block-body-wrapper_open max-sm:pl-6"
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
                                    display: "flex",
                                    flexDirection: "column",
                                    transitionProperty: "all",
                                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                    transitionDuration: "0.15s",
                                    maxHeight: "300px",
                                    paddingBottom: "14px",
                                    overflow: "hidden",
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
                            className="desktop-menu__block border-b-0"
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
                                borderBottomWidth: "0px",
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
                                        color: "rgb(210 52 3 / 1)",
                                    }}
                                >
                                    Team
                                </p>
                            </div>
                            <div
                                className="desktop-menu__block-body-wrapper non-scrollbar desktop-menu__block-body-wrapper_open max-sm:pl-6"
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
                                    display: "flex",
                                    flexDirection: "column",
                                    transitionProperty: "all",
                                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                    transitionDuration: "0.15s",
                                    maxHeight: "300px",
                                    paddingBottom: "14px",
                                    overflow: "hidden",
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
                            className="desktop-menu__block border-b-0"
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
                                borderBottomWidth: "0px",
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
                                        color: "rgb(210 52 3 / 1)",
                                    }}
                                >
                                    Community
                                </p>
                            </div>
                            <div
                                className="desktop-menu__block-body-wrapper non-scrollbar desktop-menu__block-body-wrapper_open max-sm:pl-6"
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
                                    display: "flex",
                                    flexDirection: "column",
                                    transitionProperty: "all",
                                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                    transitionDuration: "0.15s",
                                    maxHeight: "300px",
                                    paddingBottom: "14px",
                                    overflow: "hidden",
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
                            className="desktop-menu__block border-b-0"
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
                                borderBottomWidth: "0px",
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
                                        color: "rgb(210 52 3 / 1)",
                                    }}
                                >
                                    FAQ
                                </p>
                            </div>
                        </div>
                        <div
                            className="desktop-menu__block border-b-0"
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
                                borderBottomWidth: "0px",
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
                                        color: "rgb(210 52 3 / 1)",
                                    }}
                                >
                                    Support
                                </p>
                            </div>
                            <div
                                className="desktop-menu__block-body-wrapper non-scrollbar desktop-menu__block-body-wrapper_open max-sm:pl-6"
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
                                    display: "flex",
                                    flexDirection: "column",
                                    transitionProperty: "all",
                                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                    transitionDuration: "0.15s",
                                    maxHeight: "300px",
                                    paddingBottom: "14px",
                                    overflow: "hidden",
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
  overflow: auto;
}
`,
                }}
            />
        </>
    );
}
