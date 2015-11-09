(function () {
  "use strict";

  let React = require('react')
    , ReactDOM = require('react-dom')
    , InputArea = require('./components/InputArea');

  require("../css/site.less");

  ReactDOM.render(<InputArea ace="left-input" desc="ORIGINAL TEXT"/>, document.getElementById('left-container'));
  ReactDOM.render(<InputArea ace="right-input" desc="CHANGED TEXT"/>, document.getElementById('right-container'));
})();
