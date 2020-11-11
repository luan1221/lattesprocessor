import { Component, OnInit } from '@angular/core';
import { Grupo } from '../../../../common/grupo';
import { Pesquisador } from '../../../../common/pesquisador';
import { GruposService } from './grupos.service';
import { PesquisadorService } from '../pesquisador/pesquisador.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
  
  grupo: Grupo = new Grupo();
  grupos: Grupo[] = [];
  nomeInvalido: boolean = false;
  pesquisadorJaExistente: boolean = false;
  pesquisadores: Pesquisador[] = [];
  pesquisador: Pesquisador = new Pesquisador();
  
  constructor(private gruposService: GruposService, 
              private pesquisadorService: PesquisadorService) {}

  criar(g: Grupo): void {
    this.gruposService.criar(g.clone())
      .subscribe(
        gr => {
          if (gr) {
            this.grupos.push(gr);
            this.grupo = new Grupo();
          } else {
            this.nomeInvalido = true
          }
        },
        msg => { alert(msg.message);}
      );
  }

  onMove(): void {
    this.nomeInvalido = false;
    this.pesquisadorJaExistente = false;
  }

  ngOnInit(): void {
    this.gruposService.getGrupos()
             .subscribe(
               gs => { this.grupos = gs; },
               msg => { alert(msg.message); }
              );

    this.pesquisadorService.getPesquisadores()
              .subscribe(
                ps => {this.pesquisadores = ps; },
                msg => { alert(msg.message); }
              );
  }

  addPesquisador(p: Pesquisador, grupo: Grupo) {
    let pesq = this.pesquisadores.find(pesq => pesq.nome === p.nome);
    this.gruposService.addPesquisador(pesq, grupo)
              .subscribe(
                gr => {
                  if(gr) {
                    let index = this.grupos.findIndex(g => g.nome === grupo.nome);
                    this.grupos[index].integrantes.push(p);
                    this.pesquisador = new Pesquisador();
                    console.log('Funfou');
                  } else {
                    this.pesquisadorJaExistente = true;
                  }
                }
              );
  }  
}



