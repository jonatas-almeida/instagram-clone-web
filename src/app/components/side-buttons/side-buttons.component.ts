import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-side-buttons',
  templateUrl: './side-buttons.component.html',
  styleUrls: ['./side-buttons.component.scss']
})
export class SideButtonsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  //Abre o modal de adicionar os posts
  openModal(content){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

}
