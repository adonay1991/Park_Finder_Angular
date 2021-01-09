import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CouponsComponent } from './coupons/coupons.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './@core/components/map/map.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';

/**
 * Rutas para el modulo router
 */

const rutas: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'Home',
  },
  {
    path: 'Home',
    component: MapComponent,
  },

  {
    path: 'Coupons',
    component: CouponsComponent,
  },
  {
    path: 'Contact',
    component: ContactComponent,
  },
  {
    path: 'Profile',
    component: ProfileComponent,
  },
  {
    path: 'Sign_Up',
    component: SignUpComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CouponsComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    MapComponent,
    ContactComponent,
    SignUpComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
