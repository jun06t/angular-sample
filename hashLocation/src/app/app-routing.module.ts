import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopComponent } from './top/top.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: TopComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
