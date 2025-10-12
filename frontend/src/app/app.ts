import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <header class="topbar">
      <h1>PeçaFácil — Clientes</h1>
      <nav>
        <a routerLink="/clientes" routerLinkActive="active">Clientes</a>
        <a routerLink="/clientes/novo" routerLinkActive="active">Novo</a>
      </nav>
    </header>

    <main class="content">
      <router-outlet></router-outlet>
    </main>

    <footer class="footer">
      <small>© {{ ano }} PeçaFácil</small>
    </footer>
  `,
  styles: [`
    :host { display: block; min-height: 100vh; background:#0b0b0c; color:#e9e9ee; font-family: Arial, sans-serif; }
    a { color: inherit; text-decoration: none; opacity:.85 }
    a:hover { opacity:1 }
    .topbar { display:flex; gap:24px; align-items:center; justify-content:space-between; padding:16px 24px; background:#121218; border-bottom:1px solid #222 }
    .topbar h1 { margin:0; font-size:18px; font-weight:600 }
    .topbar nav { display:flex; gap:14px }
    .topbar nav a { padding:8px 10px; border-radius:10px; background:#1a1f2e }
    .topbar nav a.active { outline:1px solid #3b82f6 }
    .content { max-width:1000px; margin:24px auto; padding:0 16px }
    .footer { text-align:center; padding:24px 0; color:#9aa3b2 }
  `]
})
export class AppComponent {
  ano = new Date().getFullYear();
}
