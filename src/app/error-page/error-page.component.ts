import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'test-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage !: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //this.errorMessage = this.route.snapshot.data['message']; 
    // if any change in url with not reload page use subscribe
    alert(this.route.snapshot.url);
    this.route.data.subscribe(data => {
      this.errorMessage = data['message'];
    })
  }

}
