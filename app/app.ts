import application = require("application");
import fontModule = require("ui/styling/font");

if (application.ios) {
    fontModule.ios.registerFont("Sansation-Light.ttf");
}

application.start({ moduleName: "views/main/main-page" });
