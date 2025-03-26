import { Injectable,inject } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject,BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http=inject(HttpClient);
  subject$:any;
  private URL="http://localhost:3000/products";// JSON server url 
  constructor(){
    if(typeof window!=='undefined' && 'localStorage' in window){
      let localData=window.localStorage.getItem('mycart');
      this.subject$=new BehaviorSubject(localData!=undefined?JSON.parse(localData):[]);

    }

  }
  //add data in subject
  addCardSubject(data:any){
    this.subject$.next(data);
  }
  //get all products
  getAll():Observable<Product[]>{// so what happen whenever we call any od the data any of the api , it will give you the particuler thing in a observable format so that we can subscribe it
    // it is the part of RxJS library
    return this.http.get<Product[]>(this.URL)//so here the data come in a observable format
    

  }// this is my get api
  addProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(this.URL,product);

  }// this is my post apis
  //update
  updateProduct(id:any,product:Product):Observable<Product>{
    return this.http.put<Product>(`${this.URL}/${id}`,product);
  }
  //delete
  deleteProduct(id:any):Observable<void>{
    return this.http.delete<void>(`${this.URL}/${id}`);

  }
  //get by id
  getById(id:any):Observable<Product>{
    return this.http.get<Product>(`${this.URL}/${id}`);
  }

  
}
