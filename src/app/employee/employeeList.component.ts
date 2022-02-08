import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'list-employee',
    templateUrl: './employeeList.component.html',
    styleUrls: ['./employeeList.component.scss'],
})

export class EmployeeListComponent implements OnInit {
    employees: IEmployee[] = [];

    constructor(private _employeeService: EmployeeService) {
    }
    
    ngOnInit() {
        this.employees = this.getEmployees();
    }

    getEmployees(): IEmployee[] {
        return this._employeeService.getEmployees();
    }
}
