(function() {
  "use strict";
  let React = require('react');

  let InputArea = React.createClass({
    componentDidMount: function() {
      this.editor = ace.edit(this.props.ace);
      this.editor.setTheme("ace/theme/solarized_dark");
      this.editor.getSession().setMode("ace/mode/text");
    },
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
  module.exports = InputArea;
})();
