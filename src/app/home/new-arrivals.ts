import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../products/product-card';
import { Product,ProductService } from '../products/product';
import { ViewChild, ElementRef } from '@angular/core';
// import { ProductService } from '../product-card';

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './new-arrivals.html',
  styleUrls: ['./new-arrivals.scss']
})
export class NewArrivalsComponent {
  products: Product[] = [];
    loading: boolean = true;
  
    constructor(private productService: ProductService) {}
  
    ngOnInit(): void {
      this.productService.getProducts().subscribe({
        next: (data) => {
          this.products = data;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }

  

  
//   products: Product[] = [
//   {
//     id: 1,
//     title: 'Classic Sneakers',
//     price: 79.99,
//     image: 'https://source.unsplash.com/400x400/?sneakers,shoes'
//   },
//   {
//     id: 2,
//     title: 'Wireless Headphones',
//     price: 49.99,
//     image: 'https://source.unsplash.com/400x400/?headphones,audio'
//   },
//   {
//     id: 3,
//     title: 'Leather Backpack',
//     price: 59.99,
//     image: 'https://source.unsplash.com/400x400/?backpack,bag'
//   },
//   {
//     id: 4,
//     title: 'Smart Watch',
//     price: 129.99,
//     image: 'https://source.unsplash.com/400x400/?smartwatch,watch'
//   },
//   {
//     id: 5,
//     title: 'Fitness Tracker',
//     price: 69.99,
//     image: 'https://source.unsplash.com/400x400/?fitness,tracker'
//   },
//   {
//     id: 6,
//     title: 'Leather Wallet',
//     price: 29.99,
//     image: 'https://source.unsplash.com/400x400/?wallet,leather'
//   },
//   {
//     id: 7,
//     title: 'Stylish Sunglasses',
//     price: 24.99,
//     image: 'https://source.unsplash.com/400x400/?sunglasses,glasses'
//   },
//   {
//     id: 8,
//     title: 'Sports Water Bottle',
//     price: 19.99,
//     image: 'https://source.unsplash.com/400x400/?water,bottle,sports'
//   }
// ];


  @ViewChild('slider', { static: false }) slider!: ElementRef;

scrollLeft() {
  this.slider.nativeElement.scrollBy({
    left: -250,
    behavior: 'smooth'
  });
}

scrollRight() {
  this.slider.nativeElement.scrollBy({
    left: 250,
    behavior: 'smooth'
  });
}
  scrollToStart() {
    this.slider.nativeElement.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  }

  scrollToEnd() {
    this.slider.nativeElement.scrollTo({
      left: this.slider.nativeElement.scrollWidth,
      behavior: 'smooth'
    });
  }
}
