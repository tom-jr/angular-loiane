# Output

com o decorator @Output podemos emitir valores de um component para o outro. Basta criar um campo com o decorator sendo
uma instancia de EventEmitter. EventEmitter é o objeto que fará a emissão de um objeto de any type que definirmos.

A emissão do objeto fica é realizada pelo método emit(object: any), que recebe um param estruturado a nossa necessidade.
~~~ javascript
@Output('valueChanged') valueChanged = new EventEmitter();

valueChanged.emit(object);
~~~
No elemento do nosso component será possível capturar a emissão que criamos com bind de evento. O evento terá o nome
da variável ou com o nome que definirmos no decorator.

A emissão será tratada por um método. Esse método precisar passar o **$event** como param para poder ter o objeto emitido.

```html
<component (valueChanged) ="handleEmission($event)"></component>
```

```typescript
export class ComponetRoot {

    handleEmission(event: any) {
        console.log(`Object from EventEmitter ${event}`)
    }
}
```
