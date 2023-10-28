import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const CharacterDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    actions.infoCharacters(params.idContact);

    return (
        <div className="container">
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                <div className="row py-5">
                    <div className="col-4">
                        <img src="https://images.bauerhosting.com/legacy/empire-images/features/560ebc7b50e6c513721c309f/Ben%20Kenobi.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80" className="img-fluid rounded-start" style={{ maxWidth: "100%" }} />
                    </div>
                    <div className="col-8 p-4">
                        <h1 className="fw-semibold">{store.selectCharacterProperties.name}</h1>
                        <p className="text-uppercase">{store.selectCharacter.description}</p>
                    </div>
                </div>
            </div>
            <div className="container text-center border-top border-dark">
                <div className="row mt-4">
                    <div className="col-2">
                        <p className="fw-bolder">Name</p>
                        <p className="list-unstyled mb-0 text-uppercase">{store.selectCharacterProperties.name}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Birth Year</p>
                        <p className="list-unstyled mb-0 text-uppercase">{store.selectCharacterProperties.birth_year}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Gender</p>
                        <p className="list-unstyled mb-0 text-uppercase">{store.selectCharacterProperties.gender}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Height</p>
                        <p className="list-unstyled mb-0 text-uppercase">{store.selectCharacterProperties.height}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Skin Color</p>
                        <p className="list-unstyled mb-0 text-uppercase">{store.selectCharacterProperties.skin_color}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Eye Color</p>
                        <p className="list-unstyled mb-0 text-uppercase">{store.selectCharacterProperties.eye_color}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};