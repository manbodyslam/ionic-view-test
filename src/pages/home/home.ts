import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {NotifyPage} from '../notify/notify';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

itemsRef: AngularFireList<any>;
 items: Observable<any[]>;
 key:string;
 topic:string;
 dueDate:string;
 isToogle:boolean = false;
 constructor(private af: AngularFireDatabase,
 public navCtrl: NavController,
 public navParams: NavParams) {}
 ionViewWillEnter() {
 this.showData();
 }
//แสดงขอมูลทั้งหมดจากฐานขอมูล
 showData() {
 this.itemsRef = this.af.list('/');
 // Use snapshotChanges().map() to store the key
 this.items = this.itemsRef.snapshotChanges().map(changes => {
 return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
 });
 }
//เลือก item พรอมทั้งกําหนดคาใหกับ input ฟอรม และเก็บ key ไวดวยสําหรับการแกไข
 select(item) {
 //console.log(item);
 this.topic = item.note.topic;
 this.dueDate = item.note.dueDate;
 this.key = item.key;
 }
//บันทึกขอมูล
104
 save
(note: any) {
 //console.log(blog);
 this
.itemsRef
.push({note});
 this
.isToogle = false
;

}
//อัปเดตขอมูลตาม key ที่สงมา
 update
(note: any) {
 if
(this
.key) {
 this
.itemsRef
.update
(this
.key, {note});
 this
.isToogle = false
;

}

}
 //ลบขอมูลแตละรายการตาม key ที่เลือก
 delete
(item
:any) {
 this
.itemsRef
.remove
(item
.key);
 this
.isToogle = false
;

}
 /*deleteAll() { //ลบทั้งหมด
 this.items.remove();
 this.isToogle = false;
 }*/
 //เปน method ที่มีไวซอนหรือแสดงฟอรม
 openForm() {
 this
.isToogle = !this
.isToogle;


  }
  goTopage() {
    this.navCtrl.push(NotifyPage);
    }
}
