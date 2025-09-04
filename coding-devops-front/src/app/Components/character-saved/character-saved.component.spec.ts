import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSavedComponent } from './character-saved.component';

describe('CharacterSavedComponent', () => {
  let component: CharacterSavedComponent;
  let fixture: ComponentFixture<CharacterSavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterSavedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
