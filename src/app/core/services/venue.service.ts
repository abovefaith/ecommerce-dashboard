// src/app/services/venue.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VenueService {
  private apiUrl = environment.apiUrls.venue;

  constructor(private http: HttpClient) {}

  getVenues(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getVenueById(venueId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${venueId}`);
  }

  createVenue(venue: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, venue);
  }

  updateVenue(venueId: string, venue: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${venueId}`, venue);
  }

  deleteVenue(venueId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${venueId}`);
  }
}
