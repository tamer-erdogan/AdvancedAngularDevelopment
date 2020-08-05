import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrHandlerService {
  constructor(private router: Router) {}

  handleError(error) {
    console.error('An error occurred:', error.message);
    console.error(error);
    this.router.navigate(['/error']);
  }
}
