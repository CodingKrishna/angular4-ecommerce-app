import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppHeader } from './header/header.component';
import { Footer } from './footer/footer.component';
import { ProductService } from './productservice/productserice';
import { LayoutComponent } from './layout/layout.component';

import { ProudctList } from './productlist/productlist.component';
import { AddProudct } from './addproduct/addproduct.component';
import { EditProudct } from './editproduct/editproduct.component';
import { SearchComponent } from './search/search.component';
import { SharedService } from './sharedservice/shared.service';

const appRoutesConfig: Routes = [
  { path: 'productlist', component: ProudctList },
  { path: 'addproduct',component: AddProudct },
  { path: 'editproduct/:id',component: EditProudct },
];

@NgModule({
  declarations: [
    AppComponent, LayoutComponent, AppHeader, Footer, ProudctList, SearchComponent, AddProudct,EditProudct
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,HttpModule, HttpClientModule, RouterModule.forRoot(appRoutesConfig)
  ],
  providers: [ProductService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
