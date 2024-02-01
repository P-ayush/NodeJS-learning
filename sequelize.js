const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("event_site", "root", "", {
    dialect:"mysql",
});
 
sequelize.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch((err) => {
    console.error('Unable to connect to the database:', err);
});
const User = sequelize.define('User', {
  name: {
      type: DataTypes.STRING,
      allowNull: false, 
  },
  user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true, 
  },
  password: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  phone_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
  },
}, {
    timestamps: false,
  tableName: 'user',
}
 
);

    User.create({
      name: 'John Doe',
      user_id: 123,
      password: 'securepassword',
      phone_number: 5551234567,
  })
      .then((user) => {
          console.log('User created successfully:', user.toJSON());
      })
      .catch((error) => {
          console.error('Error creating user:', error);
      }); 

User.findAll()
    .then((user) => {
        console.log('All users:', user.map(user => user.toJSON()));
    })
    .catch((error) => {
        console.error('Error retrieving users:', error);
    });