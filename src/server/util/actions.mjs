export default class actions {
  static create(user) {
    console.log("Inside create User!");
    return actions.mock("create", user);
  }

  static view(userid) {
    console.log("Inside view user");
    return actions.mock("view", { userid: userid });
  }

  static mock(choice, user) {
    let result = {};
    switch (choice) {
      case "create":
        result.userid = Math.round(Math.random() * 100000);
        result.message = "user created successfully!";
        break;
      case "view":
        result.userid = user.userid;
        break;
    }
    result.name = user.fname + " " + user.lname;
    result.fname = user.fname;
    result.lname = user.lname;
    console.log(result);
    return result;
  }
}
