interface User {
    name:string ,
    age:number,
    email : string , 
    password :string
}

// can pick value from interface as well as type
type UserProfile  = Pick<User ,'name'|'password'>;
type UserProfileOPTIONAL  = Partial<UserProfile>;

const displayuserProfile = (user : UserProfileOPTIONAL) =>{
    console.log("Name is : ",user.name);
}

displayuserProfile({name:"nikhil"});

// function PrintDetails (user1 : User , user2 : User) :number{
//     return  user1.age + user2.age;
// }

// const sum = PrintDetails({name:'nikhil',age:24},{name:'silvi',age :25});
// console.log(sum);


type UserProfileData= {
        [key:string] :number
}

type Userss = Record <string,number>

const user1 : Userss ={

    "nikhil":21,
    "prateek":22

}

