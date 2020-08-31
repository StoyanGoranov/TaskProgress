let dataArr;
//fetch data from link
fetch('https://gist.githubusercontent.com/Raisolution/2fa773f5b7009d4b7c487e7a0ae553c2/raw/970973ec20df902b56078623d97dc0af92e388aa/gistfile1.txt')
	//check if fetch is Successful
	.then(res => {
		if(res.ok){
			console.log("Successful fetch!")
			//if Successful parse data as text
			return res.text()
		} else {
			console.log("Unsuccessful fetch!");
		}
	})
	//get data
	.then(data => {
		dataArr = data;
		passDataEvent(dataArr);
	})
	.catch(error => console.log(error))

//create custom event to pass data
function passDataEvent(){
	let event = new CustomEvent("passingData",  {
		detail : eval(dataArr)
	});
	window.dispatchEvent(event);
}


