import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/services/category.service';
import { Catgeory } from 'src/app/common/types/category';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource: MatTableDataSource<Catgeory>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(
    private categoryService: CategoryService,
  ) {

    this.dataSource = new MatTableDataSource([] as any);
  }
  ngOnInit() {
    this.getServerData();
  }
  private getServerData() {
    this.categoryService.getCategories().subscribe((result) => {
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
    this.categoryService.deleteCategoryById(id).subscribe((result: any) => {
      alert("category deleted!");
      this.getServerData()
    })
  }
}
