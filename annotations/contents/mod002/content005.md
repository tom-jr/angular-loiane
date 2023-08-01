# Input Properties

Utilizaremos o @Input do ***angular/core*** para passar dados de um template para outro.
Já sabemos que é possível declarar o template de um component em outro component. Para passarmos dados do componente que
'hospeda' o outro utilizaremos o propertyBind.

A property que criarmos precisara existir no component de app-curso e para ser reconhecida como uma propriedade 
utilizaremos o decorator @Input

```html
<app-curso [property-custom]="value"></app-curso>
```

```typescript
@Component()
export class CursoComponent {
    
    @Input('property-custom') propertyCustom!: any;
}
```
