import { Component, OnInit } from '@angular/core';
import { GifsServicesService } from '../services/gifs-services.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent  {

  constructor (private gifsService:GifsServicesService) { }


  get results() {
   return  this.gifsService.results
  }

}
