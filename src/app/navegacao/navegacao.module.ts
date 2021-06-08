import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutosComponent } from './produtos/produtos.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    declarations: [
        MenuComponent,
        HomeComponent,
        ProdutosComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        FlexLayoutModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatTabsModule
    ],
    exports: [
        MenuComponent,
        HomeComponent
    ]
})

export class NavegacaoModule { }