import React from "react";

import ChildC from "./ChildC";

function ChildB({firstname, lastname}) {
    return (
        <>
            This is ChildB Component.
            <br />
            <ChildC/>
        </>
    );
}

export default ChildB;
