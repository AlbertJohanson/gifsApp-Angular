import { Component, OnInit } from '@angular/core';
import { GifsServicesService } from '../../gifs/services/gifs-services.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  {

  constructor (private GifsServicesService:GifsServicesService) {}

  get historyList() {
    return this.GifsServicesService.History;
  }


  SearchGif(query: string) {
    this.GifsServicesService.searchGifs(query);
  }

}
