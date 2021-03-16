import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(private productservice: ProductService,
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productservice.readById(id).subscribe(product=> {
      this.product=product
    })
  }
  deleteProduct(): void{
    this.productservice.delete(this.product.id).subscribe(()=>{
      this.productservice.showMessage('Produto excluido com sucesso!')
      this.router.navigate(["/products"]);

    })
  }
  cancel(): void{
    this.router.navigate(['/products'])
  }

}
