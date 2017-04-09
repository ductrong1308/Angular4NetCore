"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MenuItem = (function () {
    function MenuItem(caption, link) {
        this.caption = caption;
        this.link = link;
    }
    return MenuItem;
}());
var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
        this.menuItems = [
            { caption: 'Real', link: ['/real'] },
            { caption: 'Barca', link: ['/barca'] },
            { caption: 'Bayern', link: ['/bayern'] },
            { caption: 'Chelsea', link: ['/chelsea'] },
            { caption: 'Others', link: ['/others'] },
        ];
    };
    return NavComponent;
}());
NavComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'story-nav',
        templateUrl: './nav.component.html',
        styleUrls: ['./nav.component.css'],
    })
], NavComponent);
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map