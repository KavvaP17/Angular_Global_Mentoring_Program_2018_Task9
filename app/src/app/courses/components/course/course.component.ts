import { Component, OnInit, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  @Output() deleteCourse = new EventEmitter<number>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public delete(event) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '235px',
      data: {title: this.course.title}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteCourse.emit(this.course.id);
      }
    });
  }

  public changeRated(event) {
    event.stopPropagation();
    this.course.topRated = !this.course.topRated;
  }
}
