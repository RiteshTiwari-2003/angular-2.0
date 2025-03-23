import { HttpClient } from '@angular/common/http';
import { Component,inject ,OnInit} from '@angular/core';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  http=inject(HttpClient);
  postData:any;
  ngOnInit(): void {
    const API="https://jsonplaceholder.typicode.com/posts";
    this.http.get(API)
    .subscribe({
      next:(data)=>{
        this.postData=data;

      },
      error:(err)=>{
        console.log(err);
      }
    })
      
  }
  // ngOnInit() is a callback method which is invoked immedeatly after the component is loaded

}
// it means that we are creating the instance of it 