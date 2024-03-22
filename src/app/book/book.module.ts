import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './state/book.reducers';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './state/book.effects';
import { BookRoutingModule } from './book-routing.module';

@NgModule({
  declarations: [BookListComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    StoreModule.forFeature('bookState', bookReducer),
    EffectsModule.forFeature([BookEffects]),
  ],
})
export class BookModule {}
