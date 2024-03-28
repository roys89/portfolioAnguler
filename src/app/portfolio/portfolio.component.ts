import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Tag } from '../_models/tag';
import { ProjectService } from '../_services/project.service';
import { Project } from './../_models/Project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular: boolean = false;
  html: boolean = false;
  python: boolean = false;
  jscript: boolean = false;
  java: boolean = false;
  csharp: boolean = false;
  bootstrap: boolean = false;
  sql: boolean = false;
  php: boolean = false;
  spring: boolean = false;
  filtering: boolean = false;

  constructor(
    private titleService: Title,
    private projectService: ProjectService
  ) {
    this.titleService.setTitle('Swadhin Roy - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }

    if (this.html) {
      filterTags.push(Tag.HTML);
    }

    if (this.python) {
      filterTags.push(Tag.PYTHON);
    }

    if (this.jscript) {
      filterTags.push(Tag.JSCRIPT);
    }

    if (this.java) {
      filterTags.push(Tag.JAVA);
    }

    if (this.csharp) {
      filterTags.push(Tag.CSHARP);
    }

    if (this.sql) {
      filterTags.push(Tag.SQL);
    }

    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }

    if (this.php) {
      filterTags.push(Tag.PHP);
    }

    if (this.bootstrap) {
      filterTags.push(Tag.BOOTSTRAP);
    }

    if (this.spring) {
      filterTags.push(Tag.SPRING);
    }

    if (this.typescript || this.angular || this.csharp || this.php || this.python || this.bootstrap || this.sql || this.spring || this.java || this.jscript || this.html) {
      this.filtering = true;
    }

    else {
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectByFilter(filterTags);
  }

  ResetFilters() {
    this.typescript = false;
    this.angular = false;
    this.html = false;
    this.python = false;
    this.jscript = false;
    this.java = false;
    this.csharp = false;
    this.bootstrap = false;
    this.sql = false;
    this.php = false;
    this.spring = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}
