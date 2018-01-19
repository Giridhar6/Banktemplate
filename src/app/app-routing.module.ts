import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsComponent } from './components/charts/ngx-charts/ngx-charts.component';


const routes: Routes = [
  // { path: '', redirectTo: '/fsuaccount', pathMatch: 'full' },
  {
    path: '',
    component: NgxChartsComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
