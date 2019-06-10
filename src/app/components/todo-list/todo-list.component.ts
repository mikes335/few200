import { Component } from '@angular/core';
import { TodoListItem } from './models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  items: TodoListItem[] = [
    { description: 'Mow Grass', completed: false },
    { description: 'Clean Gutters', completed: false },
    { description: 'Wash Car', completed: true }
  ];
  clear;

  markComplete(item: TodoListItem) {
    item.completed = true;
  }

  add(what: HTMLInputElement) {
    const description = what.value;
    this.items.unshift({ description, completed: false });
    what.value = '';
    what.focus();
  }

  clearCompleted() {
    this.items = this.items.filter(item => !item.completed);
  }
}
