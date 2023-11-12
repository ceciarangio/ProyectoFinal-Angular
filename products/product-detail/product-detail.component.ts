import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductI } from '../models/product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{

  botonActualizar: boolean = false;

  productForm = new FormGroup({
    id: new FormControl<number>(0),
    title: new FormControl<string>("", [Validators.required, Validators.minLength(5)]),
    price: new FormControl<number>(0, [Validators.required]),
    category: new FormControl<string>("", [Validators.required]),
    description: new FormControl<string>("", [Validators.required, Validators.maxLength(1000)]),
    image: new FormControl<string>("", [Validators.required])
  })

// productDetail: ProductI[] = [];
selectedProduct: ProductI = {
  id: 0, title: '', price: 0, category: '', description: '', image: ''
}
productDetail: ProductI = { id: 0, title: '', price: 0, category: '', description: '', image: '' };
constructor(private productService: ProductService,
   private route: ActivatedRoute , private formBuilder: FormBuilder) {}

   update(): void{
    if(this.productForm.valid){
      let id= this.productForm.get('id')?.value || 0;
      let title = this.productForm.get('title')?.value || '';
      let price = this.productForm.get('price')?.value || 0;
      let category = this.productForm.get('category')?.value || '';
      let description = this.productForm.get('description')?.value || '';
      let image = this.productForm.get('image')?.value || '';



  let product: ProductI = {
    id: id,
    title: title,
    price: price,
    category: category,
    description: description,
    image: image
  }

  this.productService.updateProduct(product).subscribe((newProduct: ProductI) => {
    console.log('producto agregado: ', newProduct);
    this.resetForm();
  });


} else {
  console.log('Formulario no valido');
}
}

toggleButton(){
  this.botonActualizar = !this.botonActualizar;
}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = +params['id'];
      this.getProducts(productId);
    });
  }

getProducts(id: number) {
  this.productService.getAllProductsById(id).subscribe(data => {
    this.selectedProduct = data
    this.productForm.get('id')?.setValue(data.id)
  })
};

resetForm(): void{
  this.productForm.reset();
}

}
