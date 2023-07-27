# Property Binding e Interpolação

## Data Binding
Associar dados dos templates com os componentes e vice-versa.

**Interpolação**: Pegar o valor de um método ou atributo e alterar a Saida em um template
|Template| ---- {{valor}} ----> |Component|

***Property bind***: Saida de atributo de um component para um template
|Template| ---- [propriedade]= "valor" ----> |Component|


**EventHandler**: Escutar evento do template
|Template| ---- (event) = "handler" ----> |Component|

**To way data binding**: Templante e component atualizado simultaneamente.
|Template| ---- [(ngModel)] ="propriedade" ----> |Component|

## Interpolação

Exemplo:

Criamos um (atributo|retorno de método) no nosso component 

~~~ javascript
@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  constructor() { }
  url: string = "loiane.com";//atributo a ser interpolado
  ngOnInit(): void {
  }

}
~~~

Para renderizar esse atributo em Angular nos utilizaremos o 
a interpolação  **{{}}** Se baseia em colocar o atributo entre duas
chaves, assim renderizando seu valor no template.

~~~ html
<section class="property-binding">
    <article>
        <h3>Interpolation/Interpolação</h3>
        <p>String renderizada com Interpolação: {{ url }}</p>
    </article>
</section>
~~~

Saida:
![img](/annotations/assets/img/data-binding_001.png)


Na  interpolação é possível adicionar expressões logicas e matemáticas.


~~~ html
        <p>String renderizada com Interpolação: {{ 1 +1 }}</p>
        //irá renderizar o valor da expressão no template 
~~~

Podemos declarar o valor de uma propriedade com interpolação

Ex:
~~~ html
<img src ="{{urlImagem}}">
~~~

# Property binding

No property binding o funcionamento vai ser parecido com interpolação
, porem não há necessidade de por o valor do atributo entre chaves
e sim o nome da propriedade do template entre colchetes
~~~ html
<img [src] ="urlImagem">
// codigo equivalente a 
<img bind-src ="urlImagem">

~~~
- Valor do componente para o template
- Usa-se colchetes [src]= "value"
- Formato padrão é através de bind-property_name bind-src = "value"
- Quando não existe uma propriedade no elemento, usa-se [attr.colspan]

## Exemplos
Usamos o ngSrc do angula por motivos de optimização da img

- Podemos decidir se vamos usar a Interpolation ou propertyBind. Um não exclui o outro. Pois como mostrado no exemplo, a casos que não se tem uma propriedade para receber
valor, então adicionamos a interpolação. 
~~~ html
<section class="property-binding">

  <article>
    <h3>Interpolation</h3>
    <p>String renderizada com interpolation: <a href="{{url}}"> {{url}} </a></p>
    <p>Interpolação de expressão matemática: 1 + 1 = {{1 + 1}}</p>
    <p>Interpolação de expressão matemática com chamada de método: 1 + 1 + 1 = {{1 + twoTermsSum(1, 1)}}</p>
    <p>Interpolação de expressões booleans: <b>true</b> || <b>false</b> = {{true || false}}</p>
    <p>Interpolação de expressões booleans: <b>true</b> && <b>false</b> = {{true && false}}</p>
  </article>

  <article>
    <h3>Property-binding</h3>
    <img ngSrc="{{urlImage}}" width="400" height="300">
    <img [ngSrc]="urlImage" width="400" height="300">
    <img bind-ngSrc="urlImage" width="400" height="300">
  </article>
</section>
~~~
