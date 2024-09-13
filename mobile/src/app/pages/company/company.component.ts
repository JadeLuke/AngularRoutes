import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavComponent } from '../../shared-UI/nav/nav.component';
import { FooterComponent } from '../../shared-UI/footer/footer.component';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NavComponent, FooterComponent],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {

}
