/**
 * Bot Mode
 * @type {string}
 * @options {'dual', 'double'}
 *
 * Dual Mode enables use of clone methods on clone
 *
 * Double Mode uses Main bot methods on both bots
 */
Robot.prototype.mode = 'dual';

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

};