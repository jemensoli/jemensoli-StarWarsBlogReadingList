import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CardCharacter } from "./cardCharacter";


export const Characters = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <h1 className="mb-5">Characters</h1>
            <div className="row d-flex flex-row flex-nowrap position-relative overflow-auto m-3">
                {store.users.map((user) =>
                    <CardCharacter key={user.id} name={user.name} id={user.uid} />
                )}
            </div>
        </div>
    )
}