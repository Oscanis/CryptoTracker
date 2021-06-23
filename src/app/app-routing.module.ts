import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CryptoContainerComponent } from './components/crypto-container/crypto-container.component';
import { TrendChartComponent } from './components/trend-chart/trend-chart.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'cryptos', component: CryptoContainerComponent},
  {path: 'chart', component: TrendChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
