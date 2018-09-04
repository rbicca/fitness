import { NgModule } from '@angular/core';
import {MatButtonModule, 
        MatCheckboxModule, 
        MatIconModule, 
        MatFormFieldModule, 
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MAT_DATE_LOCALE,
        MatSidenavModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, 
    MatCheckboxModule, 
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule
  ],
  exports: [MatButtonModule, 
    MatCheckboxModule, 
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule
  ],
  providers:[
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ]
})
export class MaterialModule { }