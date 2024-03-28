import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { ProjectService } from './../_services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  featuredProject = {} as Project;


  constructor(private titleService: Title, private ProjectService: ProjectService) {
    this.titleService.setTitle('Swadhin Roy - Home')
  }
  ngOnInit(): void {
    this.featuredProject = this.ProjectService.GetProjectById(0);
  }
}
