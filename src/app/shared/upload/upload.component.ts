import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

import {fbService} from '../../core/services/fb.service';
import {forkJoin} from 'rxjs/index';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

    @Output() onChange = new EventEmitter<any>();
    @ViewChild('input') input: ElementRef;

  constructor(private _fbService: fbService) { }

  ngOnInit() {

  }

  public triggerFalseClick () {
      if (this.input) {
          this.input.nativeElement.click();
      }
  }

  public pickFile(event) {
      const files = event.target.files;
      for (const file in files) {
          if (files.hasOwnProperty(file)) {
              this._fbService.uploadFiles(files[file])
                  .then(res => {
                      res.ref.getDownloadURL().then(url => {
                          this.onChange.emit(url);
                  });
              });
          }
      }
  }
}
