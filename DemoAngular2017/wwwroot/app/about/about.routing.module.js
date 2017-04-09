"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_not_found_component_1 = require("./page-not-found.component");
var home_page_component_1 = require("./home-page-component");
var routes = [
    { path: 'About/Landing', component: home_page_component_1.HomePageComponent, pathMatch: 'full' },
    //{ path: 'about/landing/home', pathMatch: 'full', component: HomePageComponent },
    { path: '**', pathMatch: 'full', component: page_not_found_component_1.PageNotFoundComponent },
];
var AboutRoutingModule = (function () {
    function AboutRoutingModule() {
    }
    return AboutRoutingModule;
}());
AboutRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })],
        exports: [router_1.RouterModule],
    })
], AboutRoutingModule);
exports.AboutRoutingModule = AboutRoutingModule;
//# sourceMappingURL=about.routing.module.js.map