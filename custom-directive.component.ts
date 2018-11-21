import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent implements OnInit {
	listValues = [//listvalues is a array name
					{'city':'chennai'},
					{'city':'pune'},
					{'city':'vellore'},
					{'city':'mumbai'},
					{'city':'chennai'}
				]
    jai='Active';
  constructor() { }

  ngOnInit() {
  }

  raju() {
  	this.jai='UnActive';
  	alert("Green color will be changed into Red color");
  }

  abcd(cityName) {//cityname is our ownname
  	switch(cityName) {
  		case 'chennai':
  			return 'yellow';
  		case 'pune':
  			return 'blue';
  		case 'vellore':
  			return 'orange';
  		case 'mumbai':
  			return	'green';
  	}

  }

}
