import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { employeeObjectVo } from './Objects/employeeObject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventario-angular-frontend';
  
  // list of type any to save employees
  public listEmployee:any[] = [];
  public initialEmployee:employeeObjectVo = new employeeObjectVo();
  
  public loginForm: FormGroup | any;
  public findEmployee:any;
  public isValidUser:boolean = false;

  
  ngOnInit(): void {
    
    
    this.loginForm = new FormGroup({
      userForm: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    
    });

    // password is declared just for demonstration
    // admin User
    this.initialEmployee.documentId = "123456789"
    this.initialEmployee.firstname = "Ronny"
    this.initialEmployee.lastname = "Cortez"
    this.initialEmployee.email = "ronny.cortez12@gmail.com"
    this.initialEmployee.password = "admin"
    this.initialEmployee.isAdmin = true
    this.initialEmployee.username = "admin"

    this.listEmployee.push(this.initialEmployee)
    console.log(this.listEmployee)

    this.findEmployee = this.initialEmployee

  }

  validateUserInfo(){

    let user = this.loginForm.controls.userForm.value
    let password = this.loginForm.controls.password.value
    
    this.findEmployee = this.listEmployee.find(employee => employee.username == user && employee.password == password)
  
    if(this.findEmployee && this.findEmployee.username == user && this.findEmployee.password == password){
      this.isValidUser = true
    }
  }

  logOut(){
    this.isValidUser = false;
  }

  /**
   * Emiter list transaction select.
   * @param event
   */
   addNewEmployee(event: any) {
      this.listEmployee.push(event);
      console.log(this.listEmployee)
  }
}
