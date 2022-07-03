import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  @Input () color= 'purple';
  @Input() size = '30px';
 

  constructor() { }

  ngOnInit(): void {
  }
  

}
