import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../service/data.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  constructor(private dataService: DataService, public dialog: MatDialog) { }
  locations: any;
  searchItems: any;
  showLoading: boolean;

  ngOnInit() {
    console.log(" init here");
    this.getlocationData();
  }

  getlocationData(): void {
    this.showLoading = true;
    this.dataService.getLocations()
      .subscribe(locations => {
        this.locations = locations;
        this.showLoading = false;
      });
  }

  showDetails(loc): void {
    if (loc % 2 == 0)
      this.getStorageItems('box');

    else
      this.getStorageItems('table');

  }

  getStorageItems(item) {
    this.showLoading = true;
    this.dataService.getStorageItems(item)
      .subscribe(searchItems => {
        this.showLoading = false;
        this.searchItems = searchItems;
        this.openDialog(this.searchItems);
      });
  }

  openDialog(searchItems) {
    this.dialog.open(DialogDataExampleDialog, {
      data: searchItems
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}

