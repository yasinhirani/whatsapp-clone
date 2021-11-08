import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatListService {

  constructor(private http: HttpClient) { }
  
  public listData(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/master');
  }

}
