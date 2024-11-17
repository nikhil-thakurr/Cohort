import { SignedUpInput } from "@nikhil_thakur_code/medium-common";
import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Auth = ({type}:{type:"signup" | "signin"}) => {

    const navigate = useNavigate();
 
    const [inputs,setinputs] = useState<SignedUpInput>({
        name:"",
        username:"",
        password:""
    })

    const sendRequest = async ()=>{

        try{
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/${type=="signup"?"signup":"signin"}`,
            inputs);
            const token = res.data;
            localStorage.setItem("token",token)
            console.log(res)
            navigate("/blogs");
        }
        catch(e){
            console.log(e)
        }

    }

  return (

    <div className="h-screen flex justify-center items-center">
  <div className="flex flex-col p-6">
    <div className="text-3xl font-extrabold">Create an account</div>
    <div className="text-slate-500">{(type==="signup")?(`Already have an account ? `):"Dont't have an acount ? "}
       <Link className="underline" to={type=="signin"?"/signup":"/signin"}>{type=="signin"?"signup":"signin"}</Link> 
    </div>

    {type=="signup" &&  <div className="mt-4">
      <label className="block mb-2 text-sm font-medium text-gray-900">
        Name
      </label>
      <input
         type="text"
        id="first_name"
        onChange={(e)=>{setinputs((c)=>({...c,name:e.target.value}))}}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Nikhil Thakur"
        required
      />
    </div>}
   

    <div className="mt-4">
      <label className="block mb-2 text-sm font-medium text-gray-900">
        Email
      </label>
      <input
        type="text"
        id="first_name"
        onChange={e=>{setinputs(c=>({...c,username:e.target.value}))}}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="nikhil@gmail.com"
        required
      />
    </div>

    <div className="mt-4">
      <label className="block mb-2 text-sm font-medium text-gray-900">
        Password
      </label>
      <input
        type="password"
        id="first_name"
        onChange={e=>{setinputs(c=>({...c,password:e.target.value}))}}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="********"
        required
      />
    </div>

    <button onClick={sendRequest} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4 w-full">{(type=="signup"?"sign up" : "sign in")}</button>

  </div>
</div>

  );
};

export default Auth;
