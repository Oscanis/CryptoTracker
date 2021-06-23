//Material inputs are in separate file for easier maintenance

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
    imports: [MatButtonModule,
              MatFormFieldModule,
              MatInputModule,
              MatIconModule,
              MatToolbarModule,
              MatDialogModule,
              MatTabsModule,
              MatSelectModule,
              MatCheckboxModule
            ],
    
    exports: [MatButtonModule,
              MatFormFieldModule,
              MatInputModule,
              MatIconModule,
              MatToolbarModule,
              MatDialogModule,
              MatTabsModule,
              MatSelectModule,
              MatCheckboxModule
            ],
})
export class MaterialModule {};