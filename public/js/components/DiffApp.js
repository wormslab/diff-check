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
      return InputStore.getPairText();
    },

    componentDidMount: function() {
      InputStore.addChangeListener(this._onChange);
    },

    submitForComparison: function() {
      DiffActions.postDataForComparison();
    },

    render: function() {
      return (
        <div>
          <Nav />
          {function(){
            if (this.state.complete) {
              <DiffArea />
            }
          }.call(this)}
          <DiffArea />
          <InputArea />
          <div className="flex-row-center-center">
            <button className="btn btn-success" onClick={this.submitForComparison}>Find Difference</button>
          </div>
        </div>
      );
    },

    _onChange: function() {
      console.log('-------------- on change')
      console.log(InputStore.getPairText());
      this.setState(InputStore.getPairText());
    }
  });
  module.exports = DiffApp;
})();
