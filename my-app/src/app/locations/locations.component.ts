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
  searchItems: any;

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

  showDetails(loc): void {
    if (loc % 2 == 0) {
      this.dataService.getStorageItems('box')
        .subscribe(searchItems => {
          this.searchItems = searchItems;
        });
    }

    else {
      this.dataService.getStorageItems('table')
        .subscribe(searchItems => {
          this.searchItems = searchItems;
        });
    }
  }

}
