import { Component } from '@angular/core';
import { CartService } from './services/cart.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webapp';
  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) { }


  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.cartService.init();

    }

  }

}
