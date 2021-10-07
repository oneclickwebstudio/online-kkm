import { Component } from '@angular/core';
import {SdkService} from '../sdk.service';
import {PaxstoreSdk} from 'capacitor-paxstore-sdk';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private sdk: SdkService
  ) {}

  async init(){
    PaxstoreSdk.init({appkey: 'asdasd', appSecret: 'asdasda'}).then((res)=>{
      alert(JSON.stringify(res));
    }).catch((err)=>{
      alert(JSON.stringify(err));
    });
  }

}
