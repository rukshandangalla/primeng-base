import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AccordionModule } from "primeng/accordion";

@NgModule({
  imports: [CommonModule, AccordionModule],
  exports: [AccordionModule],
  declarations: []
})
export class PrimengModule {}
