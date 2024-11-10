import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private apiUrl = 'http://your-api-url.com/tasks';

  constructor(private http: HttpClient) {}

  getTags(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  deleteTag(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
