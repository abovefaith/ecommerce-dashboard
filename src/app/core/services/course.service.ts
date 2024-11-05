// src/app/services/course.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = environment.apiUrls.course;

  constructor(private http: HttpClient) {}

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getCourseById(courseId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${courseId}`);
  }

  createCourse(course: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, course);
  }

  updateCourse(courseId: string, course: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${courseId}`, course);
  }

  deleteCourse(courseId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${courseId}`);
  }
}
