import { EventData } from "data/observable";
import frameModule = require("ui/frame");
import { StackLayout } from "ui/layouts/stack-layout";

var stack;

var allButton;
var silverButton; 
var goldButton;
var copperButton;

export function onLoaded(args:EventData) {
    stack = <StackLayout>args.object;
    
    silverButton = stack.getViewById("btn-silver");
    goldButton = stack.getViewById("btn-gold");
    allButton = stack.getViewById("btn-all");
    copperButton = stack.getViewById("btn-copper");
}

export function goToCopper(args:EventData) {
    
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
    })

}

export function goToSilver(args:EventData) {
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
    })
}

export function goToGold(args:EventData) {
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
    }) 
}

export function goToAll(args:EventData) {
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
    })
}