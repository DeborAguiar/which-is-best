import { Component } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  values: number[] = [];

  addValue() {
    this.values.push();
  }

  removeValue(index: number) {
    this.values.splice(index, 1);
  }
}
