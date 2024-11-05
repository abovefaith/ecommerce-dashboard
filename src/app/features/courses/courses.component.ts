// src/app/courses/courses.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CourseService } from '../../core/services/course.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];

  private courseService = inject(CourseService);

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
    });
  }
  createCourse() {
    // Logic for creating a course
  }

  editCourse(id: number) {
    // Logic for editing a course
  }

  // deleteCourse(id: number) {
  //   this.courseService.deleteCourse(id).subscribe(() => {
  //     this.loadCourses();
  //   });
  // }
}
