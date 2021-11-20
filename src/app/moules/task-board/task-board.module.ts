import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskBoardComponent } from './task-board.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TaskBoardService } from './services/task-board.service';
import { TaskCardPipe } from './pipes/task-card.pipe';
import { CardDetailsDialogComponent } from './components/card-details-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
  declarations: [
    TaskBoardComponent,
    TaskCardPipe,
    CardDetailsDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {
          path: "",
          component: TaskBoardComponent
        }
      ]
    ),
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
  providers: [
    TaskBoardService
  ]
})
export class TaskBoardModule { }