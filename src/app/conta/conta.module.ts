import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { CadastroComponent } from "./cadastro/cadastro.component";

import { ContaRoutingModule } from "./conta.module.route";
import { ContaAppComponent } from "./conta.app.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from "@angular/material/button";


@NgModule({
    declarations: [
        ContaAppComponent,
        CadastroComponent,
        LoginComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        ContaRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        FlexLayoutModule,
        MatCardModule,
        MatTabsModule,
        MatButtonModule

    ]
})

export class ContaModule { }