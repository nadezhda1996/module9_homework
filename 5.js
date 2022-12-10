const res= document.querySelector("#res");
const btn = document.querySelector("#btn");
const value = document.querySelector('#input');
const value2 = document.querySelector('#input2');
                                   

function useRequest(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  
  xhr.onload = function(){
    if ((input.value > 10 || input.value  < 0)&&(input2.value > 10 || input2.value  < 0) || (isNaN(+input2.value) && isNaN(+input.value))){
    res.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
    } else  if (input.value > 10 || input.value < 0 ||  isNaN(+input.value)) {
    res.innerHTML = "Номер страницы вне диапазона от 1 до 10";
  } else  if (input2.value > 10 || input2.value  < 0 ||  isNaN(+input2.value)) {
    res.innerHTML = "Лимит вне диапазона от 1 до 10";

  } else {       
      const result = JSON.parse(xhr.response);
      if (callback){
        callback(result);
    }
    }
  };
  
 xhr.send();
};

 function displayResult(apiData) {
	let cards = '';
        apiData.forEach(item => {
			const cardBlock = `
			  <div class="card">
				<img
				  src="${item.download_url}"
				  class="card-image width="200" height="100""
				/>
			  </div>
			`;
			cards = cardBlock + cards;
		  });
		  res.innerHTML = cards;
  }

  btn.addEventListener('click', () => {
	useRequest(`https://picsum.photos/v2/list?page=${input.value}&limit=${input2.value}`, displayResult);
  });

// function help (){
// localStorage.setItem("myKey", JSON.stringify(${item.download_url}));
// let resultSave = ("myKey");
// return resultSave
// }



