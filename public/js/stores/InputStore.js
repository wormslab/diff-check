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
  let _viewerObj = {
    originalViewer: null,
    changedViewer: null
  }
  let complete = false;

  let InputStore = assign({}, EventEmitter.prototype, {

    getEditorObj: function() {
      return _editorObj;
    },

    getViewerObj: function() {
      return _viewerObj;
    },

    getAllPairText: function() {
      return {
        originalText: this.getOriginalText(),
        changedText: this.getChangedText(),
        originalViewerText: this.getOriginalViewerText(),
        chagnedViewerText: this.getChangedViewerText(),
        complete: complete
      };
    },

    getPairEditor: function() {
      return {
        originalText: this.getOriginalText(),
        changedText: this.getChangedText()
      }
    },

    getPairViewer: function() {
      return {
        originalViewerText: this.getOriginalViewerText(),
        chagnedViewerText: this.getChangedViewerText()
      }
    },

    getOriginalText: function() {
      let editor = _editorObj.originalEditor;
      return editor ? editor.session.getValue() : '';
    },

    getChangedText: function() {
      let editor = _editorObj.changedEditor;
      return editor ? editor.session.getValue() : '';
    },

    getOriginalViewerText: function() {
      let editor = _viewerObj.originalViewer;
      return editor ? editor.session.getValue() : '';
    },

    getChangedViewerText: function() {
      let editor = _viewerObj.changedViewer;
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

    setOriginalAceViewer: function(editor) {
      _viewerObj.originalVIewer = editor;
    },

    setChangedAceViewer: function(editor) {
      _viewerObj.changedViewer = editor;
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
        let data = InputStore.getPairEditor();
        $.post('http://localhost:3000/difference', data, function(response) {
          complete = true;
          InputStore.emitChange();
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
