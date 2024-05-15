function regis(){
    let user = {
        uname:uname.value,
        em:em.value,
        psw:psw.value,
        income:[],
        expense:[],
        saving:0,
        spent:0
    }
    if(user.uname==""||user.em==""||user.psw==""){
        alert("Please enter all details!")
    }
    else{
        if(user.em in localStorage){
            alert("A profile with this email already exist!")
        }
        else{
            localStorage.setItem(user.em,JSON.stringify(user))
            alert("Details added succesfully.")
            window.location="./index.html"
        }
    }
    uname.value=""
    em.value=""
    psw.value=""
}
function login(){
    if(em1.value in localStorage){
        let user1 = JSON.parse(localStorage.getItem(em1.value))
        if(user1.psw == psw1.value){
            sessionStorage.setItem("users",JSON.stringify(user1))
            alert('Login successfull.')
           window.location="./index2.html"
                }
        else{
            alert('Login failed! Wrong password or Wrong username')
        }
    }
    else{
        alert('Invalid user')
        em1.value=""
    }
    psw1.value=""
}
