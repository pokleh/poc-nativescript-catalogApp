import { Observable, EventData } from "data/observable";
import { Page } from "ui/page";
import { ListView, ItemEventData } from "ui/list-view";

import frameModule = require("ui/frame");

import { ObservableArray } from "data/observable-array";
import { CoinViewModel } from "../../shared/coin-view-model";

import { allCoinsViewModel } from "../../shared/full-catalog-view-model";

import colorModule = require("color");
import application = require("application");

var page;

export function onLoaded(args:EventData) {
    page = <Page>args.object;

    page.bindingContext = { "coins" : allCoinsViewModel };
    
    if (application.ios) {
        // native code to remove the margin for ListViewItem separator
        var listView = <ListView>page.getViewById("coins-list");
        var tableView = <UITableView>listView.ios; 
        for (var i = 0; i < allCoinsViewModel.length; i++) {
            var cellIndexPath = NSIndexPath.indexPathForItemInSection(i, 0);
            var cell = <UITableViewCell>tableView.cellForRowAtIndexPath(cellIndexPath);
            if (cell !== null) {
                cell.preservesSuperviewLayoutMargins = false;
                cell.separatorInset = UIEdgeInsetsZero;
                cell.layoutMargins = UIEdgeInsetsZero;
            }
        } 
    }
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