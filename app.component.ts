import { Component, OnInit } from '@angular/core';
import { SampleService } from './sample.service';//importing from sample.service.ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularJS';
  jai='ravi';
  access:boolean=true;
  listArr = [];
  constructor(public _sampleService : SampleService) {}//calling sample service
//_sampleService is our own name

//public is like global variable
  ngOnInit() {
    debugger;
    console.log(this._sampleService);
    this.listArr = this._sampleService.sampleArr;//creating array name called listarr
    //and calling the sampleArr from sample service
  }
  inputchange(value) {
  	console.log(this.jai);
  }

  enable() {
  	this.access = false;
  }

  disable() {
  	this.access = true;
  }
}
