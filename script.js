function cleanUpIndex() {
    const indexcards = document.querySelectorAll('.contact')
    for (const elem of indexcards) {
        elem.remove();
    }
}

const contactList = [  
	{ 
		name: "Oliver Queen", 
		phone: "778-555-1234", 
		address: "101 Main St, Star City, USA",  
		email: "greenarrow@watchtower.com",  
	},   
	{    
		name: "Jessica Cruz",    
		phone: "123-555-5555",    
		address: "Portland Oregon",    
		email: "greenlantern@watchtower.com",  
	},
	{
		name: "Eunjeong Hur",
		phone: "778-123-4567",
		address: "Coquitlam, BC",
		email: "ahur@my.bcit.ca",
	},
]

function createSingleIndex(contact){

    let name = 'no name provided';
    if (typeof contact !== 'undefined'){
        name = contact.name
    }

    return `<a href="page3.html"><div class="contact"><p>${name}</p></div></a>`
}

function renderIndex(contactList){
    for (contact of contactList){
        const newcontact = document.querySelector('.main');
        newcontact.innerHTML += createSingleIndex(contact);
        newcontact.insertAdjacentElement('afterend', newcontact);
    }
}

function cleanUpView() {
	const viewcards = document.querySelectorAll('.contactinfo')
    for (const elem of viewcards) {
        elem.remove();
    }
}

function renderView(singlecontact) {
	addsinglecontact = `
	<div class="contactinfo">
        <div class="contactname">
            ${singlecontact.name}
            <img src="./img/profile.jpg" class="profilepic" alt="Profile picture">
        </div>
        <div class="contactemail">email: ${singlecontact.email}
		</div>
        <div class="contactphone">cell: +1 ${singlecontact.phone}
		</div>
        <div class="contactaddress">address: ${singlecontact.address}
		</div>
        <div class="buttons">
            <button class="button edit" value="Edit">Edit</button>
            <button class="button close" value="Close">Close</button>
        </div>
    </div>
	`
	document.querySelector('.main').innerHTML = addsinglecontact
	document.querySelector('.close').addEventListener('click', rendercontacts)
}
	
function rendercontacts(evt) {
	evt.preventDefault();
	clearall();
	renderIndex(contactList)
}

function cleanUpCreate() {
    const createcards = document.querySelectorAll('.contactedit')
    for (const elem of createcards) {
        elem.remove();
    }
}

function renderCreate() {
	addcontact = `
	<div class="contactedit">
		<div class="contactimg">
			<img src="./img/profile.jpg" class ="profilepic" alt="Profile picture">
			</div>
		<div class="form">
			<form>
				<div class="inputcontainer">
					<input type="text" id="contactname" name="contactname" placeholder="Contact Name">
					<button class="extrafield" id="extranamefield" name="extranamefield">+</button>
				</div>

				<div class="inputcontainer">
					<input type="tel" id="contactphone" name="contactphone" placeholder="Contact Phone">
					<button class="extrafield" id="extraphonefield" name="extraphonefield">+</button>
				</div>

				<div class="inputcontainer">
					<input type="text" id="contactaddress" name="contactaddress" placeholder="Contact Address">
					<button class="extrafield" id="extraaddressfield" name="extraaddressfield">+</button>
				</div>
				
				<div class="inputcontainer">
					<input type="email" id="contactemail" name="contactemail" placeholder="Contact Email">
					<button class="extrafield" id="extraemailfield" name="extraemailfield">+</button>
				</div>

				<div class="buttons">
					<button type="submit" class="button save" id="savecontact" name="savecontact">Save Contact</button>
					<button type="reset" class="button cancel" id="cancel" name="cancel">Cancel</button>
				</div>
			</form>
		</div>
	</div>
	`;

	document.querySelector('.main').innerHTML = addcontact
	document.querySelector('.cancel').addEventListener('click', rendercontacts)
	document.querySelector('.save').addEventListener('click', createcontact)
}

const contact_sidebar = document.querySelector('.nav-home')
const newcontact_sidebar = document.querySelector('.nav')
const contactview = document.querySelector('.main')

function createcontact(evt) {
	// evt.preventDefault();

	// const username = document.querySelectorAll('.inputcontainer').elements[0].value;
	
	// console.log(username)
	// console.log("hey")
	// const username = Object.create({}, {
	// 	getName: {
	// 		value: function () { return this.${document.querySelector('form').elements[0]};}
	// 	}
	// })
	// username.${document.querySelector('form').elements[0].value} = 1;
	// console.log(Object.keys(username));
	var elem_name = document.getElementsByName("contactname").value;
	console.log(elem_name)
	// var contact = {}
	// for(var i = 0 ; i < elements.length ; i++){
    //     var item = elements.item(i);
    //     obj[item.name] = item.value;
    // }
}

function clearall() {
	document.querySelector('.main').innerHTML = '';
}

function clickrenderindex(evt) {
	evt.preventDefault();
	clearall();
	renderIndex(contactList);
}

function clickrendercreate(evt) {
	evt.preventDefault();
	clearall();
	renderCreate();
}

function clickrenderview(evt) {
	evt.preventDefault();
	
	let contact_name;
	if (evt.target.tagName !== 'P') {
		return
	} else {
		contact_name = evt.target.innerHTML
	}
	let clicked_contact;
	for (let contact of contactList) {
		if (contact.name === contact_name) {
			clicked_contact = contact
		}
	}
	if (typeof clicked_contact === 'undefined') {
		return
	}

	clearall();
	renderView(clicked_contact);
}



contact_sidebar.addEventListener('click', clickrenderindex)
newcontact_sidebar.addEventListener('click', clickrendercreate)
contactview.addEventListener('click', clickrenderview)
