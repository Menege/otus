import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { TagListComponent } from './tags/tag-list/tag-list.component';
import { TagFormComponent } from './tags/tag-form/tag-form.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserFormComponent } from './users/user-form/user-form.component';

const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/add', component: TaskFormComponent },
  { path: 'tasks/edit/:id', component: TaskFormComponent },
  { path: 'tags', component: TagListComponent },
  { path: 'tags/add', component: TagFormComponent },
  { path: 'tags/edit/:id', component: TagFormComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/edit/:id', component: UserFormComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};
