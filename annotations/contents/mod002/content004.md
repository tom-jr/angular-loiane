# Two way
Utilizamos o two way data binding quando queremos manter os valores atualizados no template e componente ao mesmo tempo

Exemplo da estrutura two way. Vamos atribuir ao value do input a variável do component chamado
name
~~~ html
<input
[value]="name"
/>
~~~

Caso mudar o valor do input a variável não ira mudar o seu. Para atualizar usamos o **(input)** onde podemos 
disparar uma função a qualquer mudança no elemento DOM. Vamos lançar um function com o próprio value de parâmetro e 
atribuir o valor a variável name.

~~~ html
<input #var1
[value]="name"
(input)="bindingValue(var1.value)" 
/>


<p>Name: {{this.name}}</p> 
 <!-- Nome sera renderizado, e cada evento de (input) que lançar atualizará o mesmo  Assim caraterzirá o two way!-->

~~~




Pode-se utilizar o **ngModel** no lugar do value, ele funcionara para o mesmo 
proposito
E no lugar de (input) pode se usar o **ngModelChange**

Para utilizar as diretivas, ngModelChange e ngModel é necessário que importemos
no module dos templates o **FormModules** do pacote ***@angular/forms***

~~~ html
<input
[ngModel]="var"
(ngModelChange)= "addName(var.value)"
/>
~~~

Para deixar a sincronização sem precisar usar duas diretivas, podemos utilizar 
o **[(ngModel)]** do AngularForms que faz com que voce tenha o two way dessa forma mais simples

~~~ html
<input
[(ngModel)]="this.name"
/>
~~~
