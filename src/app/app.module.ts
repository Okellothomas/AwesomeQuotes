import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlidesComponent } from './slides/slides.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { GoalDeleteComponent } from './goal-delete/goal-delete.component';
import { DateCountPipe } from './date-count.pipe';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HiglightDirective } from './higlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    SlidesComponent,
    QuotesComponent,
    QuoteFormComponent,
    GoalDeleteComponent,
    DateCountPipe,
    QuoteDetailsComponent,
    HiglightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
