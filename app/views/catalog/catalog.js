"use strict";
var frameModule = require("ui/frame");
var stack;
var allButton;
var silverButton;
var goldButton;
var copperButton;
function onLoaded(args) {
    stack = args.object;
    silverButton = stack.getViewById("btn-silver");
    goldButton = stack.getViewById("btn-gold");
    allButton = stack.getViewById("btn-all");
    copperButton = stack.getViewById("btn-copper");
}
exports.onLoaded = onLoaded;
function goToCopper(args) {
    copperButton.animate({
        rotate: 360,
        duration: 500
    }).then(function () {
        frameModule.topmost().navigate({
            moduleName: "views/categories/copper",
            animated: true,
            transition: {
                name: "slide",
                duration: 300,
                curve: "easeIn"
            }
        });
    });
}
exports.goToCopper = goToCopper;
function goToSilver(args) {
    silverButton.animate({
        rotate: 360,
        duration: 500
    }).then(function () {
        frameModule.topmost().navigate({
            moduleName: "views/categories/silver",
            animated: true,
            transition: {
                name: "slide",
                duration: 300,
                curve: "easeIn"
            }
        });
    });
}
exports.goToSilver = goToSilver;
function goToGold(args) {
    goldButton.animate({
        rotate: 360,
        duration: 500
    }).then(function () {
        frameModule.topmost().navigate({
            moduleName: "views/categories/gold",
            animated: true,
            transition: {
                name: "slide",
                duration: 300,
                curve: "easeIn"
            }
        });
    });
}
exports.goToGold = goToGold;
function goToAll(args) {
    allButton.animate({
        rotate: 360,
        duration: 500
    }).then(function () {
        frameModule.topmost().navigate({
            moduleName: "views/categories/all-coins",
            animated: true,
            transition: {
                name: "slide",
                duration: 300,
                curve: "easeIn"
            }
        });
    });
}
exports.goToAll = goToAll;
//# sourceMappingURL=catalog.js.map