import { Component, OnInit } from '@angular/core';
import { Info } from '../child-template-register-app/info';
@Component({
  selector: 'app-httparent',
  templateUrl: './httparent.component.html',
  styleUrls: ['./httparent.component.css']
})
export class HttparentComponent implements OnInit {
  regInfos: Array<Info>;
  data: Info;
  none: Info;
  id: number = 0;
  index: number;
  editing: boolean = false;

  ngfirstname: string
  nglastname: string;
  ngage: number;
  nggender: string;
  ngemail: string;
  ngpassword: string;
  ngstreet: string;
  temp: Array<Info>;

  constructor() {
    this.regInfos = new Array<Info>();
    this.temp = Array<Info>();
    this.data = new Info();
    this.temp = new Array<Info>();
  }

  ngOnInit() {


  }

  onTemplate(del) {
    if (this.editing == false) {
      alert("first add!")
      console.log(del)
      this.regInfos.push(del.value);
      del.form.reset();
      this.editing = false;
    }
    else {
      this.regInfos[this.index] = del.value;
      del.form.reset();

    }

  }

  editInfo(info) {
    alert("testing!")
    this.index = this.regInfos.indexOf(info);
    this.editing = true;
    alert(this.index)
    this.regInfos[this.index] = new Info();
    this.ngfirstname = info.firstname;
    this.nglastname = info.lastname;
    this.nggender = info.gender;
    this.ngage = info.age;
    this.ngstreet = info.street;
    this.ngpassword = info.password;
    this.ngemail = info.email;

    this.regInfos = this.regInfos.filter(item => {
      if (item != info) {
        return item;
      }
    })
  }
}
