import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { BingoCardComponent } from './components/bingo-card/bingo-card.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ModalSettingComponent } from './components/modals/modal-setting/modal-setting.component';
import { ModalAddCardComponent } from './components/modals/modal-add-card/modal-add-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    BingoCardComponent,
    ModalSettingComponent,
    ModalAddCardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
