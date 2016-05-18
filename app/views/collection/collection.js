"use strict";
var application = require("application");
function onLoaded(args) {
    console.log("HEREEEE");
    var stack = args.object;
    var myLabel = stack.getViewById("lb-text");
    labelLineHeight(myLabel);
}
exports.onLoaded = onLoaded;
function labelLineHeight(nsLabel) {
    console.log("HERE");
    if (application.ios) {
        var label = nsLabel.ios;
        console.log(label);
        var attributedString;
        if (label.atributedText) {
            attributedString = label.atributedText;
        }
        else {
            attributedString = NSMutableAttributedString.alloc().initWithString(label.text);
        }
        var paragraphStyle = NSMutableParagraphStyle.alloc().init();
        paragraphStyle.lineSpacing = 55;
        var range = { location: 0, length: label.text.length };
        attributedString.addAttributeValueRange(NSParagraphStyleAttributeName, paragraphStyle, range);
        label.attributedText = attributedString;
    }
    if (application.android) {
        var label = nsLabel.android;
        console.log(label);
        //Default spacing is 20% of text size
        //setLineSpacing(add,multiplyby);
        label.setLineSpacing(12, 1);
    }
}
//# sourceMappingURL=collection.js.map