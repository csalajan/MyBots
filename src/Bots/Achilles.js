/**
 * Bot Mode
 * @type {string}
 * @options {'dual', 'double'}
 *
 * Dual Mode enables use of clone methods on clone
 *
 * Double Mode uses Main bot methods on both bots
 */
Robot.prototype.mode = 'double';

/**
 * Determines if Clone is spawned at the start of the match
 * @type {boolean}
 */
Robot.prototype.cloneOnStart = true;

/**
 * Idle Event for Clone
 * @param robot
 */
Robot.prototype.cloneIdle = function(robot) {

};

/**
 * Idle Event for Bot
 * @param robot
 */
Robot.prototype.idleEvent = function(robot) {
    robot.ahead(1);
    robot.rotateCannon(20);
    robot.turn(1);
};

/**
 * Scan Event for Clone
 * @param robot
 * @param scanned
 */
Robot.prototype.cloneScanned = function(robot, scanned) {

};

/**
 * Scan Event for Bot
 * @param robot
 * @param scanned
 */
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

/**
 * Bullet Hit Event for Clone
 * @param robot
 */
Robot.prototype.cloneBulletHit = function(robot) {

};

/**
 * Bullet Hit Event for Bot
 * @param robot
 */
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

/**
 * Robot Collision Event for Clone
 * @param robot
 */
Robot.prototype.cloneRobotCollision = function(robot) {

};

/**
 * Robot Collision Event for Bot
 * @param robot
 */
Robot.prototype.robotCollision = function(robot) {
    robot.back(30);
};

/**
 * Wall Collision Event for Clone
 * @param robot
 * @param bearing
 */
Robot.prototype.cloneWallCollision = function(robot, bearing) {

};

/**
 * Wall Collision Event for Bot
 * @param robot
 * @param bearing
 */
Robot.prototype.wallCollision = function(robot, bearing) {
    robot.back(50);
    robot.turn(130);
};