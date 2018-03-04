import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progess',
  templateUrl: './progess.component.html',
  styles: []
})
export class ProgessComponent implements OnInit {

  valorProgreso1:number=50;
  valorProgreso2:number=25;

  constructor() { }

  ngOnInit() {
  }


}
