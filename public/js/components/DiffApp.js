(function () {
  "use strict";

  let React = require('react')
    , Nav = require('./Nav')
    , EditorArea = require('./EditorArea')
    , ViewerArea = require('./ViewerArea')
    , InputStore = require('../stores/InputStore')
    , DiffActions = require('../actions/DiffActions')
    , DC = require('../constants/DiffConstants');

  let DiffApp = React.createClass({

    getInitialState: function() {
      return { complete: false };
    },

    submitForComparison: function() {
      DiffActions.postDataForComparison();
    },

    componentDidMount: function() {
      InputStore.addChangeListener(DC.DIFF_COMPLETE, this._onDiffComplete);
    },

    render: function() {
      let ViewerAreaDOM = null;
      if (this.state.complete) {
        ViewerAreaDOM = <ViewerArea />;
      }
      return (
        <div>
          <Nav />
          {ViewerAreaDOM}
          <EditorArea />
          <div className="flex-row-center-center">
            <button className="btn btn-success" onClick={this.submitForComparison}>Find Difference</button>
          </div>
        </div>
      );
    },

    _onDiffComplete: function() {
      this.setState({ complete: true });
    }
  });
  module.exports = DiffApp;
})();
