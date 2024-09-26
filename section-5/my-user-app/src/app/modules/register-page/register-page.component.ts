import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  name = '';
  lastName = '';
  username = '';
  email = '';
  phoneNumber = +'';
  password = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.register(
      this.name,
      this.lastName,
      this.username,
      this.email,
      this.phoneNumber,
      this.password
    );
  }
}
