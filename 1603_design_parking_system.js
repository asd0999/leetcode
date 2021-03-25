/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.bigLeft = big;
    this.mediumLeft = medium;
    this.smallLeft = small;
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    let parking;
    if (carType === 1) {
        this.bigLeft--;
        parking = this.bigLeft;
    } else if (carType === 2) {
        this.mediumLeft--;
        parking = this.mediumLeft;
    } else if (carType === 3) {
        this.smallLeft--;
        parking = this.smallLeft;
    }

    return parking >= 0 ? true : false;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */