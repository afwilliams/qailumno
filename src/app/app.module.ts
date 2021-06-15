import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {NewsComponent} from './pages/news/news.component';
import {AppStoreModule} from './redux/app-store.module';
import {NewsService} from './services/news.service';
import {RegisterComponent} from './pages/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NewsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppStoreModule,
    ReactiveFormsModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]

})
export class AppModule {
}
