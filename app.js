/**
* Created by Kyle Karpack on 12/9/2016.
*/
"use strict";
var gpxParse = require("gpx-parse");
var util_1 = require("./util");
var fs = require("fs");
var stats = {
    totalElevation: 0,
    netElevation: 0,
    distance: 0,
    time: 0
};
fs.readdir("./tracks", function (err, files) {
    var filesToGo = files.length;
    files.forEach(function (fileName) {
        gpxParse.parseGpxFromFile("./tracks/" + fileName, function (err, data) {
            if (err) {
                throw err;
            }
            var waypoints = [];
            for (var _i = 0, _a = data.tracks[0].segments; _i < _a.length; _i++) {
                var segment = _a[_i];
                for (var _b = 0, segment_1 = segment; _b < segment_1.length; _b++) {
                    var waypoint = segment_1[_b];
                    waypoints.push(waypoint);
                }
            }
            var prev = waypoints[0];
            for (var _c = 0, waypoints_1 = waypoints; _c < waypoints_1.length; _c++) {
                var waypoint = waypoints_1[_c];
                if (waypoint.elevation - prev.elevation > 0) {
                    stats.totalElevation += waypoint.elevation - prev.elevation;
                }
                stats.distance += util_1["default"].distance(prev.lat, prev.lon, waypoint.lat, waypoint.lon);
                prev = waypoint;
            }
            var elevations = waypoints.map(function (el) { return el.elevation; });
            stats.netElevation += Math.max.apply(Math, elevations) -
                Math.min.apply(Math, waypoints.map(function (el) { return el.elevation; }));
            var times = waypoints.map(function (el) { return el.time; });
            stats.time += (times[times.length - 1] - times[0]) / 1000 / 60 / 60;
            filesToGo--;
            if (!filesToGo) {
                console.warn(stats);
            }
        });
    });
});
//# sourceMappingURL=app.js.map