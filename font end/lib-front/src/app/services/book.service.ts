import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url=`${environment.serviceUrl}/book`

  constructor(private http: HttpClient) { }

  getBook():any{
    return this.http.get<any>(this.url);
  }

  getBookById(id:any){
    let getUrl = `${this.url}/${id}`;
    return this.http.get<any>(getUrl);
  }

  getBookByName(name:any){
    let getUrl = `${this.url}/name/${name}`;
    return this.http.get<any>(getUrl);
  }

  addBook(book:any){
    let getUrl = `${this.url}/add`;
    return this.http.post<any>(getUrl,book)
    .pipe(map((res)=>{
      return res ;
    }));
  }

  addupdateBook(book:any,id:any){
    let getUrl = `${this.url}/${id}`;
    return this.http.put<any>(getUrl,book)
    .pipe(map((res)=>{
      return res ;
    }));
  }

  deleteBook(id:any){
    let getUrl = `${this.url}/${id}`;
    return this.http.delete<any>(getUrl); 
  }
}
