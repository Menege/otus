import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../models/tag.model';

@Injectable({
  providedIn: 'root',
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

  // Получение тега по ID
  getTagById(id: string): Observable<Tag> {
    return this.http.get<Tag>(`${this.apiUrl}/${id}`);
  }

  // Сохранение (создание/редактирование) тега
  saveTag(id: string | undefined, data: Tag): Observable<Tag> {
    if (id) {
      // Редактирование
      return this.http.put<Tag>(`${this.apiUrl}/${id}`, data);
    } else {
      // Создание
      return this.http.post<Tag>(this.apiUrl, data);
    }
  }
}
