import { Component } from '@angular/core';
import { faTasks } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  Mytasks = faTasks
}
