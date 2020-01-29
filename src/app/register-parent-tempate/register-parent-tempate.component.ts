import { Component, OnInit } from '@angular/core';
import { Info } from '../child-template-register-app/info';
import { AllserviceService } from '../allservice.service';

@Component({
  selector: 'app-register-parent-tempate',
  templateUrl: './register-parent-tempate.component.html',
  styleUrls: ['./register-parent-tempate.component.css']
})
export class RegisterParentTempateComponent implements OnInit {
  tempHolder=[];
  regInfos:Array<Info>;
  data:Info;
  studentID:number=0;
  editing: boolean = false;
  nextId:number=0;
  ngname: string
  ngusername: string;
  ngemail: string;
  
  constructor(private AllserviceService: AllserviceService) {
    this.regInfos = new Array<Info>();
    this.data = new Info();
  }

  ngOnInit() {
    this.AllserviceService.getPost().subscribe(res => {
      this.regInfos=res;
    });
  }

  onPost(datas) {
    if (this.editing == false){
    this.nextId=this.regInfos.length+1;
      alert("The next Id is:"+this.nextId)
      this.AllserviceService.addStudent(datas.value)
        .subscribe(res => {
          res.id=this.nextId;
          console.log("New id of Res:"+res.id)
          //this.res.id=this.nextId;
          this.regInfos.push(res)
        });
    }
        
    else {
        if(this.studentID==1){
          this.AllserviceService.onUpdate(this.studentID,datas.value)
        .subscribe(updated => {
          console.log("upadtaed:"+updated.id)
          updated.id=this.studentID;
          this.regInfos[this.studentID-1]=updated;
        });

      }
        else{
          this.AllserviceService.onUpdate(this.studentID,datas.value)
        .subscribe(updated => {
          alert("its updated")
          this.regInfos[this.studentID-1]=updated;
        })
        }
    }

  }

  onClear() {
    this.ngusername = '';
    this.ngname = '';
    this.ngemail = '';
  }

  editInfo(info) {
    alert('The id is:'+info.id)
    console.log(info)
    this.ngusername = info.username;
    this.ngname = info.name;
    this.ngemail = info.email;

    this.editing = true;
    this.data.id=info.id;
    this.studentID =this.data.id;
    alert("StudentId:"+this.studentID)
    //this.regInfos[this.studentID] = new Info();
    

    // this.regInfos = this.regInfos.filter(item => {
    //   if (item == info) {
    //     return item;
    //   }
    // })

  }
}
