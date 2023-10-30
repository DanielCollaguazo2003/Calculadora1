import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistacalculadoraComponent } from './vistacalculadora.component';

describe('VistacalculadoraComponent', () => {
  let component: VistacalculadoraComponent;
  let fixture: ComponentFixture<VistacalculadoraComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistacalculadoraComponent]
    });
    fixture = TestBed.createComponent(VistacalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
