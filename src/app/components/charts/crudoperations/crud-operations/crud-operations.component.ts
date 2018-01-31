import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudserviceService } from '../crud-operation-service/crudservice.service';
import { Article } from './Article';

@Component({
  selector: 'app-crud-operations',
  templateUrl: './crud-operations.component.html',
  styleUrls: ['./crud-operations.component.css']
})
export class CrudOperationsComponent implements OnInit {

  articleIdToUpdate = null;
  processValidation = false;
  allArticles: Article[];
  articleForm = new FormGroup({
    title: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required)
  });
  constructor(private articleService: CrudserviceService) { }

  ngOnInit() {
  }
  onArticleFormSubmit() {
    console.log('submit values');
    this.processValidation = true;

    if (this.articleForm.invalid) {
      return;
      // validation failed
    }
    if (this.articleIdToUpdate === null) {
      // Generate article id then create article
      this.articleService.getAllArticles();
    }
    // create articles
    this.articleService.createArticle(article: Article)
  }
}
