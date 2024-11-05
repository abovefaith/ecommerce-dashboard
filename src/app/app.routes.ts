import { Routes } from '@angular/router';
import { CoursesComponent } from './features/courses/courses.component';
import { IntakesComponent } from './features/intakes/intakes.component';
import { StudentsComponent } from './features/students/students.component';

export const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'intakes', component: IntakesComponent },
  { path: 'students', component: StudentsComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
];
