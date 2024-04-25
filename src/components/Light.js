import React from "react";

export default function Light() {
    return (
        <>
            <div
                id="top-block-id"
                className="w-full min-h-screen overflow-hidden"
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
                    minHeight: "100vh",
                    width: "100%",
                    overflow: "hidden",
                }}
            >
                <div
                    id="home-block-id"
                    className="hero z-10"
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
                        marginTop: "90px",
                        zIndex: 10,
                    }}
                >
                    <div
                        className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none"
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
                            pointerEvents: "none",
                            position: "absolute",
                            left: "0px",
                            top: "0px",
                            display: "flex",
                            height: "100%",
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <svg
                            className="lightning"
                            height="1129"
                            width="1237"
                            fill="none"
                            viewBox="0 0 1237 1129"
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
                                display: "block",
                                verticalAlign: "middle",
                                pointerEvents: "none",
                                height: "983px",
                                width: "983px",
                            }}
                        >
                            <path
                                d="M618.5 1002C889.948 1002 1110 781.948 1110 510.5C1110 239.052 889.948 19 618.5 19C347.052 19 127 239.052 127 510.5C127 781.948 347.052 1002 618.5 1002Z"
                                fill="url(#paint0_radial_1178_5075)" fill-opacity="1"></path>
                        </svg>
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
