import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
reactiveForm:FormGroup;
FormControls:any;

  user: any = {
    firstname: '',
    lastname: '',
    email: '',
    phone:'',
    dob:'',
    gender:'',
    password: '',
  }

  constructor( private fb:FormBuilder) {
    this.reactiveForm = this.fb.group({
      'firstname': [this.user.firstname , [Validators.required]],
      'lastname': [this.user.lastname, [Validators.required]],
      'email': [this.user.email, [Validators.required,Validators.email]],
      'phone': [this.user.phone, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      'dob': [this.user.dob, [Validators.required]],
      'gender': [this.user.gender, [Validators.required]],
      'password': [this.user.password, [Validators.required]]
    });
    this.FormControls = this.reactiveForm.controls;
  }
  onSubmit(){
  
    this.user.firstname = this.FormControls.firstname.value;
    this.user.lastname = this.FormControls.lastname.value;
    this.user.email = this.FormControls.email.value;
    this.user.phone = this.FormControls.phone.value;
    this.user.gender = this.FormControls.gender.value;
    this.user.dob = this.FormControls.dob.value;
    this.user.password = this.FormControls.password.value;
  }
  ngOnInit(): void {
  }

}
