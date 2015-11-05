(function() {
  function Logger(level, strategy) {
    this.LEVELS = ['DEBUG', 'WARN', 'ERROR'];

    this._strategy = strategy;
    this._currentLevel = this.LEVELS.indexOf(level) == -1 ? this.LEVELS[0] : level;
  };

  Logger.prototype.log = function(level, message) {
    if (this._isPrintLog(level)) {
      this._strategy.call(this, this._formattedMessage(level, message));
    }
  };

  Logger.prototype._formattedMessage = function(level, message) {
    return '[' + this._formattedCurrentTime() + '](' + level + ') ' + message;
  };

  Logger.prototype._formattedCurrentTime = function() {
    return (new Date()).toUTCString();
  };

  Logger.prototype._isPrintLog = function(level) {
    return this.LEVELS.indexOf(this._currentLevel) <= this.LEVELS.indexOf(level);
  };

  Logger.isNode = function() {
    return typeof module !== 'undefined' && module.exports;
  };

  Logger.consoleStrategy = function(message) {
    console.log(message);
  };

  Logger.alertStrategy = function(message) {
    if (!Logger.isNode()) {
      alert(message);
    }
  };

  Logger.windowStrategy = function(message) {
    if (!Logger.isNode()) {
      document.write(message);
    }
  };

  Logger.apiServerStrategy = function(message) {
    if (typeof XMLHttpRequest !== 'undefined') {
      var xhr = new XMLHttpRequest();

      xhr.open('POST', 'http://httpbin.org/post', true);
      xhr.send(message);
    }
  };

  (Logger.isNode() ? global : window).Logger = Logger;
})();
