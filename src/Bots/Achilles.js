Robot.prototype.mode = 'double';
Robot.prototype.cloneOnStart = true;

Robot.prototype.cloneIdle = function(robot) {

};

Robot.prototype.idleEvent = function(robot) {
    robot.ahead(1);
    robot.rotateCannon(20);
    robot.turn(1);
};

Robot.prototype.cloneScanned = function(robot, scanned) {

};

Robot.prototype.scannedEvent = function(robot, scanned) {
    robot.stop();
    if(this.isNotClone(robot, scanned)) {
        robot.fire();
        robot.rotateCannon(-25);
        robot.ahead(5);

    } else {
        robot.ahead(10);
    }
};

Robot.prototype.cloneBulletHit = function(robot) {

};

Robot.prototype.bulletHit = function(robot) {
    robot.stop();
    if (robot.life < 50 && robot.availableDisappears == 1) {
        robot.disappear();
        robot.turnRight(90);
        robot.ahead(100);
    }
    robot.turnRight(5);
    robot.ahead(20);
    robot.turn(bearing);
};

Robot.prototype.cloneRobotCollision = function(robot) {

};

Robot.prototype.robotCollision = function(robot) {
    robot.back(30);
};

Robot.prototype.cloneWallCollision = function(robot, bearing) {

};

Robot.prototype.wallCollision = function(robot, bearing) {
    robot.back(50);
    robot.turn(130);
};