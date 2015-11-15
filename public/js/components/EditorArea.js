(function() {
  "use strict";
  let React = require('react')
    , InputStore = require('../stores/InputStore')
    , TextEditor = require('./TextEditor')
    , DC = require('../constants/DiffConstants');

  let EditorArea = React.createClass({
    render: function() {
      return (
        <div className="flex-row-start-center">
          <TextEditor ace={DC.ORIGINAL_EDITOR} className="flex-row-start-center" desc="ORIGINAL TEXT" />
          <TextEditor ace={DC.CHANGED_EDITOR} className="flex-row-start-center" desc="CHANGED TEXT" />
        </div>
      );
    },
  });
  module.exports = EditorArea;
})();
