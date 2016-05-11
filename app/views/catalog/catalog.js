"use strict";
var frameModule = require("ui/frame");
function goToCopper(args) {
    console.log("IN COOPER");
    frameModule.topmost().navigate({
        moduleName: "views/categories/copper",
        animated: true,
        transition: {
            name: "slide",
            duration: 300,
            curve: "easeIn"
        }
    });
}
exports.goToCopper = goToCopper;
function goToSilver(args) {
    frameModule.topmost().navigate({
        moduleName: "views/categories/silver",
        animated: true,
        transition: {
            name: "slide",
            duration: 300,
            curve: "easeIn"
        }
    });
}
exports.goToSilver = goToSilver;
function goToGold(args) {
    frameModule.topmost().navigate({
        moduleName: "views/categories/gold",
        animated: true,
        transition: {
            name: "slide",
            duration: 300,
            curve: "easeIn"
        }
    });
}
exports.goToGold = goToGold;
function goToAll(args) {
    frameModule.topmost().navigate({
        moduleName: "views/categories/all-coins",
        animated: true,
        transition: {
            name: "slide",
            duration: 300,
            curve: "easeIn"
        }
    });
}
exports.goToAll = goToAll;
//# sourceMappingURL=catalog.js.map