(function() {
  "use strict";
  let React = require('react');

  let Nav = React.createClass({
    render: function() {
      return (
        <div className="flex-row-start-center navigation">
          <div className="navigation-item">
            DIFF
          </div>
          <div className="navigation-clear-space"></div>
          <div className="navigation-buttons">
            <button className="btn btn-default btn-sm">Sign up</button>
            <button className="btn btn-success btn-sm">Create free account</button>
          </div>
        </div>
      );
    }
  });
  module.exports = Nav;
})();
