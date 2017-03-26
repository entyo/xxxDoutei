import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DouteiFormComponent } from './doutei-form/doutei-form.component';
import { DouteiSimulatorComponent } from './doutei-simulator/doutei-simulator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DouteiFormComponent, DouteiSimulatorComponent],
  exports: [DouteiFormComponent, DouteiSimulatorComponent]
})
export class DouteiModule { }
