import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  id: number;
  employees: Employee[]; 
  constructor(private employeeService: EmployeeService, private router: Router,private route: ActivatedRoute) { 
   
  }
  ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
   this.getEmployeeList();
  }

   getEmployeeList(){
    this.employeeService.getEmployeeList().subscribe((data)=>{
      this.employees = data;
    });
  }

  updateEmployee(id: number){
    console.log("updateEmployee()");
   this.router.navigate(['update-employee',id]);
  }
  deleteEmployee(id: number){
    this.router.navigate(['delete-employee',id]);
  }
}
