(function() {
  "use strict";
  let React = require('react')
    , InputStore = require('../stores/InputStore');

  let TextViewer = React.createClass({
    componentDidMount: function() {
      let editor = ace.edit(this.props.ace);
      editor.setTheme("ace/theme/solarized_dark");
      editor.getSession().setMode("ace/mode/text");
      editor.setReadOnly(true);
      editor.$blockScrolling = Infinity;
      InputStore.setEditor(this.props.ace, editor);

      function printLines(obj, editor, side) {

        for (let key in obj) {
          if (obj[key].hasOwnProperty('child')) {
            editor.insert(key + '\n');
            let childObj = obj[key]['child'];
            printLines(childObj, editor, side);
          } else {
            if (obj[key]['lv'] && obj[key]['rv']) {
              if (obj[key]['type'] === 'DI' && (side === 'original' || side === 'chaged')) {
                editor.insert(key + ' = ' + obj[key]['lv'] + '\n');
                let pos = editor.getCursorPosition();
                let R = ace.require("ace/range").Range;
                var range = new R(pos.row - 1, obj[key]['start'], pos.row - 1, obj[key]['end']);
                var marker = editor.getSession().addMarker(range,"ace_different_area", "text");
                console.log(range);
              } else {
                editor.insert(key + ' = ' + obj[key]['rv'] + '\n');
              }
            }
          }
        }
        editor.insert('\n');
      }

      printLines(InputStore.getDiffResult(), editor, this.props.side);
    },

    render: function() {
      return (
        <div className="text-box">
          <div className="text-label">
            <span className="label label-default">{this.props.desc}</span>
          </div>
          <div id={this.props.ace} className="input-textarea"></div>
        </div>
      );
    },
  });
  module.exports = TextViewer;
})();
