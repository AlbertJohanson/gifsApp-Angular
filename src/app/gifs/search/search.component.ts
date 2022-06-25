import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsServicesService } from '../services/gifs-services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private GifsServicesService: GifsServicesService) { }

  ngOnInit(): void {
  }

  search() {
  const value =   this.txtSearch.nativeElement.value;

  if(value.trim().length === 0) {
    return
  }

  this.GifsServicesService.searchGifs(value);

  this.txtSearch.nativeElement.value = '';

  }

}
