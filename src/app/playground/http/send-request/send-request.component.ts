import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit {

  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    this.http.post(
        "https://ng-complete-course-recipe-book-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
        postData
    ).subscribe(responseData => {
      console.log(responseData)
    })
    console.log(postData);
  }

  onFetchPosts() {
  }

  onClearPosts() {
  }

}
