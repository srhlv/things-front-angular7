import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss',
  providers: []
]
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickSubmit(form) {
    console.log(form)
  }

}
