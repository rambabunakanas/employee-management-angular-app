import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  id: number;
  employee: Employee;
  constructor(private employeeService: EmployeeService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee=data;
    }, error => console.log(console.error()));
    
  }
  onSubmit(){
    this.employeeService.deleteEmployee(this.id).subscribe(data =>{

    })
    this.router.navigate(['employees']);
  }
}
