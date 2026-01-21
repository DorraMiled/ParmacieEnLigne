import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  name!: string;
  isEdit = false;
  id!: string;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    console.log(this.id)
    if (this.id) {
      this.isEdit = true;
      this.categoryService.getCategoryById(this.id).subscribe((result: any) => {
        console.log(result);
        this.name = result.name;
      });
    }
  }

  add() {
    console.log(this.name)
    this.categoryService.addCategories(this.name).subscribe((result: any) => {
      alert("Catgeory added");
      this.router.navigateByUrl("/admin/categories");

    })
  }
  update() {
    console.log(this.name);
    this.categoryService.UpdateCategory(this.id, this.name)
      .subscribe((result: any) => {
        alert("Catgeory updated");
        this.router.navigateByUrl("/admin/categories");

      })
  }
}
