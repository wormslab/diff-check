(function() {
  "use strict";
  let React = require('react');
  const AppBar = require('material-ui/lib/app-bar');
  const IconMenu = require('material-ui/lib/menus/icon-menu');
  const MenuItem = require('material-ui/lib/menus/menu-item');
  const IconButton = require('material-ui/lib/icon-button');
  const FontIcon = require('material-ui/lib/font-icon');

  let Nav = React.createClass({
    render: function() {
      return (
        <div className="flex-row-start-center flex-row-max">
          <AppBar
            title="Check difference"
            iconElementLeft={<IconButton><FontIcon className="material-icons">menu</FontIcon></IconButton>}
            iconElementRight={
              <IconMenu iconButtonElement={ <IconButton><FontIcon className="material-icons">more_vert</FontIcon></IconButton> }>
                <MenuItem primaryText="Logout" />
              </IconMenu>
            }
          />
        </div>
      );
    }
  });
  module.exports = Nav;
})();
