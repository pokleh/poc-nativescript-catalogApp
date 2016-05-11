"use strict";
var application = require("application");
var fontModule = require("ui/styling/font");
if (application.ios) {
    fontModule.ios.registerFont("Sansation-Light.ttf");
}
application.start({ moduleName: "views/main/main-page" });
//# sourceMappingURL=app.js.map