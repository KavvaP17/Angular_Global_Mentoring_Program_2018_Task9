import { Injectable } from '@angular/core';
import { MatPaginator } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  private pagination: MatPaginator;

  constructor() { }

  init(pagination) {
    this.pagination = pagination;
  }

  reset() {
    this.pagination.firstPage();
  }

  previousPage() {
    this.pagination.previousPage();
  }
}
