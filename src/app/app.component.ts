import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Registrar', url: '/registro', icon: 'person' },
    { title: 'Cerrar Sesion', url: '/login', icon: 'back' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  public isMenuDisabled: boolean = false;

  constructor(private router: Router) {
    // Detecta cambios en la ruta
    this.router.events.subscribe(() => {
      // Si la ruta es '/login', deshabilita el menú
      this.isMenuDisabled = this.router.url === '/login';
    });
  }
}
