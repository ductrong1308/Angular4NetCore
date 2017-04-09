import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AboutRoutingModule } from './about.routing.module';
import { APP_BASE_HREF, Location } from '@angular/common';

import { SharedModule } from '../shared/shared.module'

import { AboutComponent } from './about.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HomePageComponent } from './home-page-component';

@NgModule({
    imports: [BrowserModule, AboutRoutingModule, SharedModule],
    declarations: [AboutComponent, PageNotFoundComponent, HomePageComponent],
    providers: [Title, { provide: APP_BASE_HREF, useValue: '/' }],
    bootstrap: [AboutComponent]
})
export class AboutModule { }
