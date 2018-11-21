import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { RajuComponent } from './raju/raju.component';
import { JaiComponent } from './jai/jai.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    RajuComponent,
    JaiComponent,
    CustomDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
