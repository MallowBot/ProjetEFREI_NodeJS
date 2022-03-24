const mongoose = require('mongoose');

mongoose.connect(
        "mongodb://localhost:27017/leboncoin",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        (err) => {
          if (err) {
            console.log(err);
          } 
          else {
            console.log("Connexion à la base de donnée LEBONCOIN réussie !");
          }
        }
      );


      module.exports = (app) => {
        const { fake }   = require('Faker')
        const User = app.models.User;
    
        for (let i = 0; i < 10; i++) {
        let newUser = new User ({
            nom : fake.name.lastName(),
            prenom: fake.name.firstName(),
            addresse: fake.address.address(),
            mail: fake.internet.free_email(),
            password: fake.password.password(),
            age: fake.date.birthday(),
            phone: fake.phone.cell_phone(),
        })
        newUser.save()
    
        }
    }
    