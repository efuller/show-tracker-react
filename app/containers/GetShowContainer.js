import React, { Component } from 'react';

import { getShows } from '../helpers/api';
import GetShow from '../components/GetShow';
import ShowList from '../components/ShowList';
import ShowDetailsModal from '../components/ShowDetailsModal';

class GetShowContainer extends Component {
	constructor() {
		super();

		this.state = {
			searchValue: '',
			isModalOpen: false,
			shows: [],
			activeShow: {},
			nextShow: {},
			previousShow: {},
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
		this.handleNextShow = this.handleNextShow.bind(this);
		this.handlePreviousShow = this.handlePreviousShow.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	componentDidMount() {
		document.body.addEventListener('keydown', this.handleKeyPress);
	}

	componentWillUnmount() {
		document.body.removeEventListener('keydown');
	}

	handleKeyPress(event) {
		const next = 39;
		const previous = 37;

		if (event.keyCode !== next && event.keyCode !== previous) {
			return;
		}

		if (event.keyCode === next) {
			if (this.state.nextShow) {
				this.handleNextShow();
			}
		}

		if (event.keyCode === previous) {
			if (this.state.previousShow) {
				this.handlePreviousShow();
			}
		}
	}

	getActiveShow(id) {
		const shows = this.state.shows;
		return shows.filter((show) => show.id === id);
	}

	getShowIndex(shows, currentShow) {
		return shows.findIndex(show => show.id === currentShow.id);
	}

	getNextShow(activeShow) {
		const { shows } = this.state;
		const currentIndex = this.getShowIndex(shows, activeShow);

		if (shows[currentIndex+1]) {
			return shows[currentIndex + 1];
		}
	}

	getPreviousShow(activeShow) {
		const { shows } = this.state;
		const currentIndex = this.getShowIndex(shows, activeShow);

		if (shows[currentIndex - 1]) {
			return shows[currentIndex - 1];
		}
	}

	handleOpenModal(id) {
		const activeShow = this.getActiveShow(id);
		const nextShow = this.getNextShow(activeShow[0]);
		const previousShow = this.getPreviousShow(activeShow[0]);

		this.setState({
			isModalOpen: true,
			activeShow: activeShow[0],
			nextShow,
			previousShow,
		});

	}

	handleCloseModal() {
		this.setState({ isModalOpen: false });
	}

	handleChange(event) {
		this.setState({
			searchValue: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault();

		getShows(this.state.searchValue)
			.then((showData) => {
				this.setState({
					shows: showData.data.results
				});
			});
	}

	handleNextShow(event) {
		const nextShow = this.getNextShow(this.state.nextShow) || undefined;
		const previousShow = this.getPreviousShow(this.state.nextShow) || undefined;

		this.setState({
			activeShow: this.state.nextShow,
			nextShow,
			previousShow,
		});

	}

	handlePreviousShow() {
		const nextShow = this.getNextShow(this.state.previousShow) || undefined;
		const previousShow = this.getPreviousShow(this.state.previousShow) || undefined;

		this.setState({
			activeShow: this.state.previousShow,
			nextShow,
			previousShow,
		});

	}

	render() {
		return (
			<div>
				<GetShow
					onSubmitShow={this.handleSubmit}
					onUpdateShow={this.handleChange}
					show={this.state.show}
				/>
				<ShowList
					shows={this.state.shows}
					onOpenModal={this.handleOpenModal}
				/>
				<ShowDetailsModal onNextShow={this.handleNextShow} onPreviousShow={this.handlePreviousShow} isOpen={this.state.isModalOpen} title={this.state.activeShow.name} previousShow={this.state.previousShow} nextShow={this.state.nextShow} onCloseModal={this.handleCloseModal}>
					<div className="columns">
						<div className="column is-one-third">
							<figure className="image">
								<img src={
									!this.state.activeShow.poster_path
										? `http://placehold.it/300x450`
										: `https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.state.activeShow.poster_path}`
								} alt={`${name}`}/>
							</figure>
						</div>
						<div className="column is-two-thirds">
							<h3 className="title">Overview</h3>
							<p>{this.state.activeShow.overview}</p>
						</div>
					</div>
				</ShowDetailsModal>
			</div>
		)
	}
}

export default GetShowContainer;