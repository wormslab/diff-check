(function() {
  "use strict";
  var keyMirror = require('keymirror');

  module.exports = keyMirror({
    ORIGINAL_EDITOR: null,
    CHANGED_EDITOR: null,
    ORIGINAL_VIEWER: null,
    CHANGED_VIEWER: null,
    DIFF_POST: null,
    DIFF_COMPLETE: null
  });
})();
