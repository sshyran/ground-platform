/**
 * Copyright 2019 Google LLC
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

import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {JobDialogModule} from 'app/components/job-dialog/job-dialog.module';
import {DrawingToolsModule} from 'app/components/drawing-tools/drawing-tools.module';
import {MainPageComponent} from 'app/components/main-page/main-page.component';
import {MapModule} from 'app/components/map/map.module';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {NgModule} from '@angular/core';
import {SidePanelModule} from 'app/components/side-panel/side-panel.module';
import {SurveyHeaderModule} from 'app/components/main-page/survey-header/survey-header.module';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    DrawingToolsModule,
    FlexLayoutModule,
    JobDialogModule,
    MapModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    SidePanelModule,
    SurveyHeaderModule,
  ],
})
export class MainPageModule {}
