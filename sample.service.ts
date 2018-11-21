import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
	sampleArr =  [{
  		'name':'rahul',
  		'city':'nasik'
  	},{
  		'name':'mohan',
  		'city':'pune'
  	},{
  		'name':'rohan',
  		'city':'mumbai'
  	}];
  constructor() { }

  
}
