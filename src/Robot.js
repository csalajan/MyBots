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
