import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  public f: FormGroup;
  private body: any;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.f = this.fb.group({
      'first':['', Validators.required],
      'last':['', Validators.required]
    });

    this.f.valueChanges
      .subscribe(value => {
        console.log(value);
        this.body = value;
      });
  }

  loginForm() {
    console.log(this.body);
  }
}
