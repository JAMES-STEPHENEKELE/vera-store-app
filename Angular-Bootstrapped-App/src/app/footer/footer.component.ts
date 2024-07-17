import { Component } from '@angular/core';
import { faFacebook, faLinkedin,faYoutube, faTwitter, faGit, faGithub,faCss3,faHtml5,faPython, } from '@fortawesome/free-brands-svg-icons';
import { faTasks } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  Myfacebook = faFacebook
  Mylinkedin = faLinkedin
  Myyoutube = faYoutube
  Mytwitter = faTwitter
  Mygit = faGit
  Mygithub = faGithub
  Mycss = faCss3
  MyHTML = faHtml5
  Mypython = faPython

}
