import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ProductI } from '../models/product';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent{

  constructor(private productService: ProductService, private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      id: [0],
      title: ['', [Validators.required, Validators.minLength(6)]],
      description: ['', [Validators.required, Validators.maxLength(600)]],
      price: [0, Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required],
    })
  }


  productsList: ProductI[] = []

  productForm = new FormGroup({
    id: new FormControl<number>(0),
    title: new FormControl<string>('', [Validators.required, Validators.minLength(6)]),
    description: new FormControl<string>('', [Validators.required, Validators.maxLength(600)]),
    price: new FormControl<number>(0, [Validators.required]),
    category: new FormControl<string>('', [Validators.required]),
    image: new FormControl<string>('', [Validators.required])
  })

  save(): void{
    if (this.productForm.valid){
      let id = this.productForm.get('id')?.value ?? 0;
      let title = this.productForm.get('title')?.value ?? '';
      let description = this.productForm.get('description')?.value ?? '';
      let price = this.productForm.get('price')?.value ?? 0;
      let category = this.productForm.get('category')?.value ?? '';
      let image = this.productForm.get('image')?.value ?? '';

      let product: ProductI = {
        id: id,
        title: title,
        price: price,
        category: category,
        description: description,
        image: image
      }

      this.productService.addProduct(product).subscribe((data: any) => {
        console.log("Producto creado", data);
        this.resetForm();
      });
    } else {
      console.log("Formulario no válido");
    }
  }

  resetForm(): void {
    this.productForm.reset();
  }

}




