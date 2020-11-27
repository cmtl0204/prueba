import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from './shared/guards/auth.guard';
import {AppMainComponent} from './layout/app.main.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '', component: AppMainComponent,
        children: [
          {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
          {
            path: 'dashboard',
            loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
            canActivate: [AuthGuard]
          }
        ]
      },
      {path: '**', redirectTo: '/dashboard'},
    ], {scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
