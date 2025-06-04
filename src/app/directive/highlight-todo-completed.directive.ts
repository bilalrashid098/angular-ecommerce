import { Directive, input, effect, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightTodoCompleted]',
})
export class HighlightTodoCompletedDirective {
  isCompleted = input<boolean>(false);
  el = inject(ElementRef);
  stylesEffect = effect(() => {
    if (this.isCompleted()) {
      this.el.nativeElement.classList.add('todos__item-completed');
    } else {
      this.el.nativeElement.classList.remove('todos__item-completed');
    }
  });
}
