import { Component } from '@angular/core';
import { NavComponent } from '../../shared-UI/nav/nav.component';
import { FooterComponent } from '../../shared-UI/footer/footer.component';
import { TabsComponent } from '../../shared-UI/tabs/tabs.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, FooterComponent, TabsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
