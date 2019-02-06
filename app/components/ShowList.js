import React, { PropTypes } from "react";

function ShowCard({ id, poster, name, openModal }) {
  return (
    <article className="column is-one-quarter" onClick={() => openModal(id)}>
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img
              src={
                !poster
                  ? "http://placehold.it/300x450"
                  : `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster}`
              }
              alt={`${name}`}
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-5">{name}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function ShowList({ shows, onOpenModal }) {
  return (
    <div className="columns is-multiline">
      {shows.map(show => (
        <ShowCard
          key={show.id}
          openModal={onOpenModal}
          id={show.id}
          name={show.name}
          poster={show.poster_path}
        />
      ))}
    </div>
  );
}

ShowList.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.object).isRequired,
  onOpenModal: PropTypes.func.isRequired
};

ShowCard.propTypes = {
  id: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  poster: PropTypes.string
};

export default ShowList;
