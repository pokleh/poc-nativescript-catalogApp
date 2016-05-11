import { Observable, EventData } from "data/observable";
import { ObservableArray } from "data/observable-array";
import { CoinViewModel } from "../../shared/coin-view-model";
import { Page } from "ui/page";
import { ListView, ItemEventData } from "ui/list-view";

import frameModule = require("ui/frame");

var allCoinsViewModel = new ObservableArray();

allCoinsViewModel.push(new CoinViewModel("2 Stotinki", "1881", 2.0, 18, "Copper", "https://www.sixbid.com/images/auction_images/1186/1096532m.jpg", 1500000));
allCoinsViewModel.push(new CoinViewModel("5 Stotinki", "1881", 5.0, 23, "Copper", null, 5000000));
allCoinsViewModel.push(new CoinViewModel("10 Stotinki", "1881", 10.0, 27, "Copper", "http://coinquest.com/cgi-data/cq_ro/response_380/bulgaria_10_stotinki_1881.jpg", 10000000));

export function onLoaded(args:EventData) {
    var page = <Page>args.object;

    //var coinList = <ListView>page.getViewById("coins-list");
    //coinList.items = allCoinsViewModel;
    
    page.bindingContext = { "coins" : allCoinsViewModel };
    
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