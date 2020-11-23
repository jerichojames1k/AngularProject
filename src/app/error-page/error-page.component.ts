import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
import { Component } from '@angular/core';
import { CommonService } from './common.service';
import { Info } from './Info/info';
import { AngularFileUploaderConfig } from "angular-file-uploader";
import { Observable } from 'rxjs'
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id: string;
  name: string;
  address: string;
  images: string;
  data: Info;
  title = 'AngularFileUpload';
  //target:EventTarget;
 
  // selectedFiles: FileList;
  // currentFile: File;
  // progress = 0;
  // message = '';

  // fileInfos: Observable<any>;
  Repdata;
  constructor(private newService: CommonService, private sanitizer: DomSanitizer) {
    this.data = new Info();
  }

  ngOnInit() {
    this.newService.GetUser().subscribe(
      data => {
        this.Repdata = data;
        for (let i = 0; i < this.Repdata.length; i++) {
          this.Repdata[i].imagefile = this.sanitizer.bypassSecurityTrustUrl(this.Repdata[i].imagefile)
        }

        // const file = new Blob([data[0].imagefile],{ type: 'application/octet-stream' });
        // const fileURL = window.URL.createObjectURL(data[0].imagefile);
        // console.log("file:",fileURL)
        // const link = document.createElement('a');
        // link.href = fileURL;
        // link.download = 'sample.png';
        // link.click()
        // if (window.navigator.msSaveOrOpenBlob) {
        //      window.navigator.msSaveOrOpenBlob(file, fileURL.split(':')[1] + '.pdf');
        // } else {
        //      window.open(fileURL);
        // }

      })


  }


  //Download the file when button is Click
  downloadFile(image, name) {
    console.log("downloaded!")
    var img = image.changingThisBreaksApplicationSecurity.slice(image.changingThisBreaksApplicationSecurity.indexOf(',') + 1, image.changingThisBreaksApplicationSecurity.length);
    var type = image.changingThisBreaksApplicationSecurity.slice(image.changingThisBreaksApplicationSecurity.indexOf(':') + 1, image.changingThisBreaksApplicationSecurity.indexOf(';'));
     
    let byteCharacters = atob(img);
    let byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    let byteArray = new Uint8Array(byteNumbers);

    let blob = new Blob([byteArray], { "type": type });

    if(navigator.msSaveBlob){
        let filename =name;
        navigator.msSaveBlob(blob, filename);
    } else {
    let link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.setAttribute('visibility','hidden');
    link.download =name;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
     } 


  }



 //View the data when view button is clicked!
  viewFile(image, name) {
    var img = image.changingThisBreaksApplicationSecurity.slice(image.changingThisBreaksApplicationSecurity.indexOf(',') + 1, image.changingThisBreaksApplicationSecurity.length);
    var type = image.changingThisBreaksApplicationSecurity.slice(image.changingThisBreaksApplicationSecurity.indexOf(':') + 1, image.changingThisBreaksApplicationSecurity.indexOf(';'));
    var TypeOfImage=image.changingThisBreaksApplicationSecurity.slice(image.changingThisBreaksApplicationSecurity.indexOf('/') + 1, image.changingThisBreaksApplicationSecurity.indexOf(';'));
     console.log(TypeOfImage)
    let byteCharacters = atob(img);
    let byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    let byteArray = new Uint8Array(byteNumbers);

    let blob = new Blob([byteArray], { "type": type });

    let link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, link.href.split(':')[1] + '.jpeg');
    } else {
      window.open(link.href);
    }

  }


  uploadFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.images = event.target.result as string;
      }
    }
  }

  //  // ,isValid: boolean
  onSave = function (user) {
    this.data.id = this.id;
    this.data.name = this.name;
    this.data.address = this.address;
    this.data.imagefile = this.images;
    console.log(this.data)
    this.newService.saveUser(this.data)
      .subscribe(data => {
        alert(data.data);
        this.ngOnInit();
      }
        , error => this.errorMessage = error)
  }

  Update = function () {
    this.data.id = this.id;
    this.data.name = this.name;
    this.data.address = this.address;
    this.data.imagefile = this.images;
    console.log('Data:', this.data);
    this.newService.updateUser(this.data)
      .subscribe(data => {
        alert(data.data);
        this.ngOnInit();
      }
        , error => this.errorMessage = error)
  }

  edit = function (kk) {
    this.id = kk._id;
    this.name = kk.name;
    this.address = kk.address;
    this.images = kk.imagefile;
  }

  delete = function (id) {
    this.newService.deleteUser(id)
      .subscribe(data => { alert(data.data); this.ngOnInit(); }, error => this.errorMessage = error)
  }

  // upload(): void {
  //   this.progress = 0;
  //   this.currentFile = this.selectedFiles.item(0);
  //   console.log(this.currentFile)
  //   this.newService.upload(this.currentFile).subscribe(
  //     event => {
  //       if (event.type === HttpEventType.UploadProgress) {
  //         this.progress = Math.round(100 * event.loaded / event.total);
  //       } else if (event instanceof HttpResponse) {
  //         this.message = event.body.message;
  //         this.fileInfos = this.newService.getFiles();
  //       }
  //     },
  //     err => {
  //       this.progress = 0;
  //       this.message = 'Could not upload the file!';
  //       this.currentFile = undefined;
  //     });
  //   this.selectedFiles = undefined;
  // }


}
