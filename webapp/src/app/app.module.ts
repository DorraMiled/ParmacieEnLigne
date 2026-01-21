import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesComponent } from './components/manage/categories/categories-index/categories.component';
import { CategoryFormComponent } from './components/manage/categories/category-form/category-form.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrandsFormComponent } from './components/manage/brands/brands-form/brands-form.component';
import { BrandsIndexComponent } from './components/manage/brands/brands-index/brands-index.component';
import { ProductFormComponent } from './components/manage/products/product-form/product-form.component';
import { ProductIndexComponent } from './components/manage/products/product-index/product-index.component';
import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RegsiterComponent } from './components/logs/regsiter/regsiter.component';
import { LoginComponent } from './components/logs/login/login.component';
import { tokenHttpInterceptor } from './common/token-http-interceptor';
import { AdminDashbordComponent } from './components/manage/admin-dashbord/admin-dashbord.component';
import { ShoppingCardComponent } from './components/shopping/shopping-card/shopping-card.component';
import { CustomerOrdersComponent } from './components/customer-orders/customer-orders.component';
import { DatePipe } from '@angular/common';
import { OrdersComponent } from './components/manage/orders/orders.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { CustomerProfileComponent } from './components/profile/customer-profile/customer-profile.component';
// import { CarouselModule } from 'ngx-owl-carousel-o';




@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryFormComponent,
    HomeComponent,
    BrandsFormComponent,
    BrandsIndexComponent,
    ProductFormComponent,
    ProductIndexComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    RegsiterComponent,
    LoginComponent,
    AdminDashbordComponent,
    ShoppingCardComponent,
    CustomerOrdersComponent,
    OrdersComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductCardComponent,
    CustomerProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    // CarouselModule,
    BrowserAnimationsModule,
    DatePipe

  ],
  providers: [provideHttpClient(withInterceptors([tokenHttpInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
