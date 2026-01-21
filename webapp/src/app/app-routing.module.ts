import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/manage/categories/categories-index/categories.component';
import { CategoryFormComponent } from './components/manage/categories/category-form/category-form.component';
import { BrandsIndexComponent } from './components/manage/brands/brands-index/brands-index.component';
import { BrandsFormComponent } from './components/manage/brands/brands-form/brands-form.component';
import { ProductIndexComponent } from './components/manage/products/product-index/product-index.component';
import { ProductFormComponent } from './components/manage/products/product-form/product-form.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { RegsiterComponent } from './components/logs/regsiter/regsiter.component';
import { LoginComponent } from './components/logs/login/login.component';
import { authGuard } from './common/guards/auth.guard';
import { AdminDashbordComponent } from './components/manage/admin-dashbord/admin-dashbord.component';
import { adminGuard } from './common/guards/admin.guard';
import { CustomerProfileComponent } from './components/profile/customer-profile/customer-profile.component';
import { ShoppingCardComponent } from './components/shopping/shopping-card/shopping-card.component';
import { CustomerOrdersComponent } from './components/customer-orders/customer-orders.component';
import { OrdersComponent } from './components/manage/orders/orders.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: "admin",
    component: AdminDashbordComponent,
    canActivate: [adminGuard]
  },
  {
    path: "admin/categories",
    component: CategoriesComponent,
    canActivate: [adminGuard]

  },
  {
    path: "admin/categories/add",
    component: CategoryFormComponent,
    canActivate: [adminGuard]

  },
  {
    path: "admin/categories/:id",
    component: CategoryFormComponent,
    canActivate: [adminGuard]

  },
  /**
   * Brands
   * 
   */
  {
    path: "admin/brands",
    component: BrandsIndexComponent,
    canActivate: [adminGuard]

  },
  {
    path: "admin/brands/add",
    component: BrandsFormComponent,
    canActivate: [adminGuard]

  },
  {
    path: "admin/brands/:id",
    component: BrandsFormComponent,
    canActivate: [adminGuard]

  },
  /**
   * Products
   */
  {
    path: "admin/products",
    component: ProductIndexComponent,
    canActivate: [adminGuard]

  },
  {
    path: "admin/products/add",
    component: ProductFormComponent,
    canActivate: [adminGuard]

  },
  {
    path: "admin/products/:id",
    component: ProductFormComponent,
    canActivate: [adminGuard]

  },
  /**product det and list
   * 
   */

  {
    path: "product",
    component: ProductListComponent,
    canActivate: [authGuard]
  },
  {
    path: "product/:id",
    component: ProductDetailComponent,
    canActivate: [authGuard]
  },
  /**
   * Register
   * 
   */
  {
    path: "register",
    component: RegsiterComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  /**
   * Profile
   */
  {
    path: "profile",
    component: CustomerProfileComponent,
    canActivate: [authGuard]
  },
  /**
   * shopping cart
   */
  {
    path: "cart",
    component: ShoppingCardComponent,
    canActivate: [authGuard]
  },
  /**
   * Customer orders 
   */
  {
    path: "orders",
    component: CustomerOrdersComponent,
    canActivate: [authGuard]
  },
  /**
   * Admin oders
   */
  {
    path: "admin/orders",
    component: OrdersComponent,
    canActivate: [adminGuard]

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
