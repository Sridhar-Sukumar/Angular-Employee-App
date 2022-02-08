import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'my-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employee : IEmployee | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    let empCode: string = this.route.snapshot.params['code'];
    if(empCode){
      this.getEmployee(empCode);
    }
  }

  getEmployee(code: string): void {
    this.employee = this.employeeService.getEmployeeById(code);
  }

  onBack() : void {
    this.router.navigate(['/employees']);
  }

}
