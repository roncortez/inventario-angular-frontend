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
    this.initialEmployee.documentId = "000000000"
    this.initialEmployee.firstname = "Ronny"
    this.initialEmployee.lastname = "Cortez"
    this.initialEmployee.email = "000000000"
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

    /*
    if(this.initialEmployee.username == user && this.initialEmployee.password == password){
      this.isValidUser = true
    }
    */

    console.log(this.listEmployee)
    this.findEmployee = this.listEmployee.find(employee => employee.username == user && employee.password == password)
    
    console.log(this.findEmployee)
    
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
