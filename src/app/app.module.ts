import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { PrimengModule } from "./primeng/primeng.module";

@NgModule({
  imports: [BrowserModule, FormsModule,BrowserAnimationsModule, PrimengModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
