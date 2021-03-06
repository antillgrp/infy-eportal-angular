import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { Employee } from '../employee';

@Injectable({
    providedIn: 'root'
})
export class EmployeeResolve implements Resolve<Employee[]> {

    constructor() { }

    resolve(): Observable<any> {
        // retrieve employee list values from service
    }
}
