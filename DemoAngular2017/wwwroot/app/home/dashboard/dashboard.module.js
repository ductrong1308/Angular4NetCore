"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var dashboard_button_component_1 = require("./dashboard-button/dashboard-button.component");
var dashboard_routing_module_1 = require("./dashboard-routing.module");
var shared_module_1 = require("../../shared/shared.module");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [dashboard_routing_module_1.DashboardRoutingModule, shared_module_1.SharedModule],
        declarations: [dashboard_button_component_1.DashboardButtonComponent, dashboard_routing_module_1.routedComponents]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/ 
//# sourceMappingURL=dashboard.module.js.map