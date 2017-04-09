import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'real', pathMatch: 'full' },
    { path: 'real', loadChildren: 'app/home/dashboard/dashboard.module#DashboardModule' },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
