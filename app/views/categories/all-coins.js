"use strict";
var frameModule = require("ui/frame");
var full_catalog_view_model_1 = require("../../shared/full-catalog-view-model");
var application = require("application");
var page;
function onLoaded(args) {
    page = args.object;
    page.bindingContext = { "coins": full_catalog_view_model_1.allCoinsViewModel };
    if (application.ios) {
        // native code to remove the margin for ListViewItem separator
        var listView = page.getViewById("coins-list");
        var tableView = listView.ios;
        for (var i = 0; i < full_catalog_view_model_1.allCoinsViewModel.length; i++) {
            var cellIndexPath = NSIndexPath.indexPathForItemInSection(i, 0);
            var cell = tableView.cellForRowAtIndexPath(cellIndexPath);
            if (cell !== null) {
                cell.preservesSuperviewLayoutMargins = false;
                cell.separatorInset = UIEdgeInsetsZero;
                cell.layoutMargins = UIEdgeInsetsZero;
            }
        }
    }
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