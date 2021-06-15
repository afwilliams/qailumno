import {Observable} from 'rxjs';

import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

import {ProgramModel} from '../../models/program.model';
import {ProgramsService} from '../../services/programs.service';
import {RegisterService} from '../../services/register.service';
import {RegisterModel} from '../../models/register-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  programs$: Observable<Array<ProgramModel>>;
  register$: Observable<Array<RegisterModel>>;
  errorRegister$: Observable<any>;
  registerForm: FormGroup;
  isError: boolean;
  isSuccess: boolean;
  messageError: string;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private programsService: ProgramsService,
    private registerService: RegisterService) {
    this.programs$ = this.programsService.entities$;
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      family_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(new RegExp(/^(?:[^\d\n]*\d){10}[^\d\n]*$/))]],
      program: ['', Validators.required],
    });
    this.programsService.getAll().subscribe();
    this.registerService.errors$.subscribe((error) => this.onErrorRegister(error));
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.registerForm);
    /*if (this.registerForm.valid) {
      this.registerService.upsert(this.registerForm.value)
        .subscribe(() => this.onSuccessRegister());
    }*/
  }

  get registerFormControl(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  validationName(): boolean {
    return (this.registerFormControl.name.touched || this.submitted) &&
      this.registerFormControl.name.errors?.required;
  }

  validationFamilyName(): boolean {
    return (this.registerFormControl.family_name.touched || this.submitted) &&
      this.registerFormControl.family_name.errors?.required;
  }

  validateEmail(): boolean {
    return ((this.registerFormControl.email.touched || this.submitted) && this.registerFormControl.email.errors?.required) ||
      (this.registerFormControl.email.touched && this.registerFormControl.email.errors?.email);
  }

  validatePhone(): boolean {
    return ((this.registerFormControl.phone.touched || this.submitted) && this.registerFormControl.phone.errors?.required) ||
      ((this.registerFormControl.phone.touched || this.submitted) && this.registerFormControl.phone.errors?.pattern);
  }

  validateProgram(): boolean {
    return ((this.registerFormControl.program.touched || this.submitted) && this.registerFormControl.program.errors?.required);
  }

  private onSuccessRegister(): void {
    this.isError = false;
    this.isSuccess = true;
    this.registerForm.reset();
  }

  private onErrorRegister(error): void {
    this.isError = true;
    this.isSuccess = false;
    this.messageError = error?.payload.data.error.message;
  }

}
