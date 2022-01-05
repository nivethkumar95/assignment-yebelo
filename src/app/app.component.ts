import { Component } from '@angular/core';
import Products from "../assets/json/products.json"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  // fruits =  ['a1','orange','q2','grapes'];
products:any=Products; 
 originalProductslist=this.products
 filterChange (e:any){
   console.log(e.target.value)
   let filtertype=e.target.value;
  let filterProducts= this.originalProductslist.filter(function (product:any){
return product.p_category == filtertype
  })
  this.products=filterProducts
 }
 quantityChange (e:any,item: any){
  console.log(e.target.value)
  let quantityValue=e.target.value;
 let filterProducts= this.originalProductslist.map(function (el: any){
    if(el.p_id== item.p_id){
      // el["quantity"]=quantityValue 
      el.quantity = quantityValue;
return el
    }else{
      return el
    }
 })
 this.products=filterProducts
}
formSubmit(){
alert(JSON.stringify(this.originalProductslist))
}
}
