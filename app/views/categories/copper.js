"use strict";
var observable_array_1 = require("data/observable-array");
var coin_view_model_1 = require("../../shared/coin-view-model");
var frameModule = require("ui/frame");
var allCoinsViewModel = new observable_array_1.ObservableArray();
allCoinsViewModel.push(new coin_view_model_1.CoinViewModel("2 Stotinki", "1881", 2.0, 18, "Copper", "https://www.sixbid.com/images/auction_images/1186/1096532m.jpg", 1500000));
allCoinsViewModel.push(new coin_view_model_1.CoinViewModel("5 Stotinki", "1881", 5.0, 23, "Copper", null, 5000000));
allCoinsViewModel.push(new coin_view_model_1.CoinViewModel("10 Stotinki", "1881", 10.0, 27, "Copper", "http://coinquest.com/cgi-data/cq_ro/response_380/bulgaria_10_stotinki_1881.jpg", 10000000));
function onLoaded(args) {
    var page = args.object;
    //var coinList = <ListView>page.getViewById("coins-list");
    //coinList.items = allCoinsViewModel;
    page.bindingContext = { "coins": allCoinsViewModel };
}
exports.onLoaded = onLoaded;
function listViewItemTap(args) {
    // Navigate to the details page with context set to the data item for specified index
    frameModule.topmost().navigate({
        moduleName: "views/categories/coin-details-page",
        context: allCoinsViewModel.getItem(args.index)
    });
}
exports.listViewItemTap = listViewItemTap;
function goBack(args) {
    frameModule.topmost().goBack();
}
exports.goBack = goBack;
//# sourceMappingURL=copper.js.map