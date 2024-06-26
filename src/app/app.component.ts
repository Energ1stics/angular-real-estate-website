import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import Clerk from '@clerk/clerk-js';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'angular-real-estate-website';

  clerkPubKey = environment.CLERK_PUBLISHABLE_KEY;
  clerk = new Clerk(this.clerkPubKey);

  async ngOnInit() {
    await this.clerk.load();
  }
}
