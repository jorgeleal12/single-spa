import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [{
  path: 'child1',
  children: [
    // { path: '**', component: EmptyRouteComponent },
    { path: "page1", loadChildren: () => import('./pages/page1/page1.module').then(m => m.Page1Module) },
    { path: "page2", loadChildren: () => import('./pages/page2/page2.module').then(m => m.Page2Module) },
  ]
},
{
  path: '**',
  component: EmptyRouteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: 'child1' },
  ],
})
export class AppRoutingModule { }
