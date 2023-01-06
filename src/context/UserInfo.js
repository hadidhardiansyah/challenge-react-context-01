import React from "react";

export const UserInfoContext = React.createContext(null);

export const UserInfoProvider =({children}) =>{
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");

    const onChangeFirstName = (e) => setFirstName(e.target.value);
    const onChangeLastName = (e) => setLastName(e.target.value);

    return (
        <UserInfoContext.Provider value={{firstName, lastName, onChangeFirstName, onChangeLastName}}>
            {children}
        </UserInfoContext.Provider>
    )
}