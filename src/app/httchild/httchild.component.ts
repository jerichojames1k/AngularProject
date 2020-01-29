import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Info } from './inform';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-httchild',
  templateUrl: './httchild.component.html',
  styleUrls: ['./httchild.component.css']
})
export class HttchildComponent implements OnInit {

  @Input() registered:Array<Info>; 
  @Output() edit = new EventEmitter();
 
  constructor() {
   }

  ngOnInit() {
  
  }

  onEdit(info) {  
    this.edit.emit(info);
  }

  onDelete(){
    alert('deleted!')
  }
 
}
