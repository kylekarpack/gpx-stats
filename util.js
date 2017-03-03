/**
 * Created by Kyle Karpack on 12/9/2016.
 */
"use strict";
var Utils = (function () {
    function Utils() {
    }
    Utils.distance = function (lat1, lon1, lat2, lon2) {
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * this.CONST_P) / 2 +
            c(lat1 * this.CONST_P) * c(lat2 * this.CONST_P) *
                (1 - c((lon2 - lon1) * this.CONST_P)) / 2;
        return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
    };
    Utils.CONST_P = Math.PI / 180;
    return Utils;
}());
exports.__esModule = true;
exports["default"] = Utils;
//# sourceMappingURL=util.js.map