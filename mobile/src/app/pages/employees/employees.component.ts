import { Component } from '@angular/core';
import { NavComponent } from '../../shared-UI/nav/nav.component';
import { FooterComponent } from '../../shared-UI/footer/footer.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [NavComponent, FooterComponent, RouterLink, RouterLinkActive],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

}
