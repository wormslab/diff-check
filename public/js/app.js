(function () {
  "use strict";

  let React = require('react')
    , ReactDOM = require('react-dom')
    , DiffApp = require('./components/DiffApp');

  require("react-tap-event-plugin")();
  require("../css/site.less");

  ReactDOM.render(
    <DiffApp />,
    document.getElementById('app')
  );

})();
