import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../service/data.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    this.getlocationData();
  }

  getlocationData(): void {
    this.showLoading = true;
    this.dataService.getLocations()
      .subscribe(locations => {
        this.locations = locations;
        this.showLoading = false;
      },
        err => {
          console.log('Something went wrong!');
          this.showLoading = false;
        });
  }

  showDetails(loc): void {
    if (loc % 2 === 0) {
      this.getStorageItems('box');
    } else {
      this.getStorageItems('table');
    }
  }

  getStorageItems(item) {
    this.showLoading = true;
    this.searchItems = null;
    this.dataService.getStorageItems(item)
      .subscribe(searchItems => {
        this.showLoading = false;
        this.searchItems = searchItems;
        this.openDialog(this.searchItems);
      },
        err => {
          console.log('Something went wrong!');
          this.showLoading = false;
          this.openDialog(this.searchItems);
        }
      );
  }

  openDialog(searchItems) {
    this.dialog.open(DialogDataExampleDialog, {
      data: searchItems,
      width: '80%',
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

