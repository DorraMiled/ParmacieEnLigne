import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Brand } from 'src/app/common/types/brand';
import { Catgeory } from 'src/app/common/types/category';
import { Product } from 'src/app/common/types/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  productForm: FormGroup;
  brands: Brand[] = [];
  categories: Catgeory[] = [];
  id!: string;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private brandService: BrandService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5)]],
      shortDescription: [null, [Validators.required, Validators.minLength(10)]],
      description: [null, [Validators.required, Validators.minLength(50)]],
      Price: [null, [Validators.required]],
      discount: [],
      images: this.formBuilder.array([]),
      categoryId: [null, [Validators.required]],
      brandId: [null, [Validators.required]],
      isFeatured: [false],
      isNewProduct: [false],
    });
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((result) => {
      this.categories = result;
    });
    this.brandService.getBrands().subscribe((result) => {
      this.brands = result;
    });

    this.id = this.route.snapshot.params["id"];
    if (this.id) {
      this.productService.getProductById(this.id).subscribe((result) => {
        // Récupérer les catégories et les marques
        const selectedCategory = this.categories.find(category => category._id === result.categoryId);
        const selectedBrand = this.brands.find(brand => brand._id === result.brandId);

        // Patch les autres champs
        this.productForm.patchValue({
          name: result.name,
          shortDescription: result.shortDescription,
          description: result.description,
          Price: result.Price,
          discount: result.discount,
          isFeatured: result.isFeatured,
          isNewProduct: result.isNewProduct,
          categoryId: selectedCategory,
          brandId: selectedBrand
        });

        // Ajouter les images au formulaire en initialisant le FormArray
        const imageFormArray = this.productForm.get('images') as FormArray;
        result.images.forEach((image) => {
          // Assurez-vous que vous extrayez l'URL de l'image
          imageFormArray.push(this.formBuilder.group({
            url: [image.url, Validators.required] // Utiliser "image.url" et non l'objet entier
          }));
        });
      });
    } else {
      this.addImage();
    }
  }



  add() {
    if (this.productForm.invalid) {
      alert("Please complete all required fields.");
      return;
    }

    const product: Product = this.productForm.value as Product;
    this.productService.addProduct(product).subscribe({
      next: () => {
        alert("Product added successfully!");
        this.router.navigateByUrl('/admin/products');
      },
      error: (err) => {
        console.error("Error adding product:", err);
        alert("Failed to add the product. Please try again.");
      },
    });
  }

  update() {
    if (this.productForm.invalid) {
      alert("Please complete all required fields.");
      return;
    }

    const product: Product = this.productForm.value as Product;
    this.productService.UpdateProduct(this.id, product).subscribe({
      next: () => {
        alert("Product updated successfully!");
        this.router.navigateByUrl('/admin/products');
      },
      error: (err) => {
        console.error("Error updating product:", err);
        alert("Failed to update the product. Please try again.");
      },
    });
  }

  // addImage() {
  //   this.images.push(this.formBuilder.control(null));
  // }

  addImage() {
    const imageGroup = this.formBuilder.group({
      url: ['', Validators.required], // Chaque image a une URL obligatoire
    });
    (this.productForm.get('images') as FormArray).push(imageGroup);
  }



  removeImage() {
    if (this.images.length > 0) {
      this.images.removeAt(this.images.length - 1);
    }
  }


  // removeImage() {
  //   if (this.images.length > 0) {
  //     this.images.removeAt(this.images.length - 1);
  //   }
  // }

  // get images() {
  //   return this.productForm.get('images') as FormArray;
  // }

  get images(): FormArray {
    return this.productForm.get('images') as FormArray;
  }

}
