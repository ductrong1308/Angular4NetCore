"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var about_module_1 = require("./about.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(about_module_1.AboutModule)
    .then(function () { return console.log('About app bootstraped'); })
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map