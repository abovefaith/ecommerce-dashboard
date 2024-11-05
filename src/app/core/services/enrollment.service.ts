// src/app/services/enrollment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  private apiUrl = environment.apiUrls.enrollment;

  constructor(private http: HttpClient) {}

  getEnrollments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getEnrollmentById(enrollmentId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${enrollmentId}`);
  }

  createEnrollment(enrollment: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, enrollment);
  }

  updateEnrollment(enrollmentId: string, enrollment: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${enrollmentId}`, enrollment);
  }

  deleteEnrollment(enrollmentId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${enrollmentId}`);
  }
}
