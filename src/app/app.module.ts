import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MyCalculatorModule } from './calculator/my-calculator.module';
import { MyNavigation } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavigation
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MyCalculatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
