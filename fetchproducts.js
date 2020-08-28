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
		//console.log(data)
	})
	
	.catch(error => console.log(error))

setTimeout(	() => {
	console.log("dataObj initialised")
	//since link-data is not valid JSON
	//I decided to use eval() to be able to dynamically parse it
	// although it's considered a huge security issue 
	dataArr = eval(dataArr); 
	console.log(dataArr);
}, 500);

// async function getData (url = ""){
// 	const response = await fetch(url)
// 		if(response.ok){
// 			console.log("Successful fetch!")
// 		} else {
// 			console.log("Unsuccessful fetch!");
// 		}

// 		return response.json();
// 	}

// let data = getData('https://gist.githubusercontent.com/Raisolution/2fa773f5b7009d4b7c487e7a0ae553c2/raw/970973ec20df902b56078623d97dc0af92e388aa/gistfile1.txt')
// console.log(data)