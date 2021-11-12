import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "./send-request/post.model";
import {catchError, map} from "rxjs/operators";
import {Observable, Subject, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  error: Subject<string> = new Subject<string>()

  constructor(private http: HttpClient) {}

  createAndStorePost(postData: Post) {
    this.http.post<{ name: string }>(
      "https://ng-complete-course-recipe-book-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
      postData
    ).subscribe(responseData => {
      console.log(responseData)
    }, error => {
      this.error.next(error.message)
    })
  }

  fetchPosts(): Observable<Post[]> {
    return this.http.get<{ [key: string]: Post }>(
      "https://ng-complete-course-recipe-book-default-rtdb.europe-west1.firebasedatabase.app/posts.json")
      .pipe(
        map(responseData => {
          const postsArray: Post[] = []
          for (const entry in responseData) {
            if (responseData.hasOwnProperty(entry)) postsArray.push({ ...responseData[entry], id: entry })
          }
          return postsArray
        }),
        catchError(error => {
          return throwError(error)
        })
      )
  }

  clearPosts() {
    return this.http.delete("https://ng-complete-course-recipe-book-default-rtdb.europe-west1.firebasedatabase.app/posts.json")
  }

}
