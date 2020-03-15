import { RentalDetailBookingComponent } from './rental-detail/rental-detail-booking/rental-detail-booking.component';
import { AuthGuard } from './../auth/shared/auth.guard';
import { MapModule } from './../common/map/map.module';
import { UppercasePipe } from './../common/pipes/uppercase.pipe';
import { RentalService } from './../shared/rental.service';
import { RentalComponent } from './rental.component';
import { NgModule } from '@angular/core';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { CommonModule } from '@angular/common';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule } from 'ngx-pipes';
import { Daterangepicker } from'ng2-daterangepicker';

const routes: Routes = [
    { path : 'rentals',
      component: RentalComponent,
      children: [
        {path: '', component: RentalListComponent},
        {path: ':rentalId', component: RentalDetailComponent, canActivate: [AuthGuard]}
      ]
    }
   
  ]
  

@NgModule({
    declarations: [
        RentalListComponent,
        RentalListItemComponent,
        RentalComponent,
        RentalDetailComponent,
        RentalDetailBookingComponent,
        UppercasePipe
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule,
        NgPipesModule,
        MapModule,
        Daterangepicker

    ],
    providers: [
        RentalService,
        AuthGuard
    ]
})
export class RentalModule {

}