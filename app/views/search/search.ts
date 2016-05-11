import { Observable, EventData } from "data/observable";
import { StackLayout } from "ui/layouts/stack-layout";

var viewModel = new Observable({
    newData: "2 Leva 1894",
    data: "https://www.google.com/search?q=1+Lev+1881"
});

export function onLoaded(args: EventData) {
    var stack = <StackLayout>args.object;
    
    stack.bindingContext = viewModel;
}

export function onTap(args:EventData) {
        
    var newData = viewModel.get("newData");
    
    var renderedData = newData.replace(/\s/g, "+");
    var searchQuery = 'https://www.google.com/search?q=' + renderedData;
    console.log(searchQuery);
    
    viewModel.set("data", searchQuery);
}