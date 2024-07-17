import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-products',
  standalone: true,
  imports: [],
  templateUrl: './new-products.component.html',
  styleUrl: './new-products.component.css'
})
export class NewProductsComponent {
  products:any
  constructor(private http:HttpClient){}
  ngOnInit(){
    this.http.get("https://fakestoreapi.com/products")
    .subscribe(res=>
    {
      console.log(res)
      this.products=res
    }
    )
  }
}
