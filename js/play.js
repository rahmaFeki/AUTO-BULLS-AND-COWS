 setTimeout("CallButton()",1000)
 function CallButton()
 { 
	document.getElementById("btn").click();   
 }
var attempts = document.getElementById('tab');
var initlistN=new Array();

var tau=0, vache=0, number=0;
var c=0
  
function init()
	{
		document.getElementById('inlineRadio1').checked=true
		document.getElementById('inlineRadio00').checked=true
		document.getElementById('nb0').innerHTML='';
		document.getElementById('t0').innerHTML='';
		document.getElementById('v0').innerHTML='';
		document.getElementById('nb1').innerHTML='';
		document.getElementById('t1').innerHTML='';
		document.getElementById('v1').innerHTML='';
		document.getElementById('nb2').innerHTML='';
		document.getElementById('t2').innerHTML='';
		document.getElementById('v2').innerHTML='';
		document.getElementById('nb3').innerHTML='';
		document.getElementById('t3').innerHTML='';
		document.getElementById('v3').innerHTML='';
		document.getElementById('nb4').innerHTML='';
		document.getElementById('t4').innerHTML='';
		document.getElementById('v4').innerHTML='';
		document.getElementById('nb5').innerHTML='';
		document.getElementById('t5').innerHTML='';
		document.getElementById('v5').innerHTML='';
		document.getElementById('nb6').innerHTML='';
		document.getElementById('t6').innerHTML='';
		document.getElementById('v6').innerHTML='';
		document.getElementById('randNumber').innerHTML='Number Display!'
		c=0
		GenerateInitialList()
	
	}
 function can( i)
    {
        var a = Math.trunc(i / 1000);
        var b = Math.trunc(i / 100) % 10;
        var c = Math.trunc(i / 10) % 10;
        var d = i % 10;
        return (d != c) && (d != b) && (d != a) && (c != b) && (c != a) && (b != a);
    }
  function GenerateInitialList()
    {
       
        for (var i = 1023; i <= 9876; i++)
            {
				if (can(i))
                {
					initlistN.push(i);
					
                }
            }
			rand()
    }
 function rand()
	{
		var c2,c3,c4,c1;	
		do
		{
			c1=Math.floor(Math.random()*10);
		}while(c1==0);
		do
		{
			c2=Math.floor(Math.random()*10);
		}while(c1==c2);

		do
		{
			c3=Math.floor(Math.random()*10);
		}while((c3==c2)||(c3==c1));

		do
		{
			c4=Math.floor(Math.random()*10);
		}while((c4==c3)||(c4==c1)||(c4==c2));
		number=c1*1000+c2*100+c3*10+c4
		var randNumber=document.getElementById('randNumber');
		randNumber.innerHTML=number;
		
	}
		
function getVacheTau()
	{
		tau = document.querySelector('input[name=inlineRadioOptions]:checked').value;
		vache = document.querySelector('input[name=inlineRadioOption]:checked').value;
		var tr = '<tr ><td>'+number+'</td><td>'+tau+'</td><td>'+vache+'</td></tr>';
		document.getElementById('nb'+c).innerHTML = number+"<br>";
		document.getElementById('t'+c).innerHTML = tau;
		document.getElementById('v'+c).innerHTML = vache;
		guess(vache,tau,number);
		if(c<6) 
		{
			if(initlistN.length==1)
			{
				document.getElementById("btn1").click(); 
				document.getElementById('bd1').innerHTML="Your number is "+initlistN[0]+'<br> ;)';
				
			}
			else
			{
				if(initlistN.length==0)
				{			
					document.getElementById("btn1").click(); 
					document.getElementById('bd1').innerHTML="Opps you made a mistake!";
			
				}
				
				else
				{
					document.getElementById('inlineRadio00').checked=true
					document.getElementById('inlineRadio1').checked=true
					setTimeout(rand, 500);
					c++
				}
			}
		}
		else
		{
				
				if(initlistN.length==1)
				{
					document.getElementById("btn1").click(); 
					document.getElementById('bd1').innerHTML="Your number is "+initlistN[0]+'<br> ;)';
				
				}
				else
				{
					if(initlistN.length>=1)
					{
						
						document.getElementById("btn1").click(); 
						document.getElementById('bd1').innerHTML="Your number is "+document.getElementById('randNumber').textContent
					
					}
					else
					{				
						document.getElementById("btn1").click(); 
						document.getElementById('bd1').innerHTML="You Win <br> :(";
					}
				}
		}				
	}
		
function verif(possi,essai)
	{
		var mtoreau = 0, mvache = 0, a = Math.trunc(possi / 1000), b = Math.trunc(possi/ 100) % 10, c = Math.trunc(possi / 10) % 10, d = possi % 10, e = Math.trunc(essai / 1000), f = Math.trunc(essai / 100) % 10, g = Math.trunc(essai / 10) % 10, h = essai % 10;
        
		if (a == e)
        { 
			mtoreau++;
        }
        if (b == f)
        {
            mtoreau++;
        }
        if (c == g)
        {
            mtoreau++;
        }
        if (d == h)
        {
            mtoreau++;
            }
        if ((a == f) || (a == g) || (a == h))
            {
            mvache++;
            }
        if ((b == e) || (b == g) || (b == h))
            {
            mvache++;
            }
        if ((c == f) || (c == e) || (c == h))
            {
            mvache++;
            }
        if ((d == f) || (d == g) || (d == e))
            {
            mvache++;
            }
			var x=mtoreau * 10 + mvache
	
        return x;
    }
		
function verify(possibility, numb,  vache,  tau)
    { 
	    var x=tau * 10 + parseInt(vache) 
        return (x == verif(possibility, numb));
    }
		
function guess(vache,tau,essai)
	{
		
        var i = 0;
        while (i < (initlistN.length))
            { 
            if (verify(initlistN[i], essai, vache, tau))

                {
					 i++;
                }

            else
                {
					initlistN.splice(i,1)
                }
            }
			
	
			
	}
	
