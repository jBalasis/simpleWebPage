import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/homepage/home.component";
import {SvgComponent} from "./pages/svg/svg.component";
import {DataVisualizationComponent} from "./pages/data-visualization/data-visualization.component";
import {CreditsComponent} from "./pages/credits/credits.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'svg',
    component: SvgComponent,
  },
  {
    path: 'dataVis',
    component: DataVisualizationComponent,
  },
  {
    path: 'credits',
    component: CreditsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
