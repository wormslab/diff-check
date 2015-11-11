(function() {
  "use strict";
  let React = require('react')
    , InputStore = require('../stores/InputStore')
    , InputText = require('./InputText');

  let InputArea = React.createClass({
    
    componentDidMount: function() {
      function createAceInstance(id, text) {
        let editor = ace.edit(id);
        editor.setTheme("ace/theme/solarized_dark");
        editor.getSession().setMode("ace/mode/text");
        return editor;
      }
      InputStore.setOriginalAceEditor(createAceInstance("original-editor"));
      InputStore.setChangedAceEditor(createAceInstance("changed-editor"));
    },

    render: function() {
      return (
        <div className="flex-row-start-center">
          <InputText ace="original-editor" className="flex-row-start-center" desc="ORIGINAL TEXT" />
          <InputText ace="changed-editor" className="flex-row-start-center" desc="CHANGED TEXT" />
        </div>
      );
    },
  });
  module.exports = InputArea;
})();
