import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { MasterComponent } from './master/master.component';
import { ListarLivrosComponent } from './listar-livros/listar-livros.component';


import {HttpClientModule} from "@angular/common/http";
import { CadastrarLivroComponent } from './cadastrar-livro/cadastrar-livro.component';
import { EditarLivroComponent } from './editar-livro/editar-livro.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ListarEmprestimosComponent } from './listar-emprestimos/listar-emprestimos.component';
import { DetalhesEmprestimoComponent } from './detalhes-emprestimo/detalhes-emprestimo.component';
import { CadastrarEmprestimoComponent } from './cadastrar-emprestimo/cadastrar-emprestimo.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MasterComponent,
    ListarLivrosComponent,
    CadastrarLivroComponent,
    EditarLivroComponent,
    ListarUsuariosComponent,
    CadastrarUsuarioComponent,
    EditarUsuarioComponent,
    ListarEmprestimosComponent,
    DetalhesEmprestimoComponent,
    CadastrarEmprestimoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
