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
	const newcontact = document.querySelector('.main')
	newcontact.innerHTML = `<div class="contact"><p>${contact[0].name}</p></div>`;
	newcontact.innerHTML += `<div class="contact"><p>${contact[1].name}</p></div>`;
}
