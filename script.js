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
	}
]

function createSingleIndex() {
    const singlecontact = '<div class="contact"><p>${newcontact}</p></div>';
	return singlecontact
}

function renderIndex(contact) {
	let newcontact = document.querySelector('.main')
	for (let elem of contact) {
		newcontact.innerHTML += `<div class="contact"><p>${elem.name}</p></div>`;
	}
}

function cleanUpView() {
	const viewcards = document.querySelector('.contactinfo')
	viewcards.remove()
}

function renderView(singlecontact) {
	let addsinglecontact = document.querySelector('.main')
	addsinglecontact.innerHTML += `<div class="contactinfo"><div class="contactname">${singlecontact.name}<img src="./img/profile.jpg" class="profilepic" alt="Profile picture"></div><div class="contactemail">email: ${singlecontact.email}</div><div class="contactphone">cell: +1 ${singlecontact.phone}</div><div class="contactaddress">address: ${singlecontact.address}</div><div class="buttons"><button class="button edit" value="Edit">Edit</button><button class="button close" value="Close">Close</button></div></div>`;
}