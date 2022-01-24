const axios = require('axios');

/*
// get request
axios.get("http://localhost:3000/users")
.then(res=>{
    console.log(res.data);
})

//post request
axios.post("http://localhost:3000/users",{
first_name: "ujwal",
last_name: "Dante",
email: "chalajabsdk@gmail.com"
})
.then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})

//delete request
axios.delete("http://localhost:3000/users/7")
.then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})

//put request
axios.put("http://localhost:3000/users/6",{
first_name: "ujwal",
last_name: "Danta",
email: "chalajabsdk@gmail.com"
})
.then(res=>{
    console.log(res.data);
})
.catch(err=>{
    console.log(err)
})*/

//patch request
axios.patch("http://localhost:3000/users/6",{
    first_name: "UjWaL"
})
.then(res=>{
    console.log(res.data)
})
.catch(err=>{
    console.log(err)
})