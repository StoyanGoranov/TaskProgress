
//set a the date to 28th of July 1996
let now = new Date();
now.setFullYear(1996);
now.setMonth(6);
const _MS_PER_DAY = 1000 * 60 * 60 * 24;

//setTimeout to sync fetching of data and building the page
setTimeout( () => {
	//get the container for the content
	const container = document.getElementsByClassName("container")[0];
	//loop through fetched data, create HTML elements and append them to container
	dataArr.forEach(product => {
		//console.log(product);
		
		let item = createElems(product);

		setData(product,item.ul,item.card)

		
		item.content.appendChild(item.ul);
		
		item.card.appendChild(item.content);
		item.ul.appendChild(item.btn);
		container.appendChild(item.card);
		//check stock and apply results visually and semantically 
		checkStock(product, item.card, item.btn)
	});

},505);

//create all the major elements
function createElems(product){
	//div card that contains all the info about a product 
	const newCard = document.createElement("div");
	//div containing the textContent and button of a product
	const newCont = document.createElement("div");
	//ul structures different attributes of a product
	const newUl = document.createElement("ul");
	// button to add to card
	const btn = document.createElement("button");

	//add selectors to be able to manipulate product attributes
	newCard.setAttribute("id", product.ProductID)
	newCard.setAttribute("class", "card")
	newCont.setAttribute("class", "content");

	btn.setAttribute("id", "btn"+product.ProductID);
	btn.textContent = "Add to Cart";

	let page = {
		card:newCard,
		content:newCont,
		ul:newUl,
		btn:btn
	}
	return page 
}
//set the fetched data to be displayed in an element
function setData(product,ul,card){
	const img = document.createElement("img");
	const name = document.createElement("li");
	const price = document.createElement("li");
	const stock = document.createElement("li");


	
	img.setAttribute("id", product.ProductName);
	//add image of product to img element
	setImg(img);

	name.setAttribute("class", "name");
	//add product name to li 
	name.textContent = product.ProductName;
	price.setAttribute("class", "price");
	//add price to li
	price.textContent = "Price: $" + product.UnitPrice;
	//stock.setAttribute("class", "stock");

	//add price to li
	setStock(product, stock);

	card.appendChild(img);

	ul.appendChild(name);
	ul.appendChild(price);
	ul.appendChild(stock);


}

function setImg(img){
	//check if the img id corresponds to the product name and add a concrete image to each
	switch(img.getAttribute("id")){
		case "Chai":
			img.src="https://images.unsplash.com/photo-1579437059526-ef16f6084642?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
			break;
		case "Chang":
			img.src="https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80";
			break;
		case "Aniseed Syrup":
			img.src="https://images.unsplash.com/photo-1588518297451-04008f32974f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
			break;
		case "Chef Anton's Cajun Seasoning":
			img.src="https://images.unsplash.com/photo-1565498971161-42ae3dbcca75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
			break;
		case "Chef Anton's Gumbo Mix":
			img.src="https://images.unsplash.com/photo-1573145443291-e87e59b19816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80";
			break;
		case "Grandma's Boysenberry Spread":
			img.src="https://images.unsplash.com/photo-1566675225333-52bdf721eabd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80";
			break;
		case "Uncle Bob's Organic Dried Pears":
			img.src="https://images.unsplash.com/photo-1556216583-cb1ac9559189?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
			break;
		case "Northwoods Cranberry Sauce":
			img.src="https://images.unsplash.com/photo-1513861810402-53342bf5bd13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
			break;
		case "Mishi Kobe Niku":
			img.src="https://images.unsplash.com/photo-1583456156686-bccc0b9362f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
			break;
		case "Ikura":
			img.src="https://images.unsplash.com/photo-1595456982104-14cc660c4d22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
			break;
	}
}

function setStock(product, stock){
	//check if product is in stock
	if(product.UnitsInStock == 0){
		//if not check when it's going to restock based on difference between
		//the Now variable set to 28.7.1996
		//and the DeliveryOn date
		stock.textContent = diffInDays(now,product.DeliveryOn)+" days to delivery" ;
	} else {
		//if in stock display the amount
		stock.textContent = product.UnitsInStock + " left in stock";
	}
}

//change card and button to reflect state of product stock
function checkStock(product,card, button){
	if(product.UnitsInStock == 0){
		card.style.backgroundColor = "#768A74";
		button.disabled = true;
	} else {
		button.disabled = false;
		card.style.backgroundColor = "#A2D69F";
	}
	
	
}

//calculate difference between 2 dates in days (b-a)
function diffInDays(a, b) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}