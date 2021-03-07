import { Component } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simpleWebPage';
  toggled = false;
  email = faEnvelope;
  git = faGithub;
  fb = faFacebook;
  twitter = faTwitter;
}
