/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ColorPickerComponent} from 'app/components/color-picker/color-picker.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ColorCircleModule} from 'ngx-color/circle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [ColorPickerComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    ColorCircleModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
  ],
  exports: [ColorPickerComponent],
})
export class ColorPickerModule {}
