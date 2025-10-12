import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-clientes-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes-lista.html',
  styleUrls: ['./clientes-lista.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  carregando = false;

  constructor(private svc: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.carregar();
  }

  carregar() {
  this.carregando = true;
  this.svc.listar().subscribe({
    next: data => {
      console.log('Clientes carregados:', data); // debug
      this.clientes = data;
      this.carregando = false;
    },
    error: err => {
      console.error('Erro ao listar clientes:', err);
      this.carregando = false;
      alert('Falha ao listar clientes. Abra o devtools (F12) > Network para detalhes.');
    }
  });
}

  novo() {
    this.router.navigate(['/clientes/novo']);
  }

  editar(c: Cliente) {
    if (c.id) this.router.navigate(['/clientes/editar', c.id]);
  }

  remover(c: Cliente) {
    if (!c.id) return;
    if (confirm(`Deseja realmente excluir ${c.nome}?`)) {
      this.svc.deletar(c.id).subscribe(() => this.carregar());
    }
  }
}
