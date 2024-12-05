import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Conversaciones', url: '/folder/chat', icon: 'mail' },
    { title: 'Noticias', url: '/folder/noticias', icon: 'newspaper' },
    { title: 'Eventos', url: '/folder/eventos', icon: 'calendar-number' },
    { title: 'Horarios', url: '/folder/horarios', icon: 'time' },
    { title: 'Notas', url: '/folder/notas', icon: 'calculator' },
    { title: 'Estudiantes', url: '/folder/estudiantes', icon: 'people' },
    { title: 'Clases', url: '/folder/clase', icon: 'table' },
    { title: 'Cerrar Sesion', url: '/login', icon: 'arrow-back' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  public isMenuDisabled: boolean = false;

  constructor(private router: Router) {
    // Detecta cambios en la ruta
    this.router.events.subscribe(() => {
      // Si la ruta es '/login', deshabilita el menú
      this.isMenuDisabled = this.router.url === '/login';
    });
  }
}
