"use strict";
var observable_array_1 = require("data/observable-array");
var frameModule = require("ui/frame");
var full_catalog_view_model_1 = require("../../shared/full-catalog-view-model");
function onLoaded(args) {
    var page = args.object;
    //var coinList = <ListView>page.getViewById("coins-list");
    //coinList.items = allCoinsViewModel;
    var copperCoins = new observable_array_1.ObservableArray();
    for (var i = 0; i < full_catalog_view_model_1.allCoinsViewModel.length; i++) {
        if (full_catalog_view_model_1.allCoinsViewModel.getItem(i)["category"] === "Copper") {
            copperCoins.push(full_catalog_view_model_1.allCoinsViewModel.getItem(i));
        }
    }
    page.bindingContext = { "coins": copperCoins };
}
exports.onLoaded = onLoaded;
function listViewItemTap(args) {
    // Navigate to the details page with context set to the data item for specified index
    frameModule.topmost().navigate({
        moduleName: "views/categories/coin-details-page",
        context: full_catalog_view_model_1.allCoinsViewModel.getItem(args.index)
    });
}
exports.listViewItemTap = listViewItemTap;
function goBack(args) {
    frameModule.topmost().goBack();
}
exports.goBack = goBack;
//# sourceMappingURL=copper.js.map