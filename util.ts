export default class Utils {

    constructor() { }

    static CONST_P = Math.PI / 180;

    // Get distance between two points
    static getDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * this.CONST_P)/2 +
            c(lat1 * this.CONST_P) * c(lat2 * this.CONST_P) *
            (1 - c((lon2 - lon1) * this.CONST_P))/2;

        return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
    }
}