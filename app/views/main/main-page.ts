import { EventData } from "data/observable";
import { Page } from "ui/page";

import frameModule = require("ui/frame");

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function onLoaded(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
}
