import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { NgModule } from '@angular/core';
import {

  MatDialogModule,
  MatProgressSpinnerModule

} from '@angular/material';

@NgModule({
  exports: [
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ]
})
export class DemoMaterialModule { }


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */