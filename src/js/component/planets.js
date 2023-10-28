import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Planets = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container mt-5">
            <h1 className="mb-5">Planets</h1>
            <div className="row d-flex flex-row flex-nowrap position-relative overflow-auto m-3">
                {store.planets.map((planet) =>
                    <div className="card col-sm-4 m-2 bg-secondary p-0" style={{ width: "18rem" }}>
                        <img src="https://static.wikia.nocookie.net/starwars/images/7/72/Teth-TVE.png/revision/latest?cb=20190423045047" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title mb-4">{planet.name}</h5>
                            <Link to={"/planet/" + planet.uid}>
                                <button type="button" className="btn btn-dark ms-0 border border-warning">Learn More</button>
                            </Link>
                            <button type="button" className="ms-5 btn btn-outline-warning"
                                onClick={() => actions.setFavorites({ type: 'Planet', name: planet.name })}>
                                <i className="far fa-heart"></i>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}