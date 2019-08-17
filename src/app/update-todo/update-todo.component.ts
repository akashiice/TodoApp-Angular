import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

  id: number
  todo: Todo

  constructor(private todoService: TodoDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.todo = new Todo(1, '', false, new Date());
    this.id = this.route.snapshot.params['id'];
    this.todoService.retrieveTodo('akash', this.id)
      .subscribe(
        data => this.todo = data
      )
  }

}
