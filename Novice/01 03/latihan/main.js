var app = new Vue({
    el: '#app',
    data: {
      pesan: 'Hai, ini Vue!'

    }
  })


  //Pengendalian Alur
  let a = 30;
  if (a==30) {
    console.log("Angka Benar");
  } else {
    console.log("Angka Salah");
  }
 
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log("Today is " +day)

  //looping
  for(let i=0;i<=5;i++){
      console.log(i)
  }

  let b = 5;
  do{
    b += 1;
    console.log(b);
  }while( b < 10);

  let c = 0;
  while(c<5){
      c++
      console.log(c);
  }

  for(let d=0;d<10;d++){
      if (d==3){
          break;
      }
      console.log("The number is: " +d);
  } 

  for(let e = 0; e<10;e++){
      if(e==6){
          continue;
      }
      console.log("Number is: " +e);
  }
