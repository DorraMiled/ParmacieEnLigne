import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Catgeory } from 'src/app/common/types/category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  categoryList: Catgeory[] = [];
  searchTerm!: string;
  authService = inject(AuthService);
  constructor(
    private categoryservice: CategoryService,
    private router: Router,
    private customerService: CustomerService,


  ) { }

  ngOnInit() {
    this.customerService.getCategories().subscribe((result) => {
      this.categoryList = result;
    })
  }

  onSearch(e: any) {
    if (e.target.value) {
      this.router.navigateByUrl("/product?search=" + e.target.value)
    }
  }
  searchCategory(id: string) {
    this.searchTerm = "";
    this.router.navigateByUrl("/product?categoryId=" + id)
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }


}
