import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'allmaile';
  public messageType:string='bug'
  public yearList:number[]=[]
  public dayList:number[]=[]
  public monthList:number[]=[]
  public intervalList:any[]=[2020,1,1,2020,12,31]
  public messageList:any[]=[]
  public keyWords:string=''
  public selectAll:boolean=false
  public messageClickIndex:number=-1
  constructor(){
    this.createYearList()
    this.createMonthDay(12)
    this.createMonthDay(31)
  },
    initData(){
          this.messageList=[{
      message:'dsfa',
      name:'amdog',
      date:'2020'
    },
    {
      message:'dsfa',
      name:'amdog',
      date:'2020'
    },
    {
      message:'dsfrtfyguhijokrdtfgyuhhhierlafdsjkerudjkfwhi3ehwiufhuiwAHBFUBGWAIUHFIEHSDAJKFDHSKAJHFJKa',
      name:'amdog',
      date:'2020'
    },
    {
      message:'dsfa',
      name:'amdog',
      date:'2020'
    }]
  }
  createYearList(){
    let count:number=5
    while(count!=-1){
      let nowYear:number=(new Date()).getFullYear()
      this.yearList.push(nowYear-count)
      count--
    }
  }
  createMonthDay(count){
    let endFlag=count
    while (count!=0) {
      endFlag==12? this.monthList.push(count):this.dayList.push(count)
      count--
    }
  }
  pageUp(){

  }
  pageDown(){

  }
  Response(index){
    alert(index)
  }
  showMore(index,callResponse){
    index==this.messageClickIndex? this.messageClickIndex=-1:this.messageClickIndex=index
  }
  toSelectAll(){
    this.selectAll=!this.selectAll
  }
}
