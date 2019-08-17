import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  message:string

  todos:Todo[]
  // [
  //   new Todo(1, 'first', false, new Date()),
  //   new Todo(2, 'second', false, new Date()),
  //   new Todo(3, 'third', false, new Date()),
    
  // ]


  constructor(
    private todoDataService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodo();
  }

  refreshTodo(){
    this.todoDataService.executeTodoDataService('akash').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    this.todoDataService.deleteTodo("akash", id).subscribe(
      response => {
          this.message = `successfully deleted ${id}`;
          this.refreshTodo(); 
      }
    )
  }

  updateTodo(id){
    console.log(id);
    this.router.navigate(['todo', id]);
  }

}
