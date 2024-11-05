// src/app/intakes/intakes.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CourseIntakeService } from '../../core/services/course-intake.service';

@Component({
  selector: 'app-intakes',
  standalone: true,
  templateUrl: './intakes.component.html',
  styleUrls: ['./intakes.component.scss'],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class IntakesComponent implements OnInit {
  intakes: any[] = [];
  private intakeService = inject(CourseIntakeService);
  ngOnInit() {
    this.loadIntakes();
  }
  loadIntakes() {
    this.intakeService.getCourseIntakes().subscribe((data) => {
      this.intakes = data;
    });
  }

  createIntake() {
    // Logic for creating an intake
  }

  editIntake(id: number) {
    // Logic for editing an intake
  }

  // deleteIntake(id: number) {
  //   this.intakeService.deleteCourseIntake(id).subscribe(() => {
  //     this.loadIntakes();
  //   });
  // }
}
