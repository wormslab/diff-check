(function() {
  "use strict";
  let React = require('react')
    , DC = require('../constants/DiffConstants')
    , InputStore = require('../stores/InputStore');

  let TextViewer = React.createClass({
    componentDidMount: function() {
      let editor = ace.edit(this.props.ace);
      editor.setTheme("ace/theme/github");
      editor.getSession().setMode("ace/mode/diff");
      editor.setReadOnly(true);
      editor.$blockScrolling = Infinity;
      InputStore.setEditor(this.props.ace, editor);
      this._updateTextView();
      InputStore.addChangeListener(DC.DIFF_COMPLETE, this._updateTextView);
    },

    _updateTextView: function() {
      let editor = InputStore.getEditor(this.props.ace);
      editor.selectAll();
      editor.removeLines();
      function printLines(obj, editor, side) {

        for (let key in obj) {
          if (obj[key].hasOwnProperty('child')) {
            editor.insert(key + '\n');
            let childObj = obj[key]['child'];
            printLines(childObj, editor, side);
          } else {
            if (obj[key]['lv'] && obj[key]['rv']) {
              if (obj[key]['type'] !== 'ID') {
                if (side === 'original') {
                  editor.insert(key + ' = ' + obj[key]['lv'] + '\n');
                } else {
                  editor.insert(key + ' = ' + obj[key]['rv'] + '\n');
                }

                let defaultLength = key.length + 3;
                let pos = editor.getCursorPosition();
                let R = ace.require("ace/range").Range;
                var range = new R(pos.row - 1, defaultLength + obj[key]['start'], pos.row - 1, defaultLength + obj[key]['end']);
                var marker = editor.getSession().addMarker(range,"ace_different_area", "text");
              } else {
                editor.insert(key + ' = ' + obj[key]['rv'] + '\n');
              }
            } else if (obj[key]['type'] === 'LO'){
              if (side === 'original') {
                editor.insert(key + ' = ' + obj[key]['lv'] + '\n');
                let defaultLength = key.length + 3;
                let pos = editor.getCursorPosition();
                let R = ace.require("ace/range").Range;
                var range = new R(pos.row - 1, 0, pos.row - 1, defaultLength + obj[key]['lv'].length);
                var marker = editor.getSession().addMarker(range,"ace_added_area", "text");
              }
            } else if (obj[key]['type'] === 'RO'){
              if (side === 'changed') {
                editor.insert(key + ' = ' + obj[key]['rv'] + '\n');
                let defaultLength = key.length + 3;
                let pos = editor.getCursorPosition();
                let R = ace.require("ace/range").Range;
                var range = new R(pos.row - 1, 0, pos.row - 1, defaultLength + obj[key]['rv'].length);
                var marker = editor.getSession().addMarker(range,"ace_added_area", "text");
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
