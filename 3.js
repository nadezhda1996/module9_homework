function useRequest(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  
  xhr.onload = function(){
    if (+input.value > 10 || input.value < 1 || isNaN(+input.value)) {
     resultNode.innerHTML = "Упс...Число вне диапазона от 1 до 10";
}  else {
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
		  resultNode.innerHTML = cards;
  }
const resultNode = document.querySelector("#j-result");
const btnNode = document.querySelector("#j-btn-request");
const value = document.querySelector('#input');

  btnNode.addEventListener('click', () => {
	useRequest(`https://picsum.photos/v2/list/?limit=${input.value}`, displayResult);
  });