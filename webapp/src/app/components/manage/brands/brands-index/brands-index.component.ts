import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BrandService } from 'src/app/services/brand.service';
import { Brand } from 'src/app/common/types/brand';

@Component({
  selector: 'app-brands-index',
  templateUrl: './brands-index.component.html',
  styleUrls: ['./brands-index.component.scss']
})
export class BrandsIndexComponent {
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource: MatTableDataSource<Brand>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(
    private brandService: BrandService,
  ) {

    this.dataSource = new MatTableDataSource([] as any);
  }
  ngOnInit() {
    this.getServerData();
  }
  private getServerData() {
    this.brandService.getBrands().subscribe((result) => {
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
    this.brandService.deleteBrandById(id).subscribe((result: any) => {
      alert("brand deleted!");
      this.getServerData()
    })
  }

}
