import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { MatButtonModule } from '@angular/material/button';
import { ServicePresentationComponent } from './service-presentation/service-presentation.component';
import { PlaceCardComponent } from './place-card/place-card.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    DashboardPageComponent,
    ServicePresentationComponent,
    PlaceCardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    NzInputModule,
    MatButtonModule,
    NzButtonModule,
    NzIconModule,
  ],
})
export class DashboardModule {}
