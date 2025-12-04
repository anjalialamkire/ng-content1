import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss']
})
export class GetConfirmComponent implements OnInit {

@Input() show : boolean = false
 @Output() emitShowFlag : EventEmitter<boolean> = new EventEmitter<boolean>()
 @Output() RemoveApiFlag : EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }
   
  closeModal(RemoveApiFlag : boolean){
     this.show = false
     this.emitShowFlag.emit(false)
     this.RemoveApiFlag.emit(RemoveApiFlag)
  }
 
}
