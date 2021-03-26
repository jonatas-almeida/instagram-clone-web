import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/interfaces/Post';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss']
})
export class ModalAddComponent implements OnInit {


  constructor(private modalService: NgbModal,  private fb: FormBuilder) { }

  ngOnInit(): void {
   
  }


}
