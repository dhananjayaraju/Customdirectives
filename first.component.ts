import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
	math:any;
	physics:any;
	chemistry:any;
	arts:any;
	english:any;
	ListSubjectValue:any = [];
	mathGrade:string;
    listArr = [];
    constructor(public _sampleService: SampleService) { }

    ngOnInit() {
        console.log(this._sampleService);
        this.listArr = this._sampleService.sampleArr;
    }

    add() { //add is a eventname used in button click event
    	debugger;
    	let obj = {//let is like a var we use var keyword in javascript in angular we use let instead of var
    		'math':this.math,
    		'physics':this.physics,
    		'chemistry':this.chemistry,
    		'arts':this.arts,
    		'english':this.english
    	}
    	this.ListSubjectValue.push(obj);//pushing values into the array 
    }

    mathInput(value) {
    	if(value >90 && value <=100) {
    		this.mathGrade = 'S';
    	}
    }

}
