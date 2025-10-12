import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../services/cliente';

@Component({
  selector: 'app-clientes-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './clientes-form.html',
  styleUrls: ['./clientes-form.css']
})
export class ClientesFormComponent implements OnInit {
  idEdicao?: number;
  form!: FormGroup; // declarar sem inicializar aqui

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private svc: ClienteService
  ) {
    // inicializar AQUI (ou no ngOnInit)
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.idEdicao = +id;
  }

  salvar() {
    if (this.form.invalid) return;
    const dados = this.form.value as any;

    const req = this.idEdicao
      ? this.svc.atualizar(this.idEdicao, dados)
      : this.svc.criar(dados);

    req.subscribe({
  next: () => this.router.navigate(['/clientes']),
  error: (err) => {
    console.error('Erro ao salvar', err);
    alert('Falha ao salvar. Veja o console/network.');
  }
});
  }

  cancelar() { this.router.navigate(['/clientes']); }
}
