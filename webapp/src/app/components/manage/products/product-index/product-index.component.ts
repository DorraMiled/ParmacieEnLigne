import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/types/product';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.scss']
})
export class ProductIndexComponent {
  displayedColumns: string[] = ['id', 'name', 'shortDescription', 'Prix', 'discount', 'action'];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(
    private productServcie: ProductService,
  ) {

    this.dataSource = new MatTableDataSource([] as any);
  }
  ngOnInit() {
    this.getServerData();
  }
  private getServerData() {
    this.productServcie.getProducts().subscribe((result) => {
      console.log(result);
      this.dataSource.data = result;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(id: string) {
    console.log(id);
    this.productServcie.deleteProductById(id).subscribe((result: any) => {
      alert("product deleted!");
      this.getServerData()
    })
  }
}
