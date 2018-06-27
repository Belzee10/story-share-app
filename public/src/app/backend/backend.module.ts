import { AppRoutingModule } from './../app-routing/app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CategoryComponent } from './category/category.component';
import { StoryComponent } from './story/story.component';
import { UserComponent } from './user/user.component';
import { CategoryNewComponent } from './category/category-new/category-new.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';

@NgModule({ 
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    CategoryComponent,
    StoryComponent,
    UserComponent,
    CategoryNewComponent,
    CategoryListComponent,
    CategoryEditComponent    
  ]  
})
export class BackendModule { }
