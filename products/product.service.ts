import { ProductI } from './models/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = 'https://fakestoreapi.com/products/';
  // url: string = 'http://localhost:3000/products';


  constructor(private httpClient: HttpClient) { }

// método para solicitud HTTP GET al servicio web
  getAllProducts(): Observable<ProductI[]> {
    return this.httpClient.get<ProductI[]>(this.url);
  };

  // método solicitud HTTP GET
  getAllProductsById(id: number): Observable<ProductI> {
    return this.httpClient.get<ProductI>(`${this.url}/${id}`)
  };

  // create HTTP POST
  addProduct(e: ProductI): Observable<ProductI>{
    return this.httpClient.post<ProductI>(this.url, e)
  };

  // update HTTP PUT
  updateProduct(e: ProductI): Observable<ProductI>{
    return this.httpClient.put<ProductI>(`${this.url}/${e.id}`, e)
  };

  // delete HTTP DELETE
  deleteProductById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}/${id}`);
  }

}




