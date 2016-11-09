import React, { Component } from 'react';

class ShowDetailsModal extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.isOpen === false) {
			return null;
		}

		return (
			<div className="modal is-active">
				<div className="modal-background"></div>
				<div className="modal-content">
					{this.props.children}
				</div>
				<button className="modal-close" onClick={this.props.onCloseModal}>Close</button>
			</div>

		)
	}
}

export default ShowDetailsModal;