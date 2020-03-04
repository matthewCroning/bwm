import { MapService } from './map.service';
import { MapComponent } from './map.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { CamelizePipe } from 'ngx-pipes';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MapComponent
  ],
  exports:[
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDxKSwN99mTn24fVV5Hwi2r3WsdOJS0hiY'
    }),
    CommonModule
  ],
  providers: [
      MapService,
      CamelizePipe
    ],
  bootstrap: []
})
export class MapModule { }
