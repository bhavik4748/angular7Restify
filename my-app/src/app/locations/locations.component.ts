import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  constructor(private dataService: DataService) { }


  locations: any;

  ngOnInit() {
    console.log(" init here");
    this.getlocationData();
  }

  getlocationData(): void {
    this.dataService.getLocations()
      .subscribe(locations => {
        this.locations = locations;
      });
  }

}
