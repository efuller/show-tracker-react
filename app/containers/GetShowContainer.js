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
			shows: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	handleOpenModal() {
		console.log('opening modal');
		this.setState({ isModalOpen: true });
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
				console.log(showData);
				this.setState({
					shows: showData.data.results
				});
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
				<ShowDetailsModal isOpen={this.state.isModalOpen}  onCloseModal={this.handleCloseModal}>
					<h1>Hi</h1>
				</ShowDetailsModal>
			</div>
		)
	}
}

export default GetShowContainer;