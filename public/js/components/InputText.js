(function() {
  "use strict";
  let React = require('react');

  let InputText = React.createClass({
    render: function() {
      return (
        <div className="text-box">
          <div className="text-label">
            <span className="label label-default">{this.props.desc}</span>
          </div>
          <div id={this.props.ace} className="input-textarea"></div>
        </div>
      );
    },
  });
  module.exports = InputText;
})();
