# Módulos
- Ajudar a organizar e modularizar a aplicação. 
- Podemos organizar os nossos diretórios.
- Podemos selecionar os componentes que desejarmos expor de um modulo para outros.

## Composição do modulo
- A priore temos a definição da class
~~~ javascript
export class AppModule{}
~~~

- Para a class ser reconhecida pelo Angular como um modulo ela recebe o decorator de
***@Module*** do pacote ***@angular/core***. O @Module também tem seus metadados:
    - **declarations:** declaramo os nomes de todos os ***components***, ***diretivas*** e ***pipes*** que iremos utilizar nesse modulo
    - **imports**: Adicionamos outros módulos que desejamos utilizar nesse modulo
    - **providers**: Adicionamos os serviços que vão ficar disponíveis.
    - **bootstrap**: define o component de start da aplicação. Esse metadado é exclusivo do appModule root.
  
~~~ javascript
@Module({
    declarations:[
        AppComponent
    ],
    imports:[],
    providers:[],
    bootstrap:[AppComponent]
})
export class AppModule{}
~~~

## Gerar um modulo
~~~ bash
$ ng g module {nome_module}
~~~
Após criado, o module novo tem uma estrutura diferente do module root.

~~~ javascript

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class NomeModule { }
~~~
Caso criarmos um componente com o mesmo nome do module, o CLI ja o cria no mesmo diretório
e atualiza o metadado de declarations do módulo.
Caso queira adicionar mais um component, declare antes do nome do component o modulo. EX:
Eu tenho o moduloX e moduloY

para criar um component root de cada um basta
~~~ bash
$ ng g component moduloX/nome-component
$ ng g component moduloY/nome-component
~~~
Assim gerará seus componentes.
Os components serão automaticamente declarados em seus respectivos módulos.


Para poder usar um component pertencente a um modulo X a outro component pertencente ao modulo Y:
1. No modulo X, qual criamos via CLI. Declaramos no metadado **exports** o component que desejamos expor. Quando dizemos
expor, queremos falar que aquele component vai ser acessível para outros módulos que importem nosso módulo X.
No caso, apenas importar um módulo não permite que usemos seus components. É preciso exportar ele pelo metadado.

2. No módulo Y importamos o modulo X no metadado de imports, então poderemos utilizar os components exportados do módulo
X livremente.

OBS: Lembrando que podemos montar um component de um modulo x que renderiza todos os components do mesmo. E assim só 
exportar o component que faz esse render. 
## StyleGuide

**nome do arquivo**: app.module.ts
**declaração da class**: export class AppModule{}
