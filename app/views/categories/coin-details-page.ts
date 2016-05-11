import {Page} from "ui/page";
import {EventData} from "data/observable";

// Event handler for Page "navigatedTo" event attached in details-page.xml
export function pageNavigatedTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;

    page.bindingContext = page.navigationContext;
}
