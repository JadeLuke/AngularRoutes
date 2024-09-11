import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { LandingComponent } from './pages/landing/landing.component';
import { CompanyComponent } from './pages/about/company/company.component';

export const routes: Routes = [
{ path:"home",  component: HomeComponent, title: "Home"},
{ path:"gallery", component: GalleryComponent, title: "Gallery"},
{path:"about", component: AboutComponent, title: "About", children: [{path: "company", component: CompanyComponent}]},
{path:"contact", component: ContactComponent, title: "Contact"},
{path:"", component: LandingComponent, title: "Landing"},
{path:"**", component: ErrorComponent, title: "Error"}

];
