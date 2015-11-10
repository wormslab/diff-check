(function() {

let DiffAppDispatcher = require('../dispatcher/AppDispatcher')
  , DiffConstants = require('../constants/DiffConstants')
  , DiffActions = {
      postDataForComparison: function() {
        DiffAppDispatcher.dispatch({
          actionType: DiffConstants.DIFF_POST
        });
      },
      diffComplete: function() {
        DiffAppDispatcher.dispatch({
          actionType: DiffConstants.DIFF_COMPLETE
        });
      }
    };
  module.exports = DiffActions;
})();
