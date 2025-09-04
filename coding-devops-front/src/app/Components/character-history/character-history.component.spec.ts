import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterHistoryComponent } from './character-history.component';

describe('CharacterHistoryComponent', () => {
  let component: CharacterHistoryComponent;
  let fixture: ComponentFixture<CharacterHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
