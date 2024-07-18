import React from "react";
import { Link } from "react-router-dom";

export const StarWars = () => {
    return (
        // <div className="container text-center mt-5">
        //     <Link to="/Characters">
        // 		<button className="btn btn-outline-danger me-3" type="submit">Characters</button>
        // 	</Link>
        //     <Link to="/Planets">
        // 		<button className="btn btn-outline-danger" type="submit">Planets</button>
        // 	</Link>
        // </div>
        <div className="container">
            <div className="d-flex flex-column align-items-center">
                <div class="card col-8 mb-3">
                    <img src="https://media.timeout.com/images/105863223/750/422/image.jpg" class="card-img-top" height="300px" widht="400" ></img>
                    <div class="card-body">
                        <h2 class="card-title">Characters</h2>
                        <p class="card-text">Adéntrate en el mundo de Star Wars y conoce sus personajes</p>
                        <span>
                            <Link to="/Characters">
                            <button className="btn btn-success">Ver</button>
                            </Link>
                        </span>
                    </div>
                </div>
                <div class="card col-8  mb-3">
                    <img src="https://media.wired.com/photos/59372b8186599a3834f7f8be/master/w_2560%2Cc_limit/tatooine-ft.jpg" class="card-img-top" height="300px" widht="400" ></img>
                    <div class="card-body">
                        <h2 class="card-title">Planets</h2>
                        <p class="card-text">Adéntrate en el mundo de Star Wars y conoce sus planetas</p>
                        <span>
                            <Link to="/Planets">
                            <button className="btn btn-success">Ver</button>
                            </Link>
                        </span>
                    </div>
                </div>
                <div class="card col-8  mb-3">
                    <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/10-best-star-wars-alien-species.jpg" class="card-img-top" height="300px" widht="400" ></img>
                    <div class="card-body">
                        <h2 class="card-title">Species</h2>
                        <p class="card-text">Adéntrate en el mundo de Star Wars y conoce sus especies</p>
                        <span>
                            <Link to="/Planets">
                            <button className="btn btn-success">Ver</button>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};