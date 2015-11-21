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
  var DefaultRawTheme = require('../lib/rawTheme');
  var ThemeManager = require('material-ui/lib/styles/theme-manager');

  let DiffApp = React.createClass({

    childContextTypes: {
      muiTheme: React.PropTypes.object
    },

    getChildContext: function getChildContext() {
      return {
        muiTheme: this.state.muiTheme
      };
    },

    getInitialState: function() {
      let theme = this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
      theme.raisedButton.secondaryColor = "#E56425";
      theme.fontIcon = { color: "white", verticalAlign: "middle", marginLeft: "5px" }
      return { complete: false, muiTheme: theme };
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
              <FontIcon style={this.state.muiTheme.fontIcon} className="material-icons" >autorenew</FontIcon>
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
