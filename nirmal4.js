const allUsers = [{
    firstName: "harkirat",
    gender: "male"
}, {
    firstName: "raman",
    gender: "male"
}, {
    firstName: "priya",
    gender: "female"
}];

for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i]["gender"] == "male") {
        console.log(allUsers[i]["firstName"]);
    }
}


//video 1:10:0