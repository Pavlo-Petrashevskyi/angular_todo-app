import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TodoComponent } from "./components/todo/todo.component";
import { TodoFormComponent } from "./components/todo-form/todo-form.component";
import { FilterActivePipe } from "./pipes/filter-active.pipe";
import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from "./components/message/message.component";
import { TodosPageComponent } from "./components/todos-page/todos-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TodoComponent,
    TodoFormComponent,
    FilterActivePipe,
    HttpClientModule,
    MessageComponent,
    TodosPageComponent,
    RouterLink,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {

}
