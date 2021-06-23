import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//installed modules
import { MaterialModule } from './material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';

//custom components
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { CryptoContainerComponent } from './components/crypto-container/crypto-container.component';
import { CryptoDashboardComponent } from './components/crypto-dashboard/crypto-dashboard.component';
import { TrendChartComponent } from './components/trend-chart/trend-chart.component';
import { AddCryptoComponent } from './components/add-crypto/add-crypto.component';
import { CryptoSidebarComponent } from './components/crypto-sidebar/crypto-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CryptoContainerComponent,
    CryptoDashboardComponent,
    TrendChartComponent,
    AddCryptoComponent,
    CryptoSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
