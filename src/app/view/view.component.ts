import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AllserviceService } from "../allservice.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
    id:number
    userInfo:Array<any>= []

  constructor(
    private router: Router,
    private activeroute:ActivatedRoute,
    private http:AllserviceService
  ) { }

  ngOnInit() {
    this.id = this.activeroute.snapshot.params['id']
    this.http.getUser(this.id).subscribe(res=>{
      this.userInfo.push(res)
    })

  }

}
