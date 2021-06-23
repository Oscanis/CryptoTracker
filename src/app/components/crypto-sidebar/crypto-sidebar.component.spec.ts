import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoSidebarComponent } from './crypto-sidebar.component';

describe('CryptoSidebarComponent', () => {
  let component: CryptoSidebarComponent;
  let fixture: ComponentFixture<CryptoSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
