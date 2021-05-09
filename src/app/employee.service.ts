import { HttpClient } from '@angular/common/http';
import { Identifiers } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8081/api/v1";
  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseUrl+"/employees");
  }

  createEmployee(employee: Employee): Observable<Employee>{
    return this.httpClient.post<Employee>(this.baseUrl+"/employees/create/employee",employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(this.baseUrl+"/employees/get/employee/"+id)
  }

  updateEmployee(id: number,employee: Employee): Observable<Employee>{
    return this.httpClient.put<Employee>(this.baseUrl+"/employees/update/employee/"+id,employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete<Object>(this.baseUrl+"/employees/delet/employee/"+id);
  }
 
}
