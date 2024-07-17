import { Component } from '@angular/core';
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'nav-top',
  templateUrl: './nav-top.component.html',
  styleUrl: './nav-top.component.css'
})
export class NavTopComponent {
  MyLinkedin = faLinkedin
  MyFacebook = faFacebook
  MyArrow = faArrowDown
}