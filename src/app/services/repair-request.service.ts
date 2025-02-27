import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RepairRequest } from '../interfaces/repair-request'; // Import the Comment interface

@Injectable({
  providedIn: 'root'
})

export class RepairRequestService {
  private baseUrl = "http://192.168.1.176:3000";

  constructor(private http: HttpClient) { }

  approveRequest(id:number): any{
    const body = { };
    
    const params = new HttpParams({});
    var headers = new HttpHeaders({'Accept': 'application/json', 'Content-Type': 'application/json'});
    
    return this.http.put<any>(`${this.baseUrl}/repair-requests/approve/${id}`, params, {headers});

  }

  denyRequest(id:number): any{
    const body = { };
    
    const params = new HttpParams({});
    var headers = new HttpHeaders({'Accept': 'application/json', 'Content-Type': 'application/json'});
    
    return this.http.put<any>(`${this.baseUrl}/repair-requests/deny/${id}`, params, {headers});

  }

  saveRequest(id: number, updatedItem: RepairRequest): any{
    var headers = new HttpHeaders({'Accept': 'application/json', 'Content-Type': 'application/json'});
    return this.http.put<RepairRequest>(`${this.baseUrl}/repair-requests/update/${id}`, updatedItem, {headers});
  }


  getNewRepairRequests(): Observable<RepairRequest[]> {
    return this.http.get<RepairRequest[]>(`${this.baseUrl}/repair-requests/new`);
  }

  getApprovedRepairRequests(): Observable<RepairRequest[]> {
    return this.http.get<RepairRequest[]>(`${this.baseUrl}/repair-requests/approved`);
  }

  getCompleteRepairRequest(id: number): Observable<RepairRequest> {
    return this.http.get<RepairRequest>(`${this.baseUrl}/repair-requests/${id}`);
  }

}
