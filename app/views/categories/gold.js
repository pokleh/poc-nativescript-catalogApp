"use strict";
var observable_array_1 = require("data/observable-array");
var frameModule = require("ui/frame");
var allCoinsViewModel = new observable_array_1.ObservableArray();
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
//# sourceMappingURL=gold.js.map