import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { APP_BASE_HREF, Location } from '@angular/common';

import { SharedModule } from '../shared/shared.module'

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
    imports: [BrowserModule, AppRoutingModule, SharedModule],
    declarations: [AppComponent, PageNotFoundComponent],
    providers: [Title, { provide: APP_BASE_HREF, useValue: '/' }],
    bootstrap: [AppComponent]
})
export class AppModule { }
