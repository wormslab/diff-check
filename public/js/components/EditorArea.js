(function() {
  "use strict";
  let React = require('react')
    , InputStore = require('../stores/InputStore')
    , TextEditor = require('./TextEditor')
    , DC = require('../constants/DiffConstants');

  let EditorArea = React.createClass({
    render: function() {
      return (
        <div className="flex-row-center-center flex-row-max">
          <div className="text-area">
            <TextEditor ace={DC.ORIGINAL_EDITOR} side="original" desc="ORIGINAL TEXT" />
          </div>
          <div className="text-area">
            <TextEditor ace={DC.CHANGED_EDITOR} side="changed" desc="CHANGED TEXT" />
          </div>
        </div>
      );
    },
  });
  module.exports = EditorArea;
})();
