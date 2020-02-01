import { Router } from '@angular/router';
import { PopularDomainsService } from './popular-domains.service';
import { Component, OnInit } from '@angular/core';

export interface PopularDomains {
  _id: string;
  popularity: string;
}

@Component({
  selector: 'app-popular-domains',
  templateUrl: './popular-domains.component.html',
  styleUrls: ['./popular-domains.component.css']
})
export class PopularDomainsComponent implements OnInit {
  dataSource: PopularDomains[];
  displayedColumns: string[] = ['domain', 'popularity'];

  constructor(private service: PopularDomainsService, private router: Router) { }

  ngOnInit() {
    this.findPopularDomains();
  }

  findPopularDomains() {
    this.service.findPopularDomains().then((result) => {
      console.log(result);
      this.dataSource = result.url;
    });
  }

  redirectToHome() {
    this.router.navigate(['/home']);
  }
}
