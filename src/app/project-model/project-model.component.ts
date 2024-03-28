import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-project-model',
  templateUrl: './project-model.component.html',
  styleUrl: './project-model.component.css'
})
export class ProjectModelComponent {
  project = {} as Project;

  constructor(public BsModalRef: BsModalRef) {

  }
}
