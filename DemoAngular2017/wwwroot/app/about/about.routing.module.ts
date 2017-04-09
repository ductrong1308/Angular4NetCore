import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';
import { HomePageComponent } from './home-page-component';

const routes: Routes = [
    { path: 'About/Landing', component: HomePageComponent, pathMatch: 'full' },
    //{ path: 'about/landing/home', pathMatch: 'full', component: HomePageComponent },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AboutRoutingModule { }
