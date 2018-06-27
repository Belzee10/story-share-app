import { CategoryService } from './backend/category/category.service';
// Modules
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BackendModule } from "./backend/backend.module";
import { FrontendModule } from "./frontend/frontend.module";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent    
  ],
  imports: [    
    BrowserModule,
    BackendModule,
    FrontendModule,
    AppRoutingModule,
    HttpClientModule           
  ],  
  providers: [
    Title,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
