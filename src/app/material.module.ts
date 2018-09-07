import { NgModule } from '@angular/core';
import {MatButtonModule, 
        MatCheckboxModule, 
        MatIconModule, 
        MatFormFieldModule, 
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MAT_DATE_LOCALE,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, 
    MatCheckboxModule, 
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule
  ],
  exports: [MatButtonModule, 
    MatCheckboxModule, 
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule
  ],
  providers:[
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ]
})
export class MaterialModule { }