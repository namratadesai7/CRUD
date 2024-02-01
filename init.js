const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

main()
.then(() => {
    console.log("connection successfull")
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

let allChats=[
    {
        from:"neha",
        to:"priya",
        msg:"send me your exam sheets",
        created_at: new Date()
    },
    {
        from:"rohit",
        to:"mohit",
        msg:"send me your exam sheets",
        created_at: new Date()
    },
    {
        from:"tina",
        to:"meena",
        msg:"send me your exam sheets",
        created_at: new Date()
    },
    {
        from:"cutu",
        to:"putu",
        msg:"send me your exam sheets",
        created_at: new Date()
    },
    {
        from:"kareena",
        to:"meena",
        msg:"send me your exam sheets",
        created_at: new Date()
    },

]
Chat.insertMany(allChats);

