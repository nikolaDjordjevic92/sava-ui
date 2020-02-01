import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  webPage = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
  ]);
  extractedUrl = new FormControl('');
  shortUrl = new FormControl('');
  urlToExtract = new FormControl('');


  matcher = new ErrorStateMatcher();
  constructor(private service: HomeService, private router: Router) { }

  ngOnInit() {
  }

  createShorterUrl() {
    if (this.webPage.valid) {
      this.service.createShorterUrl(this.webPage.value).then((result: any) => {
        this.shortUrl.setValue(result.shortUrl);
      });
    }
  }

  extractUrl() {
    this.service.extractUrl(this.urlToExtract.value).then((result: any) => {
      this.extractedUrl.setValue(result.url_address);
    });
  }

  redirectToPopularDomain() {
    this.router.navigate(['/popular-domains']);
  }

}
