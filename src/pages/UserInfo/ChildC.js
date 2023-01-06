import React from "react";
import {UserInfoContext, UserInfoProvider} from "../../context/UserInfo";

function ChildC() {
    const value = React.useContext(UserInfoContext)
    return (
        <UserInfoProvider>
            This is ChildC component.
            <br />
            <h3> Data from Parent component is as follows:</h3>
            <h4>{value.firstName}</h4>
            <h4>{value.lastName}</h4>
        </UserInfoProvider>
    );
}

export default ChildC;
