import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CadastrarEmprestimoComponent } from './cadastrar-emprestimo/cadastrar-emprestimo.component';
import { CadastrarLivroComponent } from './cadastrar-livro/cadastrar-livro.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { DetalhesEmprestimoComponent } from './detalhes-emprestimo/detalhes-emprestimo.component';
import { EditarLivroComponent } from './editar-livro/editar-livro.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ListarEmprestimosComponent } from './listar-emprestimos/listar-emprestimos.component';
import { ListarLivrosComponent } from './listar-livros/listar-livros.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { MasterComponent } from './master/master.component';

const routes: Routes = [

  { path: "master", component: MasterComponent },
  { path: "", redirectTo: "master", pathMatch: "full" },

  {
    path: "admin",
    component: AdminComponent,
    children: [
     
      {
        path: "livros", component: ListarLivrosComponent,

      },
      { path: "editarLivro", component: EditarLivroComponent, pathMatch: "full" },

      { path: "cadastrarLivro", component: CadastrarLivroComponent, pathMatch: "full" },

      {
        path: "usuarios", component: ListarUsuariosComponent,

      },

      { path: "editarUsuario", component: EditarUsuarioComponent },

      { path: "cadastrarUsuario", component: CadastrarUsuarioComponent, pathMatch: "full" },

      {
        path: "emprestimos", component: ListarEmprestimosComponent,

      },

      { path: "detalhesEmprestimo", component: DetalhesEmprestimoComponent, pathMatch: "full" },

      { path: "cadastrarEmprestimo", component: CadastrarEmprestimoComponent, pathMatch: "full" },
    ],

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
