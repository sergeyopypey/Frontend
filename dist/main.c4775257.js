const obj = {
    name: "Sergey",
    surname: "Troshin"
};
function myFunction() {
    const request = new Request("http://localhost:8888/api/user", {
        method: "POST",
        body: JSON.stringify(obj)
    });
    request.json().then((data)=>{
        console.log(this);
    });
    alert("Success!!!!!!!!");
} // const request = new Request('http://localhost:8888/api/user', {
 //   method: 'POST',
 //   body: JSON.stringify(obj)
 //  });

//# sourceMappingURL=main.c4775257.js.map
