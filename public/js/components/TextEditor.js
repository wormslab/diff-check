(function() {
  "use strict";
  let React = require('react')
    , InputStore = require('../stores/InputStore');

  let TextEditor = React.createClass({
    componentDidMount: function() {
      let editor = ace.edit(this.props.ace);
      editor.setTheme("ace/theme/github");
      editor.getSession().setMode("ace/mode/ini");
      editor.$blockScrolling = Infinity;
      InputStore.setEditor(this.props.ace, editor);
    },

    render: function() {
      return (
        <div className="text-box">
          <div className="text-label">
            <span className="label">{this.props.desc}</span>
          </div>
          <div id={this.props.ace} className="input-textarea"></div>
        </div>
      );
    }
  });
  module.exports = TextEditor;
})();
