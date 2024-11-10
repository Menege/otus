import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import { TagListComponent } from './tag-list/tag-list.component';
import { TagFormComponent } from './tag-form/tag-form.component';

@NgModule({
  declarations: [
    TagListComponent,   
    TagFormComponent    
  ],
  imports: [
    CommonModule,       
    ReactiveFormsModule 
  ],
  exports: [
    TagListComponent,   
    TagFormComponent
  ]
})
export class TagsModule { }
