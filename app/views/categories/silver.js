"use strict";
var observable_array_1 = require("data/observable-array");
var coin_view_model_1 = require("../../shared/coin-view-model");
var frameModule = require("ui/frame");
var allCoinsViewModel = new observable_array_1.ObservableArray();
allCoinsViewModel.push(new coin_view_model_1.CoinViewModel("2 Leva", "1882", 10.0, 24, "Silver", "http://www.coinfactswiki.com/w/images/thumb/c/ce/Bulgaria_H3035-30177r.jpg/300px-Bulgaria_H3035-30177r.jpg", 2500000));
allCoinsViewModel.push(new coin_view_model_1.CoinViewModel("50 Sotinki", "1883", 2.5, 18, "Silver", null, 2400000));
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
//# sourceMappingURL=silver.js.map