import { Injectable } from '@angular/core';
import { Article } from '../crud-operations/Article';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
@Injectable()
export class CrudserviceService {
//  URL for CRUD operations
 articleUrl = 'http://localhost:3000/articles';
  constructor(private http: Http) { }
  getAllArticles() {
  }
  createArticle(article: Article): Observable<number> {
    const cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: cpHeaders });
          return this.http.post(this.articleUrl, article, options)
                 .map(success => success.status);
      }
}
