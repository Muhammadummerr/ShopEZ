import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;

  rotationX = 0;
  rotationY = 0;
  constructor(private router: Router) {}
  viewDetails() {
    this.router.navigate(['/product', this.product.id]);
  }
  onMouseMove(event: MouseEvent, card: HTMLElement) {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 5;
    const rotateY = (x - centerX) / 5;

    this.rotationX = rotateX;
    this.rotationY = rotateY;
  }

  resetRotation() {
    this.rotationX = 0;
    this.rotationY = 0;
  }
}

