var Robot = function(robot) {
    if (this.cloneOnStart) {
        robot.clone();
    }
};

Robot.prototype.onIdle = function(ev) {
    var robot = ev.robot;
    if (this.mode === 'dual') {
        if (robot.parentId !== null) {
            this.cloneIdle(robot);
        } else {
            this.idleEvent(robot);
        }
    } else {
        this.idleEvent(robot);
    }
};

Robot.prototype.onScannedRobot = function(ev) {
    var robot = ev.robot;
    var scanned = ev.scannedRobot;
    if (this.mode === 'dual') {
        if (robot.parentId !== null) {
            this.cloneScanned(robot, scanned);
        } else {
            this.scannedEvent(robot, scanned);
        }
    } else {
        this.scannedEvent(robot, scanned);
    }
};

Robot.prototype.onHitByBullet = function(ev) {
    var robot = ev.robot;
    if (this.mode === 'dual') {
        if (robot.parentId !== null) {
            this.cloneBulletHit(robot);
        } else {
            this.bulletHit(robot);
        }
    } else {
        this.bulletHit(robot);
    }
};

Robot.prototype.onRobotCollision = function(ev) {
    var robot = ev.robot;
    if (this.mode === 'dual') {
        if (robot.parentId !== null) {
            this.cloneRobotCollision(robot);
        } else {
            this.robotCollision(robot);
        }
    } else {
        this.robotCollision(robot);
    }
};

Robot.prototype.onWallCollision = function(ev) {
    var robot = ev.robot;
    if (this.mode === 'dual') {
        if (robot.parentId !== null) {
            this.cloneWallCollision(robot, ev.bearing);
        } else {
            this.wallCollision(robot, ev.bearing);
        }
    } else {
        this.wallCollision(robot, ev.bearing);
    }
};

Robot.prototype.isNotClone = function(robot, scanned) {
    return scanned.id !== robot.parentId && scanned.parentId !== robot.id
};

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