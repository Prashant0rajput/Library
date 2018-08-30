import { Component,ViewChild, ViewEncapsulation,  VERSION, OnInit,  } from '@angular/core';
import { NgxZxingComponent } from '@zxing/ngx-scanner';
import { AngularFireDatabase } from 'angularfire2/database';

import { Result } from '@zxing/library';

@Component({
  selector: 'app-issue-books',
  templateUrl: './issue-books.component.html',
  styleUrls: ['./issue-books.component.css']
})
export class IssueBooksComponent implements OnInit {
bookID : String;
studentID : String;

bookIssueArray =  [];

  constructor(public db: AngularFireDatabase) {

  		


   }

  ngVersion = VERSION.full;

    @ViewChild('scanner')
    scanner: ZXingScannerComponent;

    hasCameras = false;
    hasPermission: boolean;
    qrResultString: string;

    availableDevices: MediaDeviceInfo[];
    selectedDevice: MediaDeviceInfo;

    ngOnInit(): void {

        this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
            this.hasCameras = true;

            console.log('Devices: ', devices);
            this.availableDevices = devices;

            // selects the devices's back camera by default
            // for (const device of devices) {
            //     if (/back|rear|environment/gi.test(device.label)) {
            //         this.scanner.changeDevice(device);
            //         this.selectedDevice = device;
            //         break;
            //     }
            // }
        });

        this.scanner.camerasNotFound.subscribe((devices: MediaDeviceInfo[]) => {
            console.error('An error has occurred when trying to enumerate your video-stream-enabled devices.');
        });

        this.scanner.permissionResponse.subscribe((answer: boolean) => {
          this.hasPermission = answer;
        });

    }

    handleQrCodeResult(resultString: string) {
        console.log('Result: ', resultString);
        this.qrResultString = resultString;
        this.bookIssueArray.push(this.qrResultString);
        this.studentID = this.bookIssueArray[0];
        console.log(this.bookIssueArray);
    }

    onDeviceSelectChange(selectedValue: string) {
        console.log('Selection changed: ', selectedValue);
        this.selectedDevice = this.scanner.getDeviceById(selectedValue);
    }

    issue()
    {

    	for (var i = 1; i < this.bookIssueArray.length; i++) {
    		const itemsRef = this.db.list('books/'+ this.bookIssueArray[i]);

    		itemsRef.set("issuedTo" : this.studentID);

    		
    	};
        // this.bookIssueArray = [];
        //     this.studentID = "";
    		
    }
}


