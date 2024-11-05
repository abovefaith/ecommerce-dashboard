// src/app/services/course-intake.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CourseIntakeService {
  private apiUrl = environment.apiUrls.courseIntake;

  constructor(private http: HttpClient) {}

  getCourseIntakes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getCourseIntakeById(intakeId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${intakeId}`);
  }

  createCourseIntake(intake: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, intake);
  }

  updateCourseIntake(intakeId: string, intake: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${intakeId}`, intake);
  }

  deleteCourseIntake(intakeId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${intakeId}`);
  }
}
