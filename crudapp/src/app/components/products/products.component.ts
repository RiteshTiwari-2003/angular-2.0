import { Component ,OnInit} from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../services/product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  productData:Product[]=[];
  constructor(private prodSer:ProductService){

  }
  ngOnInit():void{
    this.prodSer.getAll().subscribe({
      next:(data)=>{
        console.log(data);
        this.productData=data;

      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  delPro(id:number){
    if(confirm("Do you wasnt to delete?")){
      this.prodSer.deleteProduct(id).subscribe({
        next:(data)=>{
          alert("Product Deleted!");
          let pdata=this.productData.filter((prod)=>prod.id!=id);
          this.productData=pdata;
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
  }

}
