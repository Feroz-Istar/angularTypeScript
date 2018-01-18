import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modaltest',
  templateUrl: './modaltest.component.html',
  styleUrls: ['./modaltest.component.css']
})
export class ModaltestComponent implements OnInit {
  closeResult: string;
  @Output() childIsOpen = new EventEmitter<boolean>();

  constructor(private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content).result.then((result) => {

      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {


      return `with: ${reason}`;
    }
  }

  ngOnInit() {
  }

}
