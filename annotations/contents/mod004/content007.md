# NgContent
 O ng Content é uma forma de se passar um elemento para outro elemento. Fica mais fácil explicar
com exemplo pratico.

Eu tenho um componente no qual criei. E quero passar outros componentes ou elementos DOM para que renderize.
O ideal é identificar os elementos com classe, assim o ng-content consegue distinguir
e organizar conforme necessário.

No exemplo um component que renderiza o componente-personalizado ira passar duas divs. para ser renderizado no 
componente-personalizado.
~~~ html
<componente-personalizado>
    <div class = classX>ContentX</div>
    <div class = classY>ContentY</div>
</componente-personalizado>
~~~

No template de componente-personalizado capturamos esses elementos
com o ***ng-content***:

~~~ html
<ng-content select=".classX">
<ng-content select=".classY">
~~~

Assim os conteúdos serão renderizados conforme o **select** que se 
refere a class.
