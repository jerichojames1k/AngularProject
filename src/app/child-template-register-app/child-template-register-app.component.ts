import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Info } from './info';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AllserviceService } from '../allservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child-template-register-app',
  templateUrl: './child-template-register-app.component.html',
  styleUrls: ['./child-template-register-app.component.css']
})
export class ChildTemplateRegisterAppComponent implements OnInit {
  @Input() registered:Array<Info>; 
  @Output() edit = new EventEmitter();
 
  constructor(
    private AllserviceService:AllserviceService,
    private route:Router
    ) {
   }

  ngOnInit() {
  
  }

  onEdit(info) {
    this.edit.emit(info);
  }

  onDelete(id){
    this.AllserviceService.deleteUser(id).subscribe(data => {
      console.log(data)
      if(confirm("Are you sure you want to delete this item?") == true){
        this.registered.splice(id,1);
       }
      
      });
  }
 
}
