function changeContent(){
    
    document.getElementById('headerTitle').innerHTML='NCH Maracanã FIA - Junho 2021';
    document.getElementById("headerBT").style.display="none";

    document.getElementById('data1').innerHTML = "08/05/2013";
    document.getElementById('data2').innerHTML = "30/06/2021";
    document.getElementById('data3').innerHTML = "quinta-feira, 8 de maio de 2013";

    document.getElementById('info1').innerHTML="<h1>261,15</h1><h3>Cota NCH Maracanã FIA</h3>";
    document.getElementById('info2').innerHTML="<h1>R$ 114,55 Mi</h1><h3>PL Jungo 2021</h3>";
    document.getElementById('info3').innerHTML="<h1>-4,56%</h1><h3>Rentabilidade mês</h3>";
    document.getElementById('info4').innerHTML="<h1>15,27%i</h1><h3>Rentabilidade ano</h3>";
    document.getElementById('info5').innerHTML="<h1>139,67%</h1><h3>Rentabilidade ITD</h3>";

    document.querySelector(".content1 img").setAttribute("src","nch-test/assets/page2/content1.png");
    document.querySelector(".content2 img").setAttribute("src","nch-test/assets/page2/content2.png");
    document.getElementById("textContent").setAttribute("src","nch-test/assets/page2/text1.png");
    document.querySelector(".content3 img").setAttribute("src","nch-test/assets/page2/content3.png");
    document.querySelector(".content4 img").setAttribute("src","nch-test/assets/page2/content4.png");
    document.querySelector(".content5 img").setAttribute("src","nch-test/assets/page2/content5.png");

    document.getElementById('changePage').setAttribute("onclick","changeContent2()");
}

function changeContent2(){

    document.getElementById('headerTitle').innerHTML='NCH Maracanã Long Short FIM - Junho 2021';
    document.getElementById("headerBT").style.display="flex";

    document.getElementById('data1').innerHTML = "31/08/2018";
    document.getElementById('data2').innerHTML = "30/06/2021";
    document.getElementById('data3').innerHTML = "sexta-feita, 31 de agosto de 2018";

    document.getElementById('info1').innerHTML="<h1>R$ 23,49 Mi</h1><h3>PL</h3>";
    document.getElementById('info2').innerHTML="<h1>5,38%</h1><h3>Rentalidade mês</h3>";
    document.getElementById('info3').innerHTML="<h1>18,87%</h1><h3>Rentalidade ano</h3>";
    document.getElementById('info4').innerHTML="<h1>18,62%</h1><h3>Rentalidade ITD</h3>";
    document.getElementById('info5').innerHTML="";

    document.querySelector(".content1 img").setAttribute("src","nch-test/assets/page1/content-test2.png");
    document.querySelector(".content2 img").setAttribute("src","nch-test/assets/page1/content-test3.png");
    document.getElementById("textContent").setAttribute("src","nch-test/assets/page1/text-content1.png");
    document.querySelector(".content3 img").setAttribute("src","nch-test/assets/page1/content-test1.png");
    document.querySelector(".content4 img").setAttribute("src","nch-test/assets/page1/content-test4.png");
    document.querySelector(".content5 img").setAttribute("src","nch-test/assets/page1/content-test5.png");

    document.getElementById('changePage').setAttribute("onclick","changeContent()");
    
}