import React, { Component, PropTypes } from 'react';

class ShowDetailsModal extends Component {

	render() {
		if (this.props.isOpen === false) {
			return null;
		}

		return (
			<div className="modal is-active">
				<div className="modal-background" />
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
							: <a className="icon-previous" onClick={this.props.onPreviousShow}>&nbsp;</a>
						}
						{
							!this.props.nextShow
							? ''
							: <a className="icon-next" onClick={this.props.onNextShow}>&nbsp;</a>
						}
					</footer>
				</div>
			</div>

		);
	}
}

// @todo Need to fix previous/next show props - need to use shape.
ShowDetailsModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	title: PropTypes.string,
	onCloseModal: PropTypes.func.isRequired,
	children: PropTypes.element.isRequired,
	previousShow: PropTypes.shape(),
	nextShow: PropTypes.shape(),
	onPreviousShow: PropTypes.func.isRequired,
	onNextShow: PropTypes.func.isRequired,
};

export default ShowDetailsModal;
