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
            <TextEditor ace={DC.ORIGINAL_EDITOR} side="original" desc="Original text" />
          </div>
          <div className="text-area">
            <TextEditor ace={DC.CHANGED_EDITOR} side="changed" desc="Changed text" />
          </div>
        </div>
      );
    },
  });
  module.exports = EditorArea;
})();
