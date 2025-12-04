
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ipost } from './model/post';
import { Itodo } from './model/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showModal : boolean = true
  title = 'Ng-Content';
  postsArr :Array<Ipost>=[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
    
  ]

  todoArr:Array<Itodo>=[
    {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  ]


  POST_URL:string =`https://jsonplaceholder.typicode.com/posts`
  TODOS_URL:string=`https://jsonplaceholder.typicode.com/todos`
    
  constructor(
     private _httpClient : HttpClient
  ){}

  ngOnInit():void {
    this._httpClient.get<Array<Ipost>>(this.POST_URL)
    .subscribe((res:any) => {
      console.log(res);
      this.postsArr = res
    })
  }

  onEdit(id:number){
     console.log(id)
  }

  onPostRemove(){
    this.showModal = true
  }

  getShowFlag(Flag : boolean){
    this.showModal = Flag
  } 

  getConfirmation(Flag : boolean){
   
   if(Flag){
    console.log(' Make Remove API call')
   }else{
    console.log('Dont make Remove API call')
   }
  }

}
