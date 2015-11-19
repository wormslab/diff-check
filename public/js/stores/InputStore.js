(function() {
  "use strict";
  let EventEmitter = require('events').EventEmitter
    , DiffAppDispatcher = require('../dispatcher/AppDispatcher')
    , DC = require('../constants/DiffConstants')
    , assign = require('object-assign');

  let _editorObj = {};
  let _diffResultObj = {};
  let diffComplete = false;

  let InputStore = assign({}, EventEmitter.prototype, {

    setEditor: function(id, editor) {
      _editorObj[id] = editor;
    },

    getEditor: function(id) {
      if (!id) {
        return _editorObj;
      }
      return _editorObj[id];
    },

    setEditorText: function(id, text) {
      let editor = _editorObj[id];
      if (!editor) {
        return false;
      }
      editor[id].session.setValue(text);
    },

    getEditorText: function(id) {
      let editor = _editorObj[id];
      if (!editor) {
        return '';
      }
      return editor.session.getValue();
    },

    getDiffResult: function() {
      return _diffResultObj;
    },

    setViewerResult: function() {
      this.setEditorText(DC.ORIGINAL_VIEWER, _diffResultObj);
      this.setEditorText(DC.CHANGED_VIEWER, _diffResultObj);
    },

    emitChange: function(event) {
      this.emit(event);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(event, callback) {
      this.on(event, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(evnet, callback) {
      this.removeListener(event, callback);
    }
  });

  InputStore.dispatchToken = DiffAppDispatcher.register(function(action) {
    switch(action.actionType) {
      case DC.DIFF_POST:
        let data = {
          original: InputStore.getEditorText(DC.ORIGINAL_EDITOR),
          changed: InputStore.getEditorText(DC.CHANGED_EDITOR)
        };
        $.post('http://localhost:3000/difference', data, function(response) {
          _diffResultObj = response;
          // console.log(require('util').inspect(response, {depth: null}));
          InputStore.emitChange(DC.DIFF_COMPLETE);
        }).fail(function(err) {
          console.log(err);
        });
        break;
      default:
        // no op
    }
  });

  module.exports = InputStore;
})();
