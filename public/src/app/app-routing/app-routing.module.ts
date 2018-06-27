import { CategoryEditComponent } from './../backend/category/category-edit/category-edit.component';
import { CategoryNewComponent } from './../backend/category/category-new/category-new.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

// Components
import { HomePageComponent } from './../frontend/home-page/home-page.component';
import { UserComponent } from './../backend/user/user.component';
import { CategoryComponent } from './../backend/category/category.component';
import { StoryComponent } from '../backend/story/story.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: '', pathMatch: 'full', redirectTo: '' },

  //backend
  { path: 'categories', component: CategoryComponent },
  { path: 'categories/new', component: CategoryNewComponent },
  { path: 'categories/edit/:id', component: CategoryEditComponent },
  { path: 'stories', component: StoryComponent },
  { path: 'users', component: UserComponent },
];

@NgModule({
  exports: [ 
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)    
  ],
  declarations: []
})
export class AppRoutingModule { }
