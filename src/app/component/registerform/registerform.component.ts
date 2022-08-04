import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { employeeObjectVo } from 'src/app/Objects/employeeObject';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  modalSwitch:boolean;
  registerForm: FormGroup | any;

  //angular component
  @Output() addEmployeeEmiter = new EventEmitter();
  

  constructor(private modalSS: SwitchService) { 
    //call services
  }

  ngOnInit(): void {
    
    this.registerForm = new FormGroup({
      id: new FormControl('', [Validators.required,Validators.pattern(
        '[0-9]{10}')]),
      firstname: new FormControl('', [Validators.required, Validators.pattern(
        '^[a-zA-Z ]*$')]),
      lastname: new FormControl('', [Validators.required, Validators.pattern(
        '^[a-zA-Z ]*$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
    
    this.modalSS.$modal.subscribe((valor)=>(this.modalSwitch = valor))
    
  }
  
  openModal(){
    this.modalSwitch = true;
  }
  
  closeModal(){
    this.modalSS.$modal.emit(false);
  }

  addEmployee(){
    
    let newEmployee:employeeObjectVo = new employeeObjectVo()

    newEmployee.documentId = this.registerForm.controls.id.value
    newEmployee.firstname = this.registerForm.controls.firstname.value
    newEmployee.lastname = this.registerForm.controls.lastname.value
    newEmployee.email = this.registerForm.controls.email.value
    newEmployee.username = this.registerForm.controls.firstname.value + this.registerForm.controls.lastname.value
    let newPassword = Math.floor(Math.random() *999)
    newEmployee.password = this.registerForm.controls.firstname.value + newPassword
    newEmployee.isAdmin = false
    console.log("Form ",newEmployee)

    this.addEmployeeEmiter.emit(newEmployee)

    this.closeModal()
  
  }
  
  
}
