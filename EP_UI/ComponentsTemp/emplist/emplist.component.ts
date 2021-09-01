import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  empList: Employee[];
  addedEmp: Employee;
  childFlag: boolean;
  error: any;
  searchFilter: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private empService: EmployeeService
  ) { }

  getEmpList(): void {
    // retrieve data from resolver
  }

  sendEmpDetail(employee: Employee) {
    this.router.navigate(['empDetails/' + employee.empId]);
  }

  handleChild(flag: boolean) {
    this.childFlag = flag;
    if (this.childFlag) {
      this.empService.getEmpList().subscribe(
        data => this.empList = data
      );
    }
  }

  ngOnInit(): void {
    this.getEmpList();
  }

}
