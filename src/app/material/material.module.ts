import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule, MatListIconCssMatStyler} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule, MatFormField} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'

const MaterialComponenets = [
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
  
]

@NgModule({
  imports: [MaterialComponenets],
  exports:[MaterialComponenets],
})
export class MaterialModule { }
