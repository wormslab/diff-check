(function () {
  "use strict";

  let React = require('react')
    , ReactDOM = require('react-dom')
    , DiffApp = require('./components/DiffApp');

  require("../css/site.less");

  ReactDOM.render(
    <DiffApp />,
    document.getElementById('app')
  );

})();
