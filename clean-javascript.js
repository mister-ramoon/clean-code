/*Arrays*/

// No recomendado
const user = ["Juan", "Mariana", "Carmen"];

// Regular
const userList = ["Juan", "Mariana", "Carmen"];

// Bueno
const users = ["Juan", "Mariana", "Carmen"];

// Excelente
const usersNames = ["Juan", "Mariana", "Carmen"];

/*Booleanos*/

// No recomendado
const valid = true;
const read = false;
const color = true;

// Recomendado
const isValid = true;
const canRead = false;
const hasColor = true;

/*Números*/

// No recomendado
const users = 15;

// Recomendado
const maxUsers = 20;
const minUsers = 10;
const totalUsers = 15;

/*Funciones*/

// No recomendado
createUserIfNotExists();
updateUserIfNotExists();
sendEmailIfIsValid();

// Recomendado
createUser();
updateUser();
sendEmail();

/*Clases*/

// No recomendado
class Data {}
class Manager {}
class Infor {}

// Recomendado
class User {}
class UserAccount {}
class UserInformation {}
