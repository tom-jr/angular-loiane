# Router 
Angular Router é um serviço opcional que renderiza um component para determinada URL.
Angular Router faz parte do pacote **@angular/router**

## Configuração
Configurar rotas a partir do RouterModule.forRoot()

**app.routing.ts**

```typescript
import {RouterModule, Routes} from "@angular/router";

const appRouter: Routes = [
    {path: 'path-name', component: NameComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRouter)],
    exports: [RouterModule]
})
export class AppRouting {
}
```
Devemos então importar no nosso modulo principal.

```typescript
import {AppRouting} from "./app.routing";

@NgModule({
    imports: [
        // imports
    ],
    exports: [
        AppRouting
    ]
})
export class AppModule {

}
```
