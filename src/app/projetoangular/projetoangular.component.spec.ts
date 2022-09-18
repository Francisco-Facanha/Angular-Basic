import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoangularComponent } from './projetoangular.component';

describe('ProjetoangularComponent', () => {
  let component: ProjetoangularComponent;
  let fixture: ComponentFixture<ProjetoangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetoangularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetoangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
