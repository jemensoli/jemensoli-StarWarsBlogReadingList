import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Starship = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container mt-5">
            <h1 className="mb-5">Starships</h1>
            <div className="row d-flex flex-row flex-nowrap position-relative overflow-auto m-3">
                {store.starships.map((starship) =>
                    <div className="card col-sm-4 m-2 bg-secondary p-0" style={{ width: "18rem" }}>
                        <img src="https://www.denofgeek.com/wp-content/uploads/2019/12/x-wing.jpg?w=1024" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title mb-4">{starship.name}</h5>
                            <Link to={"/starship/" + starship.uid}>
                                <button type="button" className="btn btn-dark ms-0 border border-warning">Learn More</button>
                            </Link>
                            <button type="button" className="ms-5 btn btn-outline-warning"
                                onClick={() => actions.setFavorites({ type: 'Starship', name: starship.name })}>
                                <i className="far fa-heart"></i>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}