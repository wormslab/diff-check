(function () {
  "use strict";

  let React = require('react')
    , InputArea = require('./InputArea');

  let DiffApp = React.createClass({
    render: function() {
      <div>
        <div className="flex-row-start-center">
          <InputArea ace="left-input" className="flex-row-start-center" desc="ORIGINAL TEXT" />
          <InputArea ace="right-input" className="flex-row-start-center" desc="CHANGED TEXT" />
        </div>
        <div className="flex-row-center-center">
          <button className="btn btn-success">Find Difference</button>
        </div>
      </div>
    }
  });
  module.exports = DiffApp;
})();
