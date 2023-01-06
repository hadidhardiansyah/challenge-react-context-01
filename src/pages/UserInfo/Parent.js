import React from "react";

import ChildA from "./ChildA";
import {UserInfoContext} from "../../context/UserInfo";

function Parent() {

    const value = React.useContext(UserInfoContext);
    return (
        <>
            <div>This is a Parent component</div>
            <br/>

            <form>
                <input placeholder="first name" onChange={value.onChangeFirstName}/>
                <input placeholder="last name" onChange={value.onChangeLastName}/>
            </form>

            <br/>
            <ChildA />
        </>
    );
}

export default Parent;
