(function() {
  "use strict";
  let React = require('react')
    , InputStore = require('../stores/InputStore')
    , TextViewer = require('./TextViewer')
    , DC = require('../constants/DiffConstants');

  let ViewerArea = React.createClass({

    render: function() {
      return (
        <div className="flex-row-start-center">
          <TextViewer ace={DC.ORIGINAL_VIEWER} className="flex-row-start-center" desc="ORIGINAL SIDE" />
          <TextViewer ace={DC.CHANGED_VIEWER} className="flex-row-start-center" desc="CHANGED SIDE" />
        </div>
      );
    }
  });
  module.exports = ViewerArea;
})();
