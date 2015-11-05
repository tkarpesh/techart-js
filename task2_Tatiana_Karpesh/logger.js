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


var consoleStrategy = function(level, message) {
  console.log(level, message);
}

var alertStrategy = function(level, message) {
  alert(level, message);
}

var windowStrategy = function(level, message) {
  document.write(level, message);
}

var apiServerStrategy = function(level, message) {
  var xhr = new XMLHttpRequest();

  xhr.open('POST', 'http://example.com', true);
  xhr.send(message);
}

a = new Logger('WARN', consoleStrategy);
a.log('ERROR', 'You need to use getDate() to get the date part. The getDay() function returns the day number');
