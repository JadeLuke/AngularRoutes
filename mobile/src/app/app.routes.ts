import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { LandingComponent } from './pages/landing/landing.component';
import { CompanyComponent } from './pages/company/company.component';
import { EmployeesComponent } from './pages/employees/employees.component';

export const routes: Routes = [
{path:"home",  component: HomeComponent, title: "Home"},
{path:"gallery", component: GalleryComponent, title: "Gallery"},
{path:"about", component: AboutComponent, title: "About"},
{path: "about", children: [
{path: "company", title: "About | Company", component: CompanyComponent},
{path: "employees", title: "About | Employees", component: EmployeesComponent}]},
{path:"contact", component: ContactComponent, title: "Contact"},
{path:"", component: LandingComponent, title: "Landing"},
{path: "**", redirectTo: "home", pathMatch: "full"},
{path:"**", component: ErrorComponent, title: "Error"}
];
