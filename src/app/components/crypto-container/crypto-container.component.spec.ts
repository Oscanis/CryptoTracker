import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoContainerComponent } from './crypto-container.component';

describe('CryptoContainerComponent', () => {
  let component: CryptoContainerComponent;
  let fixture: ComponentFixture<CryptoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
