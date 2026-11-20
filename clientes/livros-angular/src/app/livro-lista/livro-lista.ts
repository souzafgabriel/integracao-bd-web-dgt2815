import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora';
import { ControleLivrosService } from '../controle-livros';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livro-lista.html',
  styleUrls: ['./livro-lista.css']
})
export class LivroListaComponent implements OnInit {

  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.servLivros.obterLivros().then((dados) => {
      this.livros = dados;
      this.cd.detectChanges();
    }).catch(err => {
      console.error('Erro ao obter livros:', err);
    });
  }

  excluir = (codigo: string): void => {
    const confirmacao = confirm('Tem certeza que deseja excluir este livro?');

    if (!confirmacao) return;

    this.servLivros.excluir(codigo).then(() => {
      this.servLivros.obterLivros().then((dados) => {
        this.livros = dados;
        this.cd.detectChanges();
      });
    }).catch(err => {
      console.error('Erro ao excluir livro:', err);
    });
  };

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  };
}
