import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlidesComponent } from './slides/slides.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { GoalDeleteComponent } from './goal-delete/goal-delete.component';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SlidesComponent,
    QuotesComponent,
    QuoteFormComponent,
    GoalDeleteComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
