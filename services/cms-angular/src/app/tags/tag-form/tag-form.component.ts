import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.scss']
})
export class TagFormComponent implements OnInit {
  tagForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.tagForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.tagForm.valid) {
      const tagData = this.tagForm.value;
      console.log('Данные тега:', tagData);
    }
  }
}
