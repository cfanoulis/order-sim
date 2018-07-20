console.log("Initalizing");
//deps
const readline = require("readline");
const crypto = require("crypto");
const os = require("os");
const fs = require("fs");
const path = require("path");

//path setting (yay!)
const bpath = path.join(os.homedir(),"order-system", "logs");
const fpath = path.normalize(bpath);
const lpath = path.format({
	dir: fpath,
	base: "error_log.txt"
});

//Logging.
fs.readdir(fpath, function(err) {
	if (err)
	fs.mkdir(fpath, function (err) {
		if (err)
		 console.error ("[Log Module] Error while initializing the logs. The application must stop. Error trace:" + err);
		 process.exit(1);
	});
	fs.writeFile("error_log.txt")
});

const eout = fs.createWriteStream(lpath);
var logger = ({
	stdout: eout,
	stderr: eout,
	ignoreErrors: true,
	colorMode: false
});
const errorlog = new console.Console (eout);

fs.writeFile(lpath, " ---- ");

//Here comes the magic!!!!

try {
//Parse files
let content = fs.readFileSync("./files/config.json")
var config = JSON.parse(content)

//Initialize objects
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
const pwdhash = crypto.createHash("sha256");

//We should have finished
console.log("Files and dependencies loaded");
}		catch (err) {
	console.error("A fatal problem has occured while initializing the application. The application must close. Error: " + err);
	errorlog.error("[ERROR] Initialization problem. Trace: " + err);
	process.exit(1)
}

//Connect to the database
console.log("Connecting to the database...");
var mysql = require('mysql');
var db = mysql.createConnection({
host     : 'localhost',
port     : config.port,
user     : config.dbuser,
password : config.dbpassword,
database : 'order-bot'
});
db.connect(function (err) {
	console.error("[Database Connection] A problem was encountered while connecting to the database. The programm must stop. Error stack:" + err);
	errorlog.error("[ERROR] Database error. Trace:" + err);
	process.end(1);
	});

console.log ("Welcome to the Roblox Pizza teleorder system /n Please login to our system with your credentials or register for a new account. The following wizard will guide you through the process.");


rl.question("[Connection Wizard] Do you wish to login or register? Type login or register  accordingly"), (answer) => 
{rl.pause;
if (answer === login) {
	for(; fans=login ;)
rl.question ("[Login Wizard] Please select your account type /n u=user /n  e=employee"), (answer) => {let acct = answer;
rl.pause();
}

rl.question ("[Login Wizard] Please type in your User ID or Employee ID"), (answer) => {
let userid = answer;
rl.pause;
}

rl.question ("[Login Wizard] Please type in your password. Case insensitive due to our password policies"), (answer) => {pwdhash.update(answer);
	let pwd = pwdhash.digest("hex")
		}
	}
}
wizard();
console.log("Please confirm that the following data is correct:")
if (acct === u) {
	console.log("Account type: User");
}		else {
	console.log ("Account type: Employee");
}
console.log("User/Employee ID:"+userid)
console.log("Password:****")
rl.question("To correct any wrong credentials, please type reset. If the credentials are correct, please type login. If you wish to quit, type quit")







connection.on("error",function(err) {
	console.error ("[Database Error] A problem has occurrd regarding the database. The app must shut down. Error Code" + err);
	process.exit(1)
});