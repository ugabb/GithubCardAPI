import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private formBuilder: FormBuilder,
    private github: GithubService
  ) {}

  checkoutForm = this.formBuilder.group({
    user: '',
  });

  onSubmit(): void {
    if (this.checkoutForm.value.user) {
      this.github.setUser(this.checkoutForm.value.user);
      this.github.getData();
    }

    this.checkoutForm.reset();
  }
}
