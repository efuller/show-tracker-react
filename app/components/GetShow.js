import React from "react";

function GetShow(props) {
  return (
    <div className="column is-half is-offset-one-quarter">
      <form onSubmit={props.onSubmitShow}>
        <p className="control has-addons has-addons-centered">
          <input
            id="search-show"
            className="input search-input"
            type="text"
            placeholder="Search for a Show"
            onChange={props.onUpdateShow}
          />
          <button className="button is-info search-get-show" type="submit">
            Search
          </button>
        </p>
      </form>
    </div>
  );
}

GetShow.propTypes = {
  onSubmitShow: React.PropTypes.func.isRequired,
  onUpdateShow: React.PropTypes.func.isRequired
};

export default GetShow;
