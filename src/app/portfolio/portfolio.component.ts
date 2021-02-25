import { Component, OnInit } from '@angular/core';
import { faLinkedinIn, faGithub, faStackOverflow, faFacebookF, faHtml5, faCss3Alt, faJsSquare, faAngular, faReact, faNodeJs, faSass, faLess, faGulp, faGrunt, faNpm, faJenkins, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faTrophy, faCheckCircle, faLocationArrow, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faStackOverflow = faStackOverflow;
  faFacebook = faFacebookF;
  faHtml5 = faHtml5;
  faCss3Alt = faCss3Alt;
  faJsSquare = faJsSquare;
  faAngular = faAngular;
  faReact = faReact;
  faNodeJs = faNodeJs;
  faSass = faSass;
  faLess = faLess;
  faGulp = faGulp;
  faGrunt = faGrunt;
  faNpm = faNpm;
  faJenkins = faJenkins;
  faBootstrap = faBootstrap;
  faTrophy = faTrophy;
  faCheckCircle = faCheckCircle;
  faLocationArrow = faLocationArrow;
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
