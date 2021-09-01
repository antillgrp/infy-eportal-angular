import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  empUrl = 'http://localhost:1020/getallEmployee';
  addEmpUrl = 'http://localhost:1020/addEmployee';
  constructor(
    private http: HttpClient
  ) { }

  getEmpList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.empUrl);
  }

  getEmpDetail(id: string): Observable<Employee> {
    return ;
    // this.getEmpList().pipe(
      // send employee object whose id matched
    // );
  }

  addEmployee(empObj: Employee): Observable<any> {
    return this.http.post(this.addEmpUrl, empObj).pipe(
      catchError(error => {
        return throwError(error.error.message);
      })
    );
  }
}
