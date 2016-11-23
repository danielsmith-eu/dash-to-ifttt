var config = require("./config")
var dash_button = require("node-dash-button")
var IFTTT = require("node-ifttt-maker")

var ifttt = new IFTTT(config.iftttMakerKey)
var dash = dash_button(Object.keys(config.devices))
dash.on("detected", function (dash_id) {
    console.log("Saw button " + dash_id + ", sending event: " + config.devices[dash_id].eventid)
    ifttt.request({event: config.devices[dash_id].eventid, method: "GET"})
})
console.log("Listening for button presses on " + Object.keys(config.devices).length + " device(s)...")
