import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
/**
 * Generated class for the NotifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notify',
  templateUrl: 'notify.html',
})
export class NotifyPage {
@ViewChild("Unameinput") Uname;
@ViewChild("PWDinput") Pname;
  constructor(public navCtrl: NavController, public navParams: NavParams,alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotifyPage');
  }
  loginUser(){
    if(this.Uname.value=="admin" && this.Pname.value=="1234"){
      alert("login ok");
    }else if(this.Uname.value=="" || this.Pname.value=="" ){
      alert("กรุณากรองข้อมุล !! ให้ครบครับ");
    }else{
      alert("ข้อมูลไม่ถูกต้อง");
    }
    //alert("username "+this.Uname.value);
    //alert("username "+this.Pname.value);
  }
}
