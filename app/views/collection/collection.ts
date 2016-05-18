import { Observable, EventData } from "data/observable";
import { StackLayout } from "ui/layouts/stack-layout";
import { Label } from "ui/label";
 
import application = require("application");

export function onLoaded(args: EventData) {
    
    console.log("HEREEEE")
    
    var stack = <StackLayout>args.object;
    
    var myLabel = <Label>stack.getViewById("lb-text");
    
    labelLineHeight(myLabel);
}

function labelLineHeight(nsLabel) {
    console.log("HERE");
    if(application.ios){
        var label= nsLabel.ios;
        console.log(label);
        var attributedString;

        if(label.atributedText){
            attributedString = label.atributedText;
        }
        else{
            attributedString = NSMutableAttributedString.alloc().initWithString(label.text);
        }
        var paragraphStyle = NSMutableParagraphStyle.alloc().init();
        paragraphStyle.lineSpacing = 55;
        var range: NSRange = { location: 0, length: label.text.length };
        attributedString.addAttributeValueRange(NSParagraphStyleAttributeName, paragraphStyle, range);
        label.attributedText = attributedString;
    }
    if(application.android){
        var label = nsLabel.android;
        console.log(label);
        //Default spacing is 20% of text size
        //setLineSpacing(add,multiplyby);
        label.setLineSpacing(12, 1);
    }   
}