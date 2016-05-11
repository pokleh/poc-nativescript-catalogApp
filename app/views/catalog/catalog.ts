import { EventData } from "data/observable";
import frameModule = require("ui/frame");

export function goToCopper(args:EventData) {
    console.log("IN COOPER")
    
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

export function goToSilver(args:EventData) {
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

export function goToGold(args:EventData) {
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

export function goToAll(args:EventData) {
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