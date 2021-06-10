/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
class ParkingSystem {
    constructor(big, medium, small) {
        this.big = big,
        this.medium = medium,
        this.small = small
    }
    
    addCar(carType) {
        if (carType === 1 && this.big) {
            this.big--
            return true;
        }
        if (carType === 2 && this.medium) {
            this.medium--
            return true;
        }
        if (carType === 3 && this.small) {
            this.small--
            return true;
        }
        
        return false;
    }
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
// ParkingSystem.prototype.addCar = function(carType) {
    
// };

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */