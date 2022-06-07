import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { LoginComponent } from './views/login/login.component';
import { AddArticleComponent } from './views/add-article/add-article.component';
import { HomeComponent } from './views/home/home.component';
import { TermsComponent } from './views/terms/terms.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { FooterComponent } from './common/footer/footer.component';
import { DetailsComponent } from './views/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AddArticleComponent,
    HomeComponent,
    TermsComponent,
    PageNotFoundComponent,
    FooterComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
