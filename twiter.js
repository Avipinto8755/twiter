function user(userName) {
  (this.userName = userName),
    (this.followAbout = []), //העוקבים שלי
    (this.follower = function (newUser) {
      this.followAbout.push(newUser);
    });

  (this.iFollowers = []), // אחרי מי שאני עוקב
    (this.iFollower = function (y) {
      this.iFollowers.push(y);
    });

  this.sendMessage = function (theMessage) {
    this.followAbout.forEach((userName) => {
      userName.acceptMessage(userName.userName, this.userName, theMessage);
    });
  };

  this.acceptMessage = function (toUser, fromUser, theMessage) {
    console.log(
      "the user:",
      fromUser,
      " sent message: ",
      theMessage,
      " to user:",
      toUser
    );
  };
}

let user1 = new user("Ayala");
let user2 = new user("ben");
let user3 = new user("Yaniv");
let user4 = new user("Omer");
let user5 = new user("Eli");

user1.iFollowers.push(user2);
user2.followAbout.push(user1);
user2.followAbout.push(user3);
user2.followAbout.push(user4);
user2.followAbout.push(user5);

user1.followAbout.push(user2);
user1.followAbout.push(user3);
user1.followAbout.push(user4);
user1.followAbout.push(user5);

user2.sendMessage("ma kore");
user1.sendMessage("ma kore");
