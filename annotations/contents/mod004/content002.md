## O que faz?
 Semelhante ao if das linguagens de programação. Vamos levar o mesmo comportamento
dessa logica do if para os templates.

Ex da estrutura:

~~~ html
<h1 *ngIf = "expression">Content</h1>
~~~

esse elemento so irá renderizar na tela caso a expressão for satisfeita.
Caso contrario, não aparece.

Uma opção bem semelhante é o hidden. Sendo diferente em níveis de consumo e segurança.
O ngIf consome mais recursos e o hidden permite que o elemento fique visível nas ferramentas de DEV.

Recomenda-se usar o hidden para arvores pequenas e o ng If para arvores DOM grandes.

Exemplo do hidden:

~~~ html
<h1 [hidden] = "expression">Content</h1>
~~~

Forma de usar o else com ngIf:

~~~ html
<h1 *ngIf = "expression; else elseBlock">Content</h1>
<h2 #elseBlock>No Content</h2>
~~~

Outra forma é definir um elemento que renderiza conforme a condição.

~~~ html
<div *ngIf="condition; then thenBlock else elseBlock"></div>
<ng-template #thenBlock>Content to render when condition is true.</ng-template>
<ng-template #elseBlock>Content to render when condition is false.</ng-template>
~~~
Outra forma que sera renderizado de acordo se o valor de uma variável ser null ou não

~~~ html
<div *ngIf="condition as value; else elseBlock">{{value}}</div>
<ng-template #elseBlock>Content to render when value is null.</ng-template>
~~~
