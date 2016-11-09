import React from 'react';

function ShowCard({poster, name, openModal}) {
	return (
		<div className="column is-one-quarter" onClick={openModal}>
			<div className="card">
				<div className="card-image">
					<figure className="image">
						<img src={
							!poster
								? `http://placehold.it/300x450`
								: `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster}`
						} alt={`${name}`}/>
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
		</div>
	)
}

function ShowList({shows, onOpenModal}) {
	return (
		<div className="columns is-multiline">
			{
				shows.map((show) => (
					<ShowCard key={show.id} openModal={onOpenModal} name={show.name} poster={show.poster_path}/>
				))
			}
		</div>
	)
}

export default ShowList;