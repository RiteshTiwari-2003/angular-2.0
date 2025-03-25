import { Injectable,inject } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http=inject(HttpClient);
  private URL="http://localhost:3000/products";// JSON server url 
  //get all products
  getAll():Observable<Product[]>{// so what happen whenever we call any od the data any of the api , it will give you the particuler thing in a observable format so that we can subscribe it
    // it is the part of RxJS library
    return this.http.get<Product[]>(this.URL)//so here the data come in a observable format
    

  }// this is my get api
  addProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(this.URL,product);

  }// this is my post apis
  //update
  updateProduct(id:number,product:Product):Observable<Product>{
    return this.http.put<Product>(`${this.URL}/${id}`,product);
  }
  //delete
  deleteProduct(id:number):Observable<void>{
    return this.http.delete<void>(`${this.URL}/${id}`);

  }
  //get by id
  getById(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.URL}/${id}`);
  }

  
}
