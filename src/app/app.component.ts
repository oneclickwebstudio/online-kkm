import {Component, OnInit} from '@angular/core';
import {SdkService} from './sdk.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private sdk: SdkService
  ) {
  }

  ngOnInit() {
    this.sdk.init().then();
  }

}
