// src/app/students/students.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EnrollmentService } from '../../core/services/enrollment.service';

@Component({
  selector: 'app-students',
  standalone: true,
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class StudentsComponent implements OnInit {
  students: any[] = [];
  private enrollmentService = inject(EnrollmentService);
  ngOnInit() {
    this.loadStudents();
  }
  loadStudents() {
    this.enrollmentService.getEnrollments().subscribe((data) => {
      this.students = data;
    });
  }
}
