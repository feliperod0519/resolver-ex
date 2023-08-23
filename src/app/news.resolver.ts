import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { NewsService } from './news.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsResolver implements Resolve<any>{
  
  constructor(private newsService:NewsService, private router: Router){}

  resolve() {
    return this.newsService.getTopPosts()
                .pipe(
                        catchError(()=>{
                                          //return of('data not available');  //Version 1
                                          //Version 2
                                          this.router.navigate(['/']);
                                          return EMPTY;
                                       })
                     );
  }

}
// Version without API, just to show a general case

// import { Injectable } from '@angular/core';
// import { Resolve } from '@angular/router';
// import { Observable, of } from 'rxjs';
// import { delay } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class NewsResolver implements Resolve<Observable<string>> {
//   resolve(): Observable<string> {
//     return of('Route!').pipe(delay(2000));
//   }
// }
