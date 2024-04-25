import React, {useState} from "react";
import './Header.css';

export default function Header(props) {

    const [showMenu, setShowMenu] = useState(false);

    const changeMenu = function () {
        setShowMenu(!showMenu);
        props.menuChange();
    }

    return (
        <>
            <header
                className="header"
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
                    position: "relative",
                    paddingTop: "37px",
                    zIndex: 100,
                }}
            >
                <div
                    className="page-container flex items-center justify-between max-sm:h-full"
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
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <div
                        className="flex md:flex-[0_0_20%] max-sm:justify-center"
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
                            flex: "0 0 20%",
                        }}
                    >
                        <i
                            className="logo"
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
                                background:
                                    'url("https://www.orangecrypto.com/assets/logo-BtdkH2hE.webp") center center / contain no-repeat',
                                display: "flex",
                                flex: "0 0 116px",
                                height: "80px",
                                width: "116px",
                                backgroundSize: "cover",
                                filter: "drop-shadow(rgba(0, 0, 0, 0.25) 0px 10px 40px)",
                            }}
                        />
                    </div>
                    <div
                        className="max-sm:hidden flex flex-[1_0_60%] justify-center"
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
                            flex: "1 0 60%",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            className="flex items-center gap-[27px] md:gap-[24px]"
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
                                gap: "24px",
                            }}
                        >
                            <a
                                className="social-btn"
                                href="https://x.com/OrangeCryptoHQ"
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
                                    display: "flex",
                                    height: "30px",
                                    width: "30px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <i
                                    className="w-[30px] h-[30x]"
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
                                        width: "30px",
                                    }}
                                >
                                    <svg
                                        height="30"
                                        width="30"
                                        viewBox="-6 -4 30 30"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={showMenu ? "social_icon_menu" : "social_icon"}
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
                                        }}
                                    >
                                        <path
                                            d="M13.25 9.11735L20.621 0.733398H18.8743L12.4741 8.01306L7.36222 0.733398H1.46631L9.19643 11.7415L1.46631 20.5334H3.2131L9.97191 12.8458L15.3704 20.5334H21.2663L13.2496 9.11735H13.25ZM10.8575 11.8385L10.0743 10.7424L3.84249 2.02007H6.52546L11.5546 9.05924L12.3378 10.1554L18.8751 19.3052H16.1922L10.8575 11.8389V11.8385Z"
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
                                        <path
                                            d="M16.4998 19.8004L3.8498 2.20039L3.2998 1.65039H7.1498L19.2498 19.8004H16.4998Z"
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
                                        <path
                                            d="M16.5008 19.8004L3.85078 2.20039L3.30078 1.65039H7.15078L19.2508 19.8004H16.5008Z"
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
                                </i>
                            </a>
                            <a
                                className="social-btn"
                                href="https://discord.gg/orangecryptoHQ"
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
                                    color: "inherit",
                                    display: "flex",
                                    height: "30px",
                                    width: "30px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <i
                                    className="w-[30px] h-[30x]"
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
                                        width: "30px",
                                    }}
                                >
                                    <svg
                                        height="30"
                                        width="30"
                                        preserveAspectRatio="xMidYMid"
                                        viewBox="0 -50 300 300"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
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
                                            fill: "rgb(255, 255, 255)",
                                        }}
                                    >
                                        <path
                                            d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                                            className={showMenu ? "social_icon_menu" : "social_icon"}
                                            fillRule="nonzero"
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
                                </i>
                            </a>
                            <a
                                className="social-btn"
                                href="https://t.me/orangecryptoHQ"
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
                                    color: "inherit",
                                    display: "flex",
                                    height: "30px",
                                    width: "30px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <i
                                    className="w-[30px] h-[30x]"
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
                                        width: "30px",
                                    }}
                                >
                                    <svg
                                        height="30"
                                        width="30"
                                        className={showMenu ? "social_icon_menu" : "social_icon"}
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
                                            display: "block",
                                            verticalAlign: "middle",
                                        }}
                                    >
                                        <path
                                            d="M12.4174 18.1817L12.0204 23.7659C12.5884 23.7659 12.8344 23.5219 13.1294 23.2288L15.7925 20.6838L21.3106 24.7249C22.3226 25.2889 23.0357 24.9919 23.3087 23.7939L26.9308 6.82145L26.9318 6.82045C27.2528 5.32441 26.3907 4.7394 25.4047 5.10641L4.1142 13.2576C2.66117 13.8216 2.68317 14.6316 3.8672 14.9986L9.31033 16.6917L21.9536 8.7805C22.5486 8.38649 23.0897 8.60449 22.6446 8.9985L12.4174 18.1817Z"
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
                                </i>
                            </a>
                            <a
                                className="social-btn"
                                href="https://github.com/orangecrypto"
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
                                    color: "inherit",
                                    display: "flex",
                                    height: "30px",
                                    width: "30px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <i
                                    className="w-[30px] h-[30x]"
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
                                        width: "30px",
                                    }}
                                >
                                    <svg
                                        height="30"
                                        width="30"
                                        viewBox="0 0 30 30"
                                        className={showMenu ? "social_icon_menu" : "social_icon"}
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
                                        }}
                                    >
                                        <path
                                            id="Icon"
                                            d="M11.1028 26C11.8801 26 12.0998 25.6959 12.0998 25.3072C12.0998 24.9186 12.0998 24.0737 12.0829 22.874C8.04446 23.7358 7.18271 20.9478 7.18271 20.9478C6.52372 19.3088 5.56059 18.8525 5.56059 18.8525C4.24262 17.9739 5.66197 17.9908 5.66197 17.9908C7.11512 18.0922 7.89239 19.4608 7.89239 19.4608C9.19346 21.6574 11.2887 21.0154 12.1167 20.6436C12.1842 19.9171 12.5053 19.2243 13.046 18.7174C9.81865 18.3625 6.42234 17.129 6.42234 11.6544C6.40544 10.235 6.94615 8.84946 7.92618 7.81874C7.75721 7.4639 7.26719 6.01075 8.04446 4.03379C8.04446 4.03379 9.26105 3.64516 12.0491 5.50384C14.4316 4.86175 16.9323 4.86175 19.3148 5.50384C22.069 3.66206 23.3025 4.03379 23.3025 4.03379C24.0798 5.99385 23.5898 7.447 23.4546 7.81874C24.4346 8.84946 24.9584 10.235 24.9415 11.6544C24.9415 17.1459 21.5452 18.3456 18.301 18.7005C18.8079 19.1229 19.281 20.0015 19.281 21.3364C19.281 23.2627 19.2641 24.7834 19.2641 25.2396C19.2641 25.6114 19.4331 25.9155 20.2611 25.9155L11.1028 26Z"
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
                                </i>
                            </a>
                            <a
                                className="social-btn"
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
                                    color: "inherit",
                                    display: "flex",
                                    height: "30px",
                                    width: "30px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <i
                                    className="w-[30px] h-[30x]"
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
                                        width: "30px",
                                    }}
                                >
                                    <svg
                                        height="30"
                                        width="30"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        className={showMenu ? "social_icon_menu" : "social_icon"}
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
                                        }}
                                    >
                                        <path
                                            d="M10.802 17.77a.703.703 0 1 1-.002 1.406.703.703 0 0 1 .002-1.406m11.024-4.347a.703.703 0 1 1 .001-1.406.703.703 0 0 1-.001 1.406m0-2.876a2.176 2.176 0 0 0-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 0 0-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 0 0 2.15 1.862 2.177 2.177 0 0 0 2.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0 0 24 12.72a2.176 2.176 0 0 0-2.174-2.174"
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
                                </i>
                            </a>
                            <a
                                className="social-btn"
                                href="https://www.youtube.com/@OrangeCryptoHQ"
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
                                    color: "inherit",
                                    display: "flex",
                                    height: "30px",
                                    width: "30px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <i
                                    className="w-[30px] h-[30x]"
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
                                        width: "30px",
                                    }}
                                >
                                    <svg
                                        height="30"
                                        width="30"
                                        viewBox="0 0 560 560"
                                        xmlSpace="preserve"
                                        className={showMenu ? "social_icon_menu" : "social_icon"}
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
                                        }}
                                    >
                                        <path
                                            d="M492.044,106.769c-18.482-21.97-52.604-30.931-117.77-30.931H137.721 c-66.657,0-101.358,9.54-119.77,32.93C0,131.572,0,165.174,0,211.681v88.64c0,90.097,21.299,135.842,137.721,135.842h236.554 c56.512,0,87.826-7.908,108.085-27.296C503.136,388.985,512,356.522,512,300.321v-88.64 C512,162.636,510.611,128.836,492.044,106.769z M328.706,268.238l-107.418,56.14c-2.401,1.255-5.028,1.878-7.65,1.878 c-2.97,0-5.933-0.799-8.557-2.388c-4.942-2.994-7.959-8.351-7.959-14.128V197.82c0-5.767,3.009-11.119,7.941-14.115 c4.933-2.996,11.069-3.201,16.187-0.542l107.418,55.778c5.465,2.837,8.897,8.479,8.905,14.635 C337.58,259.738,334.163,265.388,328.706,268.238z"
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
                                </i>
                            </a>
                        </div>
                    </div>
                    <div
                        className="flex flex-[0_0_20%] justify-end gap-[14px]"
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
                            flex: "0 0 20%",
                            justifyContent: "flex-end",
                            gap: "14px",
                        }}
                    >
                        <div
                            className="md:hidden"
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
                                display: "none",
                            }}
                        >
                            <div
                                className="mobile-menu-btn"
                                style={{
                                    margin: "0px",
                                    outline: "none",
                                    boxShadow: "none",
                                    scrollbarWidth: "unset",
                                    borderStyle: "solid",
                                    boxSizing: "border-box",
                                    borderRadius: "9999px",
                                    borderWidth: "3px",
                                    borderColor: "rgb(210 52 3 / 1)",
                                    padding: "0.5rem",
                                    display: "flex",
                                    height: "50px",
                                    width: "50px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "rgb(255 255 255 / 1)",
                                }}
                            >
                                <div
                                    className="relative w-4 h-4"
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
                                        position: "relative",
                                        height: "1rem",
                                        width: "1rem",
                                    }}
                                >
                                    <hr
                                        className="mobile-menu-btn__line mobile-menu-btn__line_1"
                                        style={{
                                            padding: "0px",
                                            outline: "none",
                                            boxShadow: "none",
                                            scrollbarWidth: "unset",
                                            borderStyle: "solid",
                                            borderColor: "rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                            color: "inherit",
                                            margin: "0px",
                                            borderRadius: "0.125rem",
                                            borderWidth: "0px",
                                            position: "absolute",
                                            height: "2px",
                                            borderTopWidth: "0px",
                                            backgroundColor: "rgb(49 49 49 / 1)",
                                            transitionProperty: "all",
                                            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                            transitionDuration: "0.15s",
                                            top: "0.125rem",
                                            left: "auto",
                                            right: "0.125rem",
                                            width: "0.75rem",
                                        }}
                                    />
                                    <hr
                                        className="mobile-menu-btn__line mobile-menu-btn__line_2"
                                        style={{
                                            padding: "0px",
                                            outline: "none",
                                            boxShadow: "none",
                                            scrollbarWidth: "unset",
                                            borderStyle: "solid",
                                            borderColor: "rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                            color: "inherit",
                                            margin: "0px",
                                            borderRadius: "0.125rem",
                                            borderWidth: "0px",
                                            position: "absolute",
                                            height: "2px",
                                            borderTopWidth: "0px",
                                            backgroundColor: "rgb(49 49 49 / 1)",
                                            transitionProperty: "all",
                                            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                            transitionDuration: "0.15s",
                                            top: "7px",
                                            left: "auto",
                                            right: "0.125rem",
                                            width: "100%",
                                        }}
                                    />
                                    <hr
                                        className="mobile-menu-btn__line mobile-menu-btn__line_3"
                                        style={{
                                            padding: "0px",
                                            outline: "none",
                                            boxShadow: "none",
                                            scrollbarWidth: "unset",
                                            borderStyle: "solid",
                                            borderColor: "rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                            color: "inherit",
                                            margin: "0px",
                                            borderRadius: "0.125rem",
                                            borderWidth: "0px",
                                            position: "absolute",
                                            height: "2px",
                                            borderTopWidth: "0px",
                                            backgroundColor: "rgb(49 49 49 / 1)",
                                            transitionProperty: "all",
                                            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                            transitionDuration: "0.15s",
                                            top: "0.75rem",
                                            left: "auto",
                                            right: "0.125rem",
                                            width: "58%",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="max-sm:hidden -translate-y-1"
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
                                transform:
                                    "translate(0,-.25rem) rotate(0) skew(0) skewY(0) scaleX(1) scaleY(1)",
                            }}
                        >
                            <div
                                className="desktop-menu-btn"
                                style={{
                                    margin: "0px",
                                    padding: "0px",
                                    outline: "none",
                                    boxShadow: "none",
                                    scrollbarWidth: "unset",
                                    borderStyle: "solid",
                                    borderColor: "rgb(229, 231, 235)",
                                    boxSizing: "border-box",
                                    borderRadius: "9999px",
                                    borderWidth: "0px",
                                    display: "flex",
                                    height: "46px",
                                    width: "80px",
                                    cursor: "pointer",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: !showMenu ? "rgb(210 52 3 / 1)" : 'white',
                                    transitionProperty:
                                        "color, background-color, border-color, text-decoration-color, fill, stroke",
                                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                    transitionDuration: "0.15s",
                                }}
                            >
                                {!showMenu && <button
                                    onClick={() => changeMenu()}
                                    className="relative w-[30px] h-[21px]"
                                    style={{
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        padding: "0px",
                                        fontFamily: "inherit",
                                        fontFeatureSettings: "inherit",
                                        fontVariationSettings: "inherit",
                                        fontSize: "100%",
                                        fontWeight: "inherit",
                                        lineHeight: "inherit",
                                        color: "inherit",
                                        textTransform: "none",
                                        appearance: "button",
                                        backgroundColor: "transparent",
                                        backgroundImage: "none",
                                        cursor: "pointer",
                                        position: "relative",
                                        height: "21px",
                                        width: "30px",
                                    }}
                                >
                                    <hr
                                        className="desktop-menu-btn__line desktop-menu-btn__line_1"
                                        style={{
                                            padding: "0px",
                                            outline: "none",
                                            boxShadow: "none",
                                            scrollbarWidth: "unset",
                                            borderStyle: "solid",
                                            borderColor: "rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                            color: "inherit",
                                            margin: "0px",
                                            borderRadius: "0.125rem",
                                            borderWidth: "0px",
                                            position: "absolute",
                                            height: "0.125rem",
                                            borderTopWidth: "0px",
                                            backgroundColor: "rgb(255 255 255 / 1)",
                                            transitionProperty: "all",
                                            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                            transitionDuration: "0.15s",
                                            top: "0px",
                                            left: "auto",
                                            right: "0.25rem",
                                            width: "22px",
                                        }}
                                    />
                                    <hr
                                        className="desktop-menu-btn__line desktop-menu-btn__line_2"
                                        style={{
                                            padding: "0px",
                                            outline: "none",
                                            boxShadow: "none",
                                            scrollbarWidth: "unset",
                                            borderStyle: "solid",
                                            borderColor: "rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                            color: "inherit",
                                            margin: "0px",
                                            borderRadius: "0.125rem",
                                            borderWidth: "0px",
                                            position: "absolute",
                                            height: "0.125rem",
                                            borderTopWidth: "0px",
                                            backgroundColor: "rgb(255 255 255 / 1)",
                                            transitionProperty: "all",
                                            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                            transitionDuration: "0.15s",
                                            top: "9px",
                                            left: "auto",
                                            right: "0.25rem",
                                            width: "30px",
                                        }}
                                    />
                                    <hr
                                        className="desktop-menu-btn__line desktop-menu-btn__line_3"
                                        style={{
                                            padding: "0px",
                                            outline: "none",
                                            boxShadow: "none",
                                            scrollbarWidth: "unset",
                                            borderStyle: "solid",
                                            borderColor: "rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                            color: "inherit",
                                            margin: "0px",
                                            borderRadius: "0.125rem",
                                            borderWidth: "0px",
                                            position: "absolute",
                                            height: "0.125rem",
                                            borderTopWidth: "0px",
                                            backgroundColor: "rgb(255 255 255 / 1)",
                                            transitionProperty: "all",
                                            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                            transitionDuration: "0.15s",
                                            top: "18px",
                                            left: "auto",
                                            right: "0.25rem",
                                            width: "1rem",
                                        }}
                                    />
                                </button>}
                                {showMenu && <button
                                    onClick={() => changeMenu()}
                                    className="relative w-[30px] h-[21px]"
                                    style={{
                                        outline: "none",
                                        boxShadow: "none",
                                        scrollbarWidth: "unset",
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        padding: "0px",
                                        fontFamily: "inherit",
                                        fontFeatureSettings: "inherit",
                                        fontVariationSettings: "inherit",
                                        fontSize: "100%",
                                        fontWeight: "inherit",
                                        lineHeight: "inherit",
                                        color: "inherit",
                                        textTransform: "none",
                                        appearance: "button",
                                        backgroundColor: "transparent",
                                        backgroundImage: "none",
                                        cursor: "pointer",
                                        position: "relative",
                                        height: "21px",
                                        width: "30px",
                                    }}
                                >
                                    <hr
                                        className="desktop-menu-btn__line desktop-menu-btn__line_1"
                                        style={{
                                            padding: "0px",
                                            outline: "none",
                                            boxShadow: "none",
                                            scrollbarWidth: "unset",
                                            borderStyle: "solid",
                                            borderColor: "rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                            color: "inherit",
                                            margin: "0px",
                                            borderRadius: "0.125rem",
                                            borderWidth: "0px",
                                            position: "absolute",
                                            borderTopWidth: "0px",
                                            transitionProperty: "all",
                                            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                            transitionDuration: "0.15s",
                                            right: "0.25rem",
                                            backgroundColor: "rgb(23 23 23 / 1)",
                                            left: "-1px",
                                            top: "9px",
                                            height: "3px",
                                            width: "2rem",
                                            transform:
                                                "translate(0,0) rotate(45deg) skew(0) skewY(0) scaleX(1) scaleY(1)",
                                        }}
                                    />
                                    <hr
                                        className="desktop-menu-btn__line desktop-menu-btn__line_2"
                                        style={{
                                            padding: "0px",
                                            outline: "none",
                                            boxShadow: "none",
                                            scrollbarWidth: "unset",
                                            borderStyle: "solid",
                                            borderColor: "rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                            color: "inherit",
                                            margin: "0px",
                                            borderRadius: "0.125rem",
                                            borderWidth: "0px",
                                            position: "absolute",
                                            borderTopWidth: "0px",
                                            transitionProperty: "all",
                                            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                            transitionDuration: "0.15s",
                                            backgroundColor: "rgb(23 23 23 / 1)",
                                            left: "auto",
                                            right: "-1px",
                                            top: "9px",
                                            height: "3px",
                                            width: "2rem",
                                            transform:
                                                "translate(0,0) rotate(-45deg) skew(0) skewY(0) scaleX(1) scaleY(1)",
                                        }}
                                    />
                                    <hr
                                        className="desktop-menu-btn__line desktop-menu-btn__line_3"
                                        style={{
                                            padding: "0px",
                                            outline: "none",
                                            boxShadow: "none",
                                            scrollbarWidth: "unset",
                                            borderStyle: "solid",
                                            borderColor: "rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                            color: "inherit",
                                            margin: "0px",
                                            borderRadius: "0.125rem",
                                            borderWidth: "0px",
                                            position: "absolute",
                                            height: "0.125rem",
                                            borderTopWidth: "0px",
                                            transitionProperty: "all",
                                            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                            transitionDuration: "0.15s",
                                            top: "18px",
                                            left: "auto",
                                            right: "0.25rem",
                                            width: "1rem",
                                            backgroundColor: "rgb(23 23 23 / 1)",
                                            display: "none",
                                        }}
                                    />
                                </button>}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
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
