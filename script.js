function passwordgen()
{
var big="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var small="abcdefghijklmnopqrstuvwxyz";
var number="0123456789";
var symbol="#@$!*&_-%";
var passlength=document.getElementById("passlength").value;
var status=new Array();
var total=temp="";
for(var tem=0; tem<4; tem++)
{status[tem]=document.getElementById("combo"+tem).checked;}
if(status[0]==true){total+=big;}
if(status[1]==true){total+=small;}
if(status[2]==true){total+=number;}
if(status[3]==true){total+=symbol;}

for (var i=0;i<passlength;i++)
{
temp+=total.charAt(Math.floor(Math.random()*total.length));
}
document.getElementById("result").value=temp; 
};
