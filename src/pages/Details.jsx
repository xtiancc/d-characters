import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import "./Details.css";

const Details = () => {
  const [character, setCharacter] = useState();
  const [ready, isReady] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  const handleReturn = () => {
    history.goBack();
  };

  const getCharacter = async () => {
    const response = await fetch(`https://api.disneyapi.dev/characters/${id}`);
    const data = await response.json();

    // To fix error with imgs. Temporal fix maybe?
    const imgKey = "/revision/latest?cb=";
    const img =
      data.imageUrl && data.imageUrl.includes(imgKey)
        ? data.imageUrl.split(imgKey)[0]
        : "/assets/imageNotAvailable.png";

    const newData = {
      ...data,
      imageUrl: img,
    };
    setCharacter(newData);
    isReady(true);
  };

  useEffect(() => {
    isReady(false);
    getCharacter();
    // eslint-disable-next-line
  }, [id]);

  return (
    <>
      {ready && (
        <>
          <h2>{character.name}</h2>
          <hr />
          <div className="row">
            <div className="col-md-6 text-center my-3">
              <img
                className="img-fluid border rounded"
                style={{ width: "60%", height: "auto" }}
                alt={`${character.name}'s preview`}
                src={character.imageUrl}
              />
            </div>
            <div className="col-md-6 my-3">
              <h3>Appearance/s:</h3>
              <hr />
              <ul className="list-group mb-3">
                <li className="list-group-item list-group-item-dark">
                  Film/s: {character.films.length}
                </li>
                {character.films.map((film, index) => {
                  return (
                    <li className="list-group-item" key={index}>
                      {film}
                    </li>
                  );
                })}
              </ul>

              <ul className="list-group mb-3">
                <li className="list-group-item list-group-item-dark">
                  Short film/s: {character.shortFilms.length}
                </li>
                {character.shortFilms.map((shortFilm, index) => {
                  return (
                    <li className="list-group-item" key={index}>
                      {shortFilm}
                    </li>
                  );
                })}
              </ul>

              <ul className="list-group mb-3">
                <li className="list-group-item list-group-item-dark">
                  TV show/s: {character.tvShows.length}
                </li>
                {character.tvShows.map((tvShow, index) => {
                  return (
                    <li className="list-group-item" key={index}>
                      {tvShow}
                    </li>
                  );
                })}
              </ul>

              <ul className="list-group mb-3">
                <li className="list-group-item list-group-item-dark">
                  Video game/s: {character.videoGames.length}
                </li>
                {character.videoGames.map((videoGame, index) => {
                  return (
                    <li className="list-group-item" key={index}>
                      {videoGame}
                    </li>
                  );
                })}
              </ul>

              <ul className="list-group mb-3">
                <li className="list-group-item list-group-item-dark">
                  Park attraction/s: {character.parkAttractions.length}
                </li>
                {character.parkAttractions.map((parkAttraction, index) => {
                  return (
                    <li className="list-group-item" key={index}>
                      {parkAttraction}
                    </li>
                  );
                })}
              </ul>
              <div className="d-flex justify-content-end">
                <a href={character.sourceUrl} target="_blank" rel="noreferrer">
                  Read more about this character&nbsp;
                  <small>The Disney Wiki</small>
                </a>
              </div>
            </div>
          </div>
          <button className="btn btn-dark my-3 mx-2" onClick={handleReturn}>
            &lt; Go back
          </button>
        </>
      )}
    </>
  );
};

export default Details;
