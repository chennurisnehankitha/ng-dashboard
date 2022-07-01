import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ApplyComponent } from './features/apply/apply.component';
import { GiveComponent } from './features/give/give.component';
import { HomeComponent } from './features/home/home.component';
import { RequestInfoComponent } from './features/request-info/request-info.component';
import { VisitComponent } from './features/visit/visit.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {TableModule} from 'primeng/table';
import { CarService } from './car.service';
import { HttpClientModule } from '@angular/common/http';
import {AccordionModule} from 'primeng/accordion';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {InputSwitchModule} from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { AppUtil } from './app.util';
import {PasswordModule} from 'primeng/password';
import {KeyFilterModule} from 'primeng/keyfilter';
import { SelectedItemDirective } from './directives/selected-item.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SideNavComponent,
    VisitComponent,
    GiveComponent,
    RequestInfoComponent,
    ApplyComponent,
    HomeComponent,
    SelectedItemDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    FormsModule, 
    AutoCompleteModule,
    DropdownModule,
    CalendarModule,
    CascadeSelectModule,
    TableModule,
    HttpClientModule,
    AccordionModule,
    ToggleButtonModule,
    InputSwitchModule,
    InputTextModule,
    PasswordModule,
    KeyFilterModule
  ],
  providers: [CarService, AppUtil],
  bootstrap: [AppComponent],
})
export class AppModule {}
