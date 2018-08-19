import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from './services/course/course.service';
import { PageEvent } from '@angular/material';
import { Course } from './models/course.model';
import { PaginationService } from './services/pagination/pagination.service';
import { Subscription } from 'rxjs';
import { LoadingService } from '../core/services/loading/loading.service';

interface CoursesRseponse {
  courses: Course[];
  length: number;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {

  public searchValue = '';
  public courses: Course[] = [];
  public length = 0;
  public pageIndex = 0;
  public pageSize = 5;

  private deleteSub: Subscription;
  private getCoursesSub: Subscription;

  constructor(private courseService: CourseService,
              private paginationService: PaginationService,
              private loadingService: LoadingService) { }

  ngOnInit() {
    this.getCourses();
  }

  public search(searchValue): void {
    this.searchValue = searchValue;
    this.pageIndex = 0;
    this.paginationService.reset();
    this.getCourses();
  }

  public getPaginationData(pageEvent: PageEvent) {
    this.pageIndex = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
    this.getCourses();
  }

  public delete(id) {
    this.loadingService.setIsLoadingValue(true);
    this.deleteSub = this.courseService.removeCourse(id).subscribe(() => {
      if (this.pageIndex * this.pageSize + 1 >= this.length) {
        this.paginationService.previousPage();
      }
      this.getCourses();
    });
  }

  private getCourses() {
    this.loadingService.setIsLoadingValue(true);
    const start = this.pageIndex * this.pageSize;
    this.getCoursesSub = this.courseService.getCoursesList(start, this.pageSize, this.searchValue)
      .subscribe( (coursesList: CoursesRseponse) => {
          this.courses = coursesList.courses;
          this.length = coursesList.length;
          this.loadingService.setIsLoadingValue(false);
      });
  }

  ngOnDestroy() {
    if (this.deleteSub) {
      this.deleteSub.unsubscribe();
    }
    if (this.getCoursesSub) {
      this.getCoursesSub.unsubscribe();
    }
  }
}
