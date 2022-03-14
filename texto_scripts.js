   //ID dos input de cor de fundo do html de cores do html
var cor1=document.getElementById('cor1');
var cor2=document.getElementById('cor2');


//ID da janela de edi��o do texto
var grad=document.getElementById('grad');

//ID da cor do texto editado html
var cortx=document.getElementById('cortx');

//este � o e o tamanho da fonte
var tam=document.getElementById('tamanho');
var edita=document.getElementById('edita');

//verifica se ha uma cor so selecionada no html
var unica=true;


var fonte=document.getElementById('fonte');
fonte.addEventListener('mouseout',


//Atribui uma nova fonte ao texto
function fonte(){
  var valor=fonte.options[fonte.selectedIndex].value;   
  grad.style.fontFamily=valor; 
});


//Atribui tamanho � fonte
tam.addEventListener('input',

function Tamanho(){
    
    grad.style.fontSize=tam.value+'pt';   
});


//verifica se ha uma cor so selecionada no fundo da tela html

edita.addEventListener('mousemove',

function corprincipal(){
if(cor1.value != '#ffffff' && cor2.value =='#ffffff' ){
cor2.value=cor1.value;
}  
if(unica==true){
cor2.value=cor1.value;
}    
});

cor2.addEventListener('input',function m(){
unica=false;}
);


//Atribui cor Gradiente ou Normal ao Fundo
edita.addEventListener('mousemove',

function muda(){

//var grad =document.getElementById('grad');
var edita =document.getElementById('edita');
grad.style.color=cortx.value;
if(unica==true){
//edita.style.backgroundColor=cor1.value;
grad.style.backgroundColor=cor1.value;
}
if(unica==false){
//edita.style.background="linear-gradient(to right,"+cor1.value+","+cor2.value+")";
grad.style.background="linear-gradient(to right,"+cor1.value+","+cor2.value+")";
}

edita.style.color=cortx.value;
    //context= grad.getContext('2d'),
    //gradient=context.createLinearGradient(0,0,0,grad.height);

    //gradient.addColorStop(0,cor1.value);
   // gradient.addColorStop(1,cor2.value);

    //context.fillStyle=gradient;
//context.fillRect(0,0,grad.width,grad.height);
/*edita.style.color=cortx.value;
var texto=document.getElementById('texto').value;
const tex=texto.replace("/\n/g",'<br>');
grad.innerHTML='<h1 style="margin:auto;text-align:center;id="tex" ">'+tex+'</h1>';*/

});

edita.addEventListener('keypress',

function muda2(){

//edita.style.color=cortx.value;

grad.style.color=cortx.value;

});
edita.addEventListener('keyup',

function muda3(){

//edita.style.color=cortx.value;

grad.style.color=cortx.value;

});

