import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { AuthFormTypes } from './auth-form.type';

@Component({
    selector: 'th-auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: []
})
export class AuthFormComponent {
    @Input() private type: AuthFormTypes;
    @Output() private onSubmit = new EventEmitter<User>();

    authForm: FormGroup;
    name = new FormControl('', this.isSignUpForm() ? Validators.required : []);
    email = new FormControl('',  Validators.required);
    password = new FormControl('',  Validators.required);

    submitted: boolean = false;

    constructor(private fb: FormBuilder) {
        this.authForm = fb.group({
            name: this.name,
            email: this.email,
            password: this.password
        });
    }

    onSubmitClick() {
        this.submitted = true;

        if (this.authForm.valid) {
            this.submitted = true;
            this.onSubmit.emit(this.authForm.value);
        }
    }

    isSignUpForm() {
        return this.type === AuthFormTypes.SIGNUP
    }
}
