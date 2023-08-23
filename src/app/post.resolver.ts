import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { NewsService } from './news.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<any> {

  constructor(private newsService: NewsService){}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.newsService.getPost(route.paramMap.get('id') as string);
  }
}
