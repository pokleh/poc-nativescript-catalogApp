"use strict";
var frameModule = require("ui/frame");
var full_catalog_view_model_1 = require("../../shared/full-catalog-view-model");
function onLoaded(args) {
    var page = args.object;
    page.bindingContext = { "coins": full_catalog_view_model_1.allCoinsViewModel };
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
//# sourceMappingURL=all-coins.js.map