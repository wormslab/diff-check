(function() {
  "use strict";
  let React = require('react')
    , InputStore = require('../stores/InputStore')
    , InputView = require('./InputView');

  let DiffArea = React.createClass({

    componentDidMount: function() {
      function createAceInstance(id, text) {
        let editor = ace.edit(id);
        editor.setTheme("ace/theme/solarized_dark");
        editor.getSession().setMode("ace/mode/text");
        editor.setReadOnly(true);
        return editor;
      }
      InputStore.setOriginalAceEditor(createAceInstance("original-viewer"));
      InputStore.setChangedAceEditor(createAceInstance("changed-viewer"));
    },

    render: function() {
      return (
        <div className="flex-row-start-center">
          <InputView ace="original-viewer" className="flex-row-start-center" desc="ORIGINAL SIDE" />
          <InputView ace="changed-viewer" className="flex-row-start-center" desc="CHANGED SIDE" />
        </div>
      );
    },
  });
  module.exports = DiffArea;
})();
