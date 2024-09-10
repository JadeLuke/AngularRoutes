import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
{ path:"",  component: HomeComponent},
{ path:"gallery", component: GalleryComponent},
{path:"about", component: AboutComponent},
{path:"contact", component: ContactComponent},
{path:"**", component: ErrorComponent}

];
