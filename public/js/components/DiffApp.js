(function () {
  "use strict";

  let React = require('react')
    , Nav = require('./Nav')
    , InputArea = require('./InputArea')
    , DiffArea = require('./DiffArea')
    , InputStore = require('../stores/InputStore')
    , DiffActions = require('../actions/DiffActions');

  let DiffApp = React.createClass({

    getInitialState: function() {
      return InputStore.getAllPairText();
    },

    componentDidMount: function() {
      InputStore.addChangeListener(this._onChange);
    },

    submitForComparison: function() {
      DiffActions.postDataForComparison();
    },

    render: function() {
      let DiffAreaDOM = null;
      if (this.state.complete) {
        DiffAreaDOM = <DiffArea />;
      }
      return (
        <div>
          <Nav />
          {DiffAreaDOM}
          <InputArea />
          <div className="flex-row-center-center">
            <button className="btn btn-success" onClick={this.submitForComparison}>Find Difference</button>
          </div>
        </div>
      );
    },

    _onChange: function() {
      this.setState(InputStore.getAllPairText());
    }
  });
  module.exports = DiffApp;
})();
