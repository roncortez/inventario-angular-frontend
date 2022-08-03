import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  modalSwitch:boolean;
  registerForm: FormGroup | any;

  constructor(private modalSS: SwitchService) { 
    this.registerForm = new FormGroup({
      id: new FormControl('', [Validators.required,Validators.pattern(
        '[0-9]{10}')]),
      firstname: new FormControl('', [Validators.required, Validators.pattern(
        '^[a-zA-Z ]*$')]),
      lastname: new FormControl('', [Validators.required, Validators.pattern(
        '^[a-zA-Z ]*$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
    this.modalSS.$modal.subscribe((valor)=>(this.modalSwitch = valor))
  }
  
  openModal(){
    this.modalSwitch = true;
  }
  
  closeModal(){
    this.modalSS.$modal.emit(false);
  }

  
}
