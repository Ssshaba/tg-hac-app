import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const domain = 'https://result.school';

export enum ProductType {
  Skill = 'skill',
  Intensive = 'intensive',
  Course = 'course',
}

export interface IProduct {
  id: string;
  text: string;
  title: string;
  link: string;
  image: string;
  time: string;
  type: ProductType;
}

function addDomainToLinkAndImage(product: IProduct) {
  return {
    ...product,
    image: domain + product.image,
    link: domain + product.link,
  };
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'https://server.realityinvest.ru/api/category';

  readonly products: IProduct[] = [];

  constructor(private http: HttpClient) {
    this.fetchProducts();
  }

  private fetchProducts() {
    this.http.get<IProduct[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Ошибка при получении продуктов:', error);
        return throwError(error);
      })
    ).subscribe((products) => {
      this.products.push(...products.map(addDomainToLinkAndImage));
    });
  }

  getById(id: string) {
    return this.products.find((p) => p.id === id);
  }

  get byGroup() {
    return this.products.reduce((group, prod) => {
      if (!group[prod.type]) {
        group[prod.type] = [];
      }
      group[prod.type].push(prod);
      return group;
    }, {});
  }
}
