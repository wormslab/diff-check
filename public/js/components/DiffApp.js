(function () {
  "use strict";

  let React = require('react')
    , Nav = require('./Nav')
    , EditorArea = require('./EditorArea')
    , ViewerArea = require('./ViewerArea')
    , InputStore = require('../stores/InputStore')
    , DiffActions = require('../actions/DiffActions')
    , DC = require('../constants/DiffConstants');

  const RaisedButton = require('material-ui/lib/raised-button');
  const FontIcon = require('material-ui/lib/font-icon');

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
        <div className="flex-row-center-center">
          <Nav />
          {ViewerAreaDOM}
          <EditorArea />
          <div className="flex-row-center-center flex-row-max">
            <RaisedButton secondary={true} onClick={this.submitForComparison} label="Check diff" labelPosition="after">
              <FontIcon style={{color: "white", verticalAlign: "middle", marginLeft: "5px"}} className="material-icons" >autorenew</FontIcon>
            </RaisedButton>
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
