import { Injectable } from '@angular/core';
import {PaxstoreSdk} from 'capacitor-paxstore-sdk';

@Injectable({
  providedIn: 'root'
})
export class SdkService {

  constructor() { }

  async init(){
    const info = await PaxstoreSdk.init({appkey: 'asdasd', appSecret: 'asdasda'});
    alert(JSON.stringify(info));
  }
}
