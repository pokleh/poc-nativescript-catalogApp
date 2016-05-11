import { Observable, EventData } from "data/observable";
import { ObservableArray } from "data/observable-array";
import { CoinViewModel } from "../../shared/coin-view-model";
import { Page } from "ui/page";
import { ListView, ItemEventData } from "ui/list-view";

import frameModule = require("ui/frame");

import { allCoinsViewModel } from "../../shared/full-catalog-view-model";

export function onLoaded(args:EventData) {
    var page = <Page>args.object;

    //var coinList = <ListView>page.getViewById("coins-list");
    //coinList.items = allCoinsViewModel;
    var copperCoins = new ObservableArray();
    
    for (var i = 0; i < allCoinsViewModel.length; i++) {
        if (allCoinsViewModel.getItem(i)["category"] === "Copper") {
            copperCoins.push(allCoinsViewModel.getItem(i));
        }
    }
    
    page.bindingContext = { "coins" : copperCoins };
    
}

export function listViewItemTap(args: ItemEventData) {
    // Navigate to the details page with context set to the data item for specified index
    frameModule.topmost().navigate({
        moduleName: "views/categories/coin-details-page",
        context: allCoinsViewModel.getItem(args.index)
    });
}

export function goBack(args:EventData) {
    frameModule.topmost().goBack();
}