(function () {
  "use strict";

  let React = require('react')
    , Nav = require('./Nav')
    , InputArea = require('./InputArea')
    , InputStore = require('../stores/InputStore')
    , DiffActions = require('../actions/DiffActions');

  let DiffApp = React.createClass({
    getInitialState: function() {
      return InputStore.getPairText();
    },
    componentDidMount: function() {
      function createAceInstance(id, text) {
        let editor = ace.edit(id);
        editor.setTheme("ace/theme/solarized_dark");
        editor.getSession().setMode("ace/mode/text");
        return editor;
      }
      InputStore.setOriginalAceEditor(createAceInstance("original-editor"));
      InputStore.setChangedAceEditor(createAceInstance("changed-editor"));
      InputStore.addChangeListener(this._onChange);
    },
    submitForComparison: function() {
      DiffActions.postDataForComparison();
      this.setState(InputStore.getPairText());
    },
    render: function() {
      return (
        <div>
          <Nav />
          <div className="flex-row-start-center">
            <InputArea ace="original-editor" className="flex-row-start-center" desc="ORIGINAL TEXT" text={this.state.originalText} />
            <InputArea ace="changed-editor" className="flex-row-start-center" desc="CHANGED TEXT" text={this.state.changedText} />
          </div>
          <div className="flex-row-center-center">
            <button className="btn btn-success" onClick={this.submitForComparison}>Find Difference</button>
          </div>
        </div>
      );
    },
    _onChange: function() {
      this.setState(InputStore.getPairText());
    }
  });
  module.exports = DiffApp;
})();
