import { CommonModule } from '@angular/common';
import { reducer } from './store/item.reducer';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemListTableComponent } from './item-list-table/item-list-table.component';
import { ItemComponent } from './item/item.component';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from './store/item.effects';
import { BrowserModule } from '@angular/platform-browser';
import { AppReducer } from 'src/app/index.reducer';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    ItemListTableComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    StoreModule.forRoot(AppReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([ItemEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
