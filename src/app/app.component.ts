import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import Clerk from '@clerk/clerk-js';
import { environment } from '../environments/environment';
import { User } from '@clerk/clerk-js/dist/types/core/resources/User';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-real-estate-website';

  clerkPubKey = environment.CLERK_PUBLISHABLE_KEY;
  clerk = new Clerk(this.clerkPubKey);

  async ngOnInit() {
    await this.clerk.load();
  }

  onSignInButtonClick() {
    console.log(this.clerk.user);
  }
}
