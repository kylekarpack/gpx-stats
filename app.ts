 /**
 * Created by Kyle Karpack on 12/9/2016.
 */


import * as gpxParse from "gpx-parse";
 import Utils from "./util";
 import fs = require("fs");


 let stats = {
     totalElevation: 0,
     netElevation: 0,
     distance: 0,
     time: 0
 };


 fs.readdir("./tracks", (err, files) => {

     var filesToGo = files.length;

     files.forEach(fileName => {
         gpxParse.parseGpxFromFile(`./tracks/${fileName}`, (err, data) => {

             if (err) {
                 throw err;
             }


             let waypoints = [];


             for (let segment of data.tracks[0].segments) {
                 for (let waypoint of segment) {
                     waypoints.push(waypoint);
                 }
             }


             let prev: any = waypoints[0];
             for (let waypoint of waypoints) {
                 if (waypoint.elevation - prev.elevation > 0) {
                     stats.totalElevation += waypoint.elevation - prev.elevation;
                 }

                 stats.distance += Utils.distance(prev.lat, prev.lon, waypoint.lat, waypoint.lon);

                 prev = waypoint;
             }


             const elevations = waypoints.map(el => el.elevation);
             stats.netElevation += Math.max(...elevations) -
                 Math.min(...waypoints.map(el => el.elevation));


             const times = waypoints.map(el => el.time);
             stats.time +=  (times[times.length - 1] - times[0]) / 1000 / 60 / 60;


             filesToGo--;

             if (!filesToGo) {
                 console.warn(stats);
             }


         });
     })
 });