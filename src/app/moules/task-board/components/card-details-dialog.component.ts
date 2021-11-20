
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Issues } from '../models/task.board.interface';

@Component({
    selector: 'app-card-details',
    templateUrl: './card-details-dialog.component.html',
    styleUrls: ['./card-details-dialog.component.scss']
})

export class CardDetailsDialogComponent {
  formGroup: FormGroup;
  description = '';
  ckEditorConfig = {
    toolbar: [
      { name: 'clipboard', items: ['Cut', 'Copy', 'Paste', '-', 'Undo', 'Redo'] },
      { name: 'links', items: ['Link', 'Unlink'] },
      { name: 'basicstyles', items: ['Bold', 'Italic', 'Strike', '-', 'TextColor', 'BGColor', '-', 'RemoveFormat'] },
      { name: 'paragraph', items: ['NumberedList', 'BulletedList', 'Blockquote', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
      { name: 'styles', items: ['Format'] }
    ],
    resize_enabled: false,
    extraPlugins: 'colorbutton,colordialog',
    entities: false,
    basicEntities: true,
    entities_greek: false,
    entities_latin: false,
    removePlugins: 'elementspath',
    fullPage: true,
    applyCustomRules: false
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data: Issues, private fb: FormBuilder) {
    this.description = data?.fields?.issuetype?.description;
    this.formGroup = this.fb.group({
      summary: data?.fields?.summary,
      description: this.description,
      labels:  ''
    });
  }
}