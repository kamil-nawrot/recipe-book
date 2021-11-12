import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {pipe, Subscription} from "rxjs";
import {Post} from "./post.model";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit, OnDestroy {

  loadedPosts: Post[] = [];
  isFetching = false
  error = null
  private errorSub: Subscription

  constructor(private http: HttpClient, private postsService: PostsService) {}

  private fetchPosts(): void {
    this.isFetching = true
    this.postsService.fetchPosts().subscribe(response => {
      this.loadedPosts = response
      this.isFetching = false
    }, error => {
      this.error = error.message
      this.isFetching = false
    })
  }

  ngOnInit() {
    this.fetchPosts()
    this.errorSub = this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage
    })
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.postsService.createAndStorePost(postData)
  }

  onFetchPosts() {
    this.fetchPosts()
  }

  onClearPosts() {
    this.postsService.clearPosts().subscribe(response => {
      console.log(response)
      this.loadedPosts = []
    })
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe()
  }

}
