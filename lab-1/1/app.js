console.log('Welcome to data transmission');
document.getElementById('message').innerHTML = 'Message from JavaScript';


var sum = 10;
var name = 'Alexandru';
var isActive = true ;
var user = {
    id : 1,
    name : 'Andrei',
    age : 21
};


var user = {
    'id': 1,
    'name': 'Alexandru Cristea',
    'username': 'acristea',
    'email': 'acristea@test.com',
    'address': {
        'street': 'Padin',
        'number': 'Ap. 10',
        'city': 'Cluj-Napoca',
        'zipcode': '123456',
        'geo': {
            'lat': '46.783364',
            'lng': '23.546472'
        }
    },
    'phone': '004-07xx-123456',
    'company': {
        'name': 'XYZ',
        'domain': 'Air Traffic Management',
        'cities': ['Cluj-Napoca', 'Viena', 'Paris']
    }
}


console.log(user.name);
console.log(user.address.geo.lat);
console.log(user.company.name);
console.dir(user.company.cities);
console.log(user.company.cities[0]);


function print(message) {
    console.log(message);
}
print('hello');

var password='123456';
console.log(password=='123456'? 'ALLOW':'DENY');


if(password == '123456'){
    console.log('Permission accepted');
}else {
    console.log('Permission denied');
}


$('#message2').html('Hello there!');