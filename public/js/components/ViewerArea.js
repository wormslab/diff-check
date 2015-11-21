(function() {
  "use strict";
  let React = require('react')
    , InputStore = require('../stores/InputStore')
    , TextViewer = require('./TextViewer')
    , DC = require('../constants/DiffConstants');

  let ViewerArea = React.createClass({

    render: function() {
      return (
        <div className="flex-row-center-center flex-row-max">
          <div className="view-area">
            <TextViewer ace={DC.ORIGINAL_VIEWER} side="original" desc="ORIGINAL TEXT" />
          </div>
          <div className="view-area">
            <TextViewer ace={DC.CHANGED_VIEWER} side="changed" desc="CHANGED TEXT" />
          </div>
        </div>
      );
    }
  });
  module.exports = ViewerArea;
})();
