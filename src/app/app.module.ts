import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {NgOptimizedImage} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeModuleComponent} from './modules/home-module/home-module.component';
import {
  HomeMainSlideshowComponent
} from "./modules/home-module/components/home-main-slideshow/home-main-slideshow.component";
import {
  HomeFeaturedListComponent
} from './modules/home-module/components/home-featured-list/home-featured-list.component';
import {
  HomeCategorySlideshowComponent
} from "./modules/home-module/components/home-category-slideshow/home-category-slideshow.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeModuleComponent,
    HomeMainSlideshowComponent,
    HomeFeaturedListComponent,
    HomeCategorySlideshowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
