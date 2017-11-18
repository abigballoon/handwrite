import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { routing } from './routes';

import { CharacterComponent } from './character/character.component';
import { FontFamilyDirective } from './character/directive';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    FontFamilyDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    routing,
    NgbModule.forRoot(),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
