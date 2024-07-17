import { Component } from '@angular/core';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'min-nav',
  templateUrl: './min-nav.component.html',
  styleUrl: './min-nav.component.css'
})
export class MinNavComponent {
  Myfacebook = faFacebook
  Mylinkedin = faLinkedin
  Myarrowdown = faArrowDown
  title = 'just trails'
}
