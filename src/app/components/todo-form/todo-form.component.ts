import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
  @Output() save = new EventEmitter();

  todoForm = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern(new RegExp('[^ ]+')),
      ],
    }),
  })

  handleFormSubmit() {
    if (this.todoForm.invalid) {
      return;
    }

    this.save.emit((this.todoForm.get('title') as FormControl).value);
    this.todoForm.reset();
  }
}
