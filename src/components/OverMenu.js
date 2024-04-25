import React from "react";
import OverMenuHeader from "./OverMenuHeader";
import OverMenuBody from "./OverMenuBody";
import OverMenuFooter from "./OverMenuFooter";

export default function OverMenu() {
    return (
        <>
            <div style={{height: '100%', position: 'relative'}}>
                <OverMenuBody/>
                <OverMenuFooter/>
            </div>
        </>
    );
}
