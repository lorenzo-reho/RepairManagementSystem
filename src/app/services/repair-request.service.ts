import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RepairRequest } from '../interfaces/repair-request'; // Import the Comment interface

@Injectable({
  providedIn: 'root'
})

export class RepairRequestService {
  private baseUrl = "http://192.168.1.176:3000";

  constructor(private http: HttpClient) { }

  getRepairRequests(): Observable<RepairRequest[]> {
    return this.http.get<RepairRequest[]>(`${this.baseUrl}/repair-requests`);
  }
}
