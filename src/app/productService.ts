import { Injectable } from "@angular/core";

@Injectable()
export class ProductService{
    getProduts(): Product[]{
        return [
            {name:'abc',quantity:3},
            {name:'def',quantity:5},
            {name:'xyz',quantity:40}
        ]
    }
}

export class Product{
    name?:string;
    quantity?:number;
}