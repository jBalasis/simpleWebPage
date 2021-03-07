import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/homepage/home.component';
import { SvgComponent } from "./pages/svg/svg.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { DataVisualizationComponent } from "./pages/data-visualization/data-visualization.component";
import { CreditsComponent } from "./pages/credits/credits.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SvgComponent,
    DataVisualizationComponent,
    CreditsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
