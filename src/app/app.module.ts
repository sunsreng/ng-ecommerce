import * as Raven from 'raven-js';
// import * as _ from 'underscore';
// import 'underscore';
import { ErrorsHandler } from './errors-handler';
import { ErrorHandler, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// tslint:disable-next-line:max-line-length
import { MdButtonModule, MdRadioModule, MdExpansionModule, MatMenuModule, MatSelectModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatTabsModule, MatIconModule, MatDialogModule, MatSidenavModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AppComponent } from './app.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MdNavbarComponent } from './md-navbar/md-navbar.component';
import { MdToolbarComponent } from './md-toolbar/md-toolbar.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsComponent } from './products/products.component';
import { VehicleService } from './services/vehicle.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserService } from './user.service';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import {ToastyModule} from 'ng2-toasty';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { DataTableModule } from 'angular-4-data-table';

Raven.config('https://5a0b52eacbdd4d86b19ef6909f8d9359@sentry.io/226172').install();

@NgModule({
  declarations: [
    AppComponent,
    MdNavbarComponent,
    MdToolbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    VehicleFormComponent,
    VehicleListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MdButtonModule,
    MdRadioModule,
    MdExpansionModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatSidenavModule,
    MatInputModule,
    MatCheckboxModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    DataTableModule,
    ToastyModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },

      { path: 'vehicles/new', component: VehicleFormComponent },
      { path: 'vehicles/:id', component: VehicleFormComponent },
      { path: 'vehicles', component: VehicleListComponent },

      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
      { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService] },

      { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },

      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [
    { provide: ErrorHandler, useClass: ErrorsHandler},
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,
    UserService,
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
