import { Component, OnInit } from '@angular/core';
import {Upload} from "../../core/models/upload";
import {UploadService} from "../../core/services/upload.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})

export class UploadComponent implements OnInit {

    selectedFiles: FileList;
    currentUpload: Upload;

    constructor(private upSvc: UploadService) { }


    ngOnInit() {
    }

    detectFiles(event) {
        this.selectedFiles = event.target.files;
        console.log(this.selectedFiles);
    }

    // uploadSingle() {
    //     let file = this.selectedFiles.item(0)
    //     this.currentUpload = new Upload(file);
    //     // this.upSvc.pushUpload(this.currentUpload)
    // }
    //
    // uploadMulti() {
    //     let files = this.selectedFiles
    //     console.log(files);
    //     // let filesIndex = _.range(files.length)
    //     // _.each(filesIndex, (idx) => {
    //     //     this.currentUpload = new Upload(files[idx]);
    //     //     // this.upSvc.pushUpload(this.currentUpload)}
    //     // )
    // }

}
