(function() {
  "use strict";
  let React = require('react');
  const AppBar = require('material-ui/lib/app-bar');
  const IconMenu = require('material-ui/lib/menus/icon-menu');
  const MenuItem = require('material-ui/lib/menus/menu-item');
  const IconButton = require('material-ui/lib/icon-button');
  const FontIcon = require('material-ui/lib/font-icon');
  const SelectField = require('material-ui/lib/select-field');
  const DropDownMenu = require('material-ui/lib/drop-down-menu');

  let Nav = React.createClass({

    render: function() {
      //<IconMenu iconButtonElement={ <IconButton><FontIcon className="material-icons">more_vert</FontIcon></IconButton> }>
      //  <MenuItem primaryText="Logout" />
      //</IconMenu>
      let menuItems = [
        { payload: '1', text: 'INI' },
      ];
      return (
        <div className="flex-row-start-center flex-row-max">
          <AppBar
            title="Check difference"
            iconElementLeft={<IconButton><FontIcon className="material-icons">menu</FontIcon></IconButton>}
            iconElementRight={
              <SelectField style={{textAlign: "center"}} labelStyle={{color: "white"}} menuItems={menuItems} />
            }
          />
        </div>
      );
    }
  });
  module.exports = Nav;
})();
