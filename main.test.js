const supertest = require('supertest');
const request = supertest('http://localhost:4000');
const bcrypt = require("bcryptjs");

// const saltRounds = 10;
// let encryptedPassword;
// bcrypt.genSalt(saltRounds, function (saltError, salt) {
// 	if (saltError) {
// 	  throw saltError
// 	} else {
// 	  bcrypt.hash(userpassword, salt, function(hashError, hash) {
// 		if (hashError) {
// 		  throw hashError
// 		} else {
// 			encryptedPassword=hash;
// 			//console.log("Hash:",hash);
		  
// 		}
// 	  })
// 	}
//   })

describe('Express Route Test', function () {
	

	it('login successfully', async () => {
		return request
			.post('/login')
			.send({'userName': 'Sean Huels','UserEmail':'Craig64@yahoo.com' ,'userpassword': "ikcfxf5pg0WKS0A" })
			.expect('Content-Type', /text/)
			.expect(200).then(response => {
				expect(response.text).toEqual("login success");
			});
	});

	it('login failed', async () => {
		return request
			.post('/login')
			.send({'username': 'Sean Huels','email':'Craig64@yahoo.com' ,'userpassword': "019" })
			.expect('Content-Type', /text/)
			.expect(404).then(response => {
				expect(response.text).toEqual("Wrong login details");

	});
});
	

	it('register', async () => {
		return request
			.post('/register')
			.send({'userName': 'typa','UserEmail':'typa@gmail.com' ,'userpassword': "123456" })//,encryptedPassword:encryptedPassword })
			.expect('Content-Type', /text/)
			.expect(200).then(response => {
				expect(response.text).toEqual("New user is created");
	});
});

	it('register failed', async () => {
		return request
			.post('/register')
			.send({'username': 'Irene Ziemann','email':'Harley_Gottlieb97@hotmail.com' ,'password': "888"}) //,'encryptedPassword':encryptedPassword })
			.expect('Content-Type', /text/)
			.expect(404).then(response => {
				expect(response.text).toEqual("The username already exist!");
	});
});

it('delete', async () => {
	return request
		.post('/delete')
		.send({'userName': 'Jorge Murphy','UserEmail':'Keagan.Cruickshank@hotmail.com' ,'userpassword': "rDR_SFlf3tGXid1" })//,encryptedPassword:encryptedPassword })
		.expect('Content-Type', /text/)
		.expect(200).then(response => {
			expect(response.text).toEqual("The information is delete successfully");
	});
});

// 'delete failed', async () => {
// 	return request
// 		.post('/delete')
// 		.send({'username': 'user44','email':'dddefg@gmail.com' ,'password': "240700"}) //,'encryptedPassword':encryptedPassword })
// 		.expect('Content-Type', /text/)
// 		.expect(404).then(response => {
// 			expect(response.text).toEqual("The information is invalid");
// 	});
// });

	it('update successful', async () => {
		return request
			.patch('/update')
			.send({'userName': 'Aubrey Reilly','userpassword':"IelIxTjXbPeRcvX"})
			//.expect('Content-Type', /text/)
			.expect(200)//.then(response => {
				//expect(response.text).toEqual("Data is updated!")
	//});
})

});