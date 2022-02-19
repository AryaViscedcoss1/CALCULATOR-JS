// variable declaration
var d=0;
var num1=0;
var symbol='';
var num2=0;


var zero=document.getElementById("0");
zero.addEventListener('click',numberclick);

var one=document.getElementById("1");
one.addEventListener('click',numberclick);

var two=document.getElementById("2");
two.addEventListener('click',numberclick);

var three=document.getElementById("3");
three.addEventListener('click',numberclick);

var four=document.getElementById("4");
four.addEventListener('click',numberclick);

var five=document.getElementById("5");
five.addEventListener('click',numberclick);

var six=document.getElementById("6");
six.addEventListener('click',numberclick);

var seven=document.getElementById("7");
seven.addEventListener('click',numberclick);

var eight=document.getElementById("8");
eight.addEventListener('click',numberclick);

var nine=document.getElementById("9");
nine.addEventListener('click',numberclick);

var reset=document.getElementById("reset");
reset.addEventListener('click',function reset()
{
    d=0;
    num1=0;
    symbol='';
    num2=0;
    display();
    temp=0;

});


var divide=document.getElementById("/");
divide.addEventListener('click',calculation);


var multi=document.getElementById("X");
multi.addEventListener('click',calculation);

var add=document.getElementById("+");
add.addEventListener('click',calculation);



var sub=document.getElementById("-");
sub.addEventListener('click',calculation);




var text=document.getElementById("text");

var temp=0;
// small supportive function
function numberclick()
{
   d=d*10+Number(this.innerHTML);
   if (temp==0)
   {
    num1=d;
    display();
   }

   if (temp==1)
   {   
       display();
       num2=d;
   }
   
}

function display()
{
    text.innerHTML=d;
}

function calculation()
{

    if (temp==0)
    {   
         symbol=this.innerHTML;
         d=0;

         temp=1;
    }
    else
    {
        d=action(num1,num2,symbol);
        display();
        num1=d;
        d=0;
        symbol=this.innerHTML;

    }
}


//action
function action(n1,n2,s)
{
    if(s=="X")
    {
        return n1*n2;
    }
    else if(s=="/")
    {
        return n1/n2;
    }
    else if(s=="+")
    {
        return n1+n2;
    }
    else if(s=="-")
    {
        return n1-n2;
    }
    else
    {
        return ;
    }
}













