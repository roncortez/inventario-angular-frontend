import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit {

  updateForm:FormGroup | any;

  vaccines = [
    { id: 1, name: "Sputnik"},
    { id: 2, name: "AstraZeneca" },
    { id: 3, name: "Pfizer" },
    { id: 4, name: "Jhonson&Jhonson" },
  ];

  modalSwitch:boolean;
  
  isVisible: any;
  isSelected: boolean = true;

  constructor(
    private modalSS: SwitchService,
    public fb:FormBuilder) { 

    


  }

  ngOnInit() {

    this.updateForm = new FormGroup({

    });
    
    this.modalSS.$modal.subscribe((valor)=>(this.modalSwitch = valor)),
    
    this.updateForm = this.fb.group({
      vaccine: [null]
    });
  }
  
  openModal(){
    this.modalSwitch = true;
  }
  
  closeModal(){
    this.modalSS.$modal.emit(false);
  }
}
