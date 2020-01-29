import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from './child-template-register-app/info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllserviceService {
  apiUrl='https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }


  getPost():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
  
  addStudent(data:Info):Observable<Info>{
    return this.http.post<Info>(this.apiUrl,data);
  }
  

  Clear(){
     return " ";
  }

  deleteUser(ids:number)
 {
     return this.http.delete(`${this.apiUrl}/${ids}`)
 }

  Retrieve() {

  }

  onUpdate(id:any,info:Info):Observable<Info>{
    return this.http.put<Info>(`${this.apiUrl}/${id}`,info);
  }

  getUser(id:number){
      return this.http.get(`${this.apiUrl}/${id}`)
  }

}
