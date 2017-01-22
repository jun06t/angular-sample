import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  public f: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.f = this.fb.group({
      'first':['', Validators.required],
      'last':['', Validators.required]
    });
  }

  loginForm() {
    console.log(this.f.value);
  }
}
