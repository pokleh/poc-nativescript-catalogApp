"use strict";
var observable_1 = require("data/observable");
var viewModel = new observable_1.Observable({
    newData: "",
    data: ""
});
function onLoaded(args) {
    var stack = args.object;
    stack.bindingContext = viewModel;
}
exports.onLoaded = onLoaded;
function onTap(args) {
    var newData = viewModel.get("newData");
    var renderedData = newData.replace(/\s/g, "+");
    var searchQuery = 'https://www.google.com/search?q=' + renderedData;
    console.log(searchQuery);
    viewModel.set("data", searchQuery);
}
exports.onTap = onTap;
//# sourceMappingURL=search.js.map