import React from "react";

import ChildB from "./ChildB";

function ChildA({firstname, lastname}) {
    return (
        <>
            This is ChildA Component.
            <br />
            <ChildB/>
        </>
    );
}

export default ChildA
