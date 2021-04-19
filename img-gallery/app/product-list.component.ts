import { Component } from '@angular/core';
import { products } from './product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class PrdouctListComponent {
	products = products

	notify(){
		alert("Notified");
	}
}
