import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EmployeeService } from '../emplist/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeForm: FormGroup;
  message: string;
  errorMsg: any;
  @Output() childToParent = new EventEmitter<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private empService: EmployeeService
  ) { }

  addEmployee() {
    this.empService.addEmployee(this.addEmployeeForm.value).subscribe(
      (data: any) => {
        this.message = data.message;
        this.errorMsg = undefined;
        // update parent method with true
      },
      (error: any) => {
        this.errorMsg = error;
        this.message = undefined;
        // update parent method with true
      }
    );
  }

  closeModal() {
    // update parent method with true
  }

  customJobLevel(jobLevel: FormControl) {
    // custom validation for job level to be between 3 to 8
  }

  ngOnInit(): void {
    this.addEmployeeForm = this.formBuilder.group({
      emailId: [],
      empName: [],
      empId: [],
      empLocation: [],
      jobLevel: [],
      gender: [],
      yearOfExperience: [],
      phoneNo: [],
      noOfProjectsWorked: [],
    });
  }

}
