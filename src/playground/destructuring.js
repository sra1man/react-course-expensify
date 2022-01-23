const person = {
    name:'sravan',
    age:31,
    location:{
        city:'Hyderabad',
        temp:38
    }
}

const book ={
    title:'Ego is the enemy',
    author:'Ryan Holiday',
    Publisher:{
        name:'Penguin'
    }
}

const item =['coffe','$2.00','$3.00','$4.00'];
const[itemName,,price] = item

const {title,author} = book;
const {name:PublisherName='Self Publish'} = book.Publisher;

console.log(`${itemName}, ${price}`);