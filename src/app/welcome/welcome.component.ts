import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      {
          label: 'Home',
          link: './welcome',
          index: 0
      }, {
          label: 'Product',
          link: './products',
          index: 1
      }, {
          label: 'Checkout',
          link: './checkout',
          index: 2
      }, 
      {
        label: 'Sign out',
        link: './welcome',
        index: 3
    },
  ];

   }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
  }

  navigate(url:String) {
    this.router.navigate([url]);
  }

}
