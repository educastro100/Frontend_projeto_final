import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesEmprestimoComponent } from './detalhes-emprestimo.component';

describe('DetalhesEmprestimoComponent', () => {
  let component: DetalhesEmprestimoComponent;
  let fixture: ComponentFixture<DetalhesEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesEmprestimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
