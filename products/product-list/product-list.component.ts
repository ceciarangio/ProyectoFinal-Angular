import { Component, OnInit } from '@angular/core';
import { ProductI } from '../models/product';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  products: ProductI[] = [];

  constructor( private productService: ProductService ) {}

  ngOnInit(){
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((res: ProductI[]) => {
      this.products = res;
    },
    (error: any) => {
      console.log('error: ', error);
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProductById(id).subscribe((data) => {
      console.log('borrado : ', data);
      this.getAllProducts(); // Actualiza la lista de productos después de eliminar uno
    });
  }
}

