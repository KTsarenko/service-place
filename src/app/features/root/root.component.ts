import { Component, OnInit } from '@angular/core';
import {fbService} from '../../core/services/fb.service';

@Component({
  selector: 'app-home',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  constructor(private _fb: fbService) { }

  ngOnInit() {
      this._fb.signedUser();
  }

}
