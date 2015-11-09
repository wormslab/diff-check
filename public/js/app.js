(function () {
  "use strict";

  let React = require('react')
    , DiffApp = require('./components/DiffApp');

  require("../css/site.less");

  React.render(
    <DiffApp />,
    document.getElementById('app')
  );

})();
