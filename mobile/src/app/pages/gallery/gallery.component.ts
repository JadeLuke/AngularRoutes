import { Component } from '@angular/core';
import { NavComponent } from '../../shared-UI/nav/nav.component';
import { FooterComponent } from '../../shared-UI/footer/footer.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
