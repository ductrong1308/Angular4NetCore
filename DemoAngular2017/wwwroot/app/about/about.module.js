"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var about_routing_module_1 = require("./about.routing.module");
var common_1 = require("@angular/common");
var shared_module_1 = require("../shared/shared.module");
var about_component_1 = require("./about.component");
var page_not_found_component_1 = require("./page-not-found.component");
var home_page_component_1 = require("./home-page-component");
var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, about_routing_module_1.AboutRoutingModule, shared_module_1.SharedModule],
        declarations: [about_component_1.AboutComponent, page_not_found_component_1.PageNotFoundComponent, home_page_component_1.HomePageComponent],
        providers: [platform_browser_1.Title, { provide: common_1.APP_BASE_HREF, useValue: '/' }],
        bootstrap: [about_component_1.AboutComponent]
    })
], AboutModule);
exports.AboutModule = AboutModule;
//# sourceMappingURL=about.module.js.map