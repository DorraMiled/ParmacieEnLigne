import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brands-form',
  templateUrl: './brands-form.component.html',
  styleUrls: ['./brands-form.component.scss']
})
export class BrandsFormComponent {
  name!: string;

  id!: string;

  constructor(
    private brandService: BrandService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    console.log(this.id)
    if (this.id) {

      this.brandService.getBrandById(this.id).subscribe((result: any) => {
        console.log(result);
        this.name = result.name;
      });
    }
  }

  addbrand() {
    console.log(this.name)
    this.brandService.addBrands(this.name).subscribe((result: any) => {
      alert("Brand added!!");
      this.router.navigateByUrl("/admin/brands");

    })
  }
  update() {
    console.log(this.name);
    this.brandService.UpdateBrand(this.id, this.name)
      .subscribe((result: any) => {
        alert("Brand updated");
        this.router.navigateByUrl("/admin/brands");

      })
  }
}
