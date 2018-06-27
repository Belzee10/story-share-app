import { Category } from './../../models/category';
import { CategoryService } from './category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories()
      .subscribe(
        result => {
          this.categories = result['categories'];
          console.log(this.categories);
        },
        err => {
          console.log('Error: '+err);
        }
      )
  }

}
