(function() {
  "use strict";
  let EventEmitter = require('events').EventEmitter
    , DiffAppDispatcher = require('../dispatcher/AppDispatcher')
    , DiffConstants = require('../constants/DiffConstants')
    , assign = require('object-assign');

  const CHANGE_EVENT = "change";
  let _editorObj = {
    originalEditor: null,
    changedEditor: null
  }

  let InputStore = assign({}, EventEmitter.prototype, {

    getPairText: function() {
      return {
        originalText: this.getOriginalText(),
        changedText: this.getChangedText()
      };
    },

    getOriginalText: function() {
      let editor = _editorObj.originalEditor;
      return editor ? editor.session.getValue() : '';
    },

    getChangedText: function() {
      let editor = _editorObj.changedEditor;
      return editor ? editor.session.getValue() : '';
    },

    emitChange: function() {
      this.emit(CHANGE_EVENT);
    },

    setOriginalAceEditor: function(editor) {
      _editorObj.originalEditor = editor;
    },

    setChangedAceEditor: function(editor) {
      _editorObj.changedEditor = editor;
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }
  });

  InputStore.dispatchToken = DiffAppDispatcher.register(function(action) {
    switch(action.actionType) {
      case DiffConstants.DIFF_POST:
        let data = InputStore.getPairText();
        $.post('http://localhost:3000/difference', data, function(response) {
          console.log(response);
        }).fail(function(err) {
          console.log(err);
        });
        InputStore.emitChange();
        break;
      case DiffConstants.DIFF_COMPLETE:
        break;
      default:
        // no op
    }
  });

  module.exports = InputStore;
})();
