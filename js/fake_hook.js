if (!window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
  Object.defineProperty(
    window, '__REACT_DEVTOOLS_GLOBAL_HOOK__', {value: {
      inject: function(runtime) { this._reactRuntime = runtime; },
      getSelectedInstance: null,
      Overlay: null
  }});
}