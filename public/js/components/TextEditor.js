(function() {
  "use strict";
  let React = require('react')
    , InputStore = require('../stores/InputStore');

  let TextEditor = React.createClass({
    componentDidMount: function() {
      let editor = ace.edit(this.props.ace);
      editor.setTheme("ace/theme/solarized_dark");
      editor.getSession().setMode("ace/mode/text");
      InputStore.setEditor(this.props.ace, editor);
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
    }
  });
  module.exports = TextEditor;
})();
