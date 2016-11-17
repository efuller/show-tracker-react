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
				<div className="modal-card">
					<header className="modal-card-head">
						<p className="modal-card-title">{this.props.title}</p>
						<button className="modal-close" onClick={this.props.onCloseModal}>Close</button>
					</header>
					<section className="modal-card-body">
						{this.props.children}
					</section>
					<footer className="modal-card-foot">
						{
							!this.props.previousShow
							? ''
							: <a className="icon-previous" onClick={this.props.onPreviousShow}></a>
						}
						{
							!this.props.nextShow
							? ''
							: <a className="icon-next" onClick={this.props.onNextShow}></a>
						}
					</footer>
				</div>
			</div>

		)
	}
}

export default ShowDetailsModal;