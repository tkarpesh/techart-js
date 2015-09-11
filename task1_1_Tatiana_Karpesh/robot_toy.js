// Implement a robot toy class with move(), left(), right(), report() functions.
// Robot has 0, 0 as initial coordinates and sees on NORTH. move() should change coordinate by one,
// left() and right() will rotate the robot 90 degrees in the specified direction without
// changing the position of the robot. Coordinates can't be negative - ignore any move that
// change it on negative. report() should print robot coordinates and position.

function Robot() {
  this.coordinates = [0, 0];
  this.directions = [{ name: 'North', value: [0, 1]  },
                     { name: 'East',  value: [1, 0]  },
                     { name: 'South', value: [0, -1] },
                     { name: 'West',  value: [-1, 0] }];
  this.directionIndex = 0;

  this.right = function() {
    this.directionIndex = (this.directionIndex + 1) % 4;
  };

  this.left = function() {
    this.directionIndex = (this.directionIndex + 3) % 4;
  };

  this.report = function() {
    console.log('Direction: ' + this.direction()['name']);
    console.log('Coordinates:' + this.coordinates);
  };

  this.direction = function() {
    return this.directions[this.directionIndex];
  };

  this.move = function() {
    for (var i = 0; i < this.coordinates.length; i++) {
      this.coordinates[i] += this.direction()['value'][i];
      if (this.coordinates[i] < 0) {
        this.coordinates[i] = 0;
      }
    }
  };
};

robot = new Robot;
robot.move();
robot.move();
robot.move();
robot.right();
robot.move();
robot.move();
robot.report();
