"use strict";
var frameModule = require("ui/frame");
var stack;
var allButton;
var silverButton;
var goldButton;
var copperButton;
var isGoldButtonTriggered;
function onLoaded(args) {
    stack = args.object;
    silverButton = stack.getViewById("btn-silver");
    goldButton = stack.getViewById("btn-gold");
    allButton = stack.getViewById("btn-all");
    copperButton = stack.getViewById("btn-copper");
    resetAllAnimations();
}
exports.onLoaded = onLoaded;
function resetAllAnimations() {
    silverButton.opacity = 1;
    silverButton.scaleX = 1;
    silverButton.scaleY = 1;
    goldButton.opacity = 1;
    goldButton.scaleX = 1;
    goldButton.scaleY = 1;
    console.log("isGOldTriggered : " + isGoldButtonTriggered);
    if (isGoldButtonTriggered) {
        goldButton.translateX = 0;
        goldButton.translateY = 0;
    }
    allButton.opacity = 1;
    allButton.scaleX = 1;
    allButton.scaleY = 1;
    copperButton.opacity = 1;
    copperButton.scaleX = 1;
    copperButton.scaleY = 1;
}
function goToCopper(args) {
    // copperButton.animate({
    //     scale: {x : 3, y: 3},
    //     opacity: 0,
    //     duration: 300
    // }).then(function () {    
    //     frameModule.topmost().navigate({
    //         moduleName: "views/categories/copper",
    //         animated: true,
    //         transition: {
    //             name: "slide",
    //             duration: 300,
    //             curve: "easeIn"
    //         }
    //     });
    // })
    // this button uses  CSS-animation (in main-page.css)
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
    silverButton.rotate = 0;
    silverButton.animate({
        rotate: 360,
        duration: 300
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
    isGoldButtonTriggered = true;
    silverButton.animate({
        opacity: 0,
        duration: 300
    });
    copperButton.animate({
        opacity: 0,
        duration: 300
    });
    allButton.animate({
        opacity: 0,
        duration: 300
    });
    goldButton.animate({
        scale: { x: 2.2, y: 2.2 },
        translate: { x: 100, y: -100 },
        opacity: 0.5,
        duration: 300
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
    allButton.rotate = 0;
    allButton.animate({
        rotate: 720,
        duration: 300
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