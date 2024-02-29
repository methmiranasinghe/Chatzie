//import { useState } from "react";
import { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignUp";
const SignUp = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const [inputs,setInputs] = useState({
    fullName:'',
    username:"",
    password:"",
    confirmPassword:"",
    gender:""

  })

  const {loading, signup} = useSignup();

  const handleCheckboxChange = (gender) =>{
    setInputs({...inputs,gender})
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    await signup(inputs)
    console.log(inputs);
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-orange-500"> ChatZie </span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) => setInputs({...inputs, fullName:e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) => setInputs({...inputs, username:e.target.value})}
             // onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) => setInputs({...inputs, password:e.target.value})}
              //onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Confirm Password"
              className="w-full input input-bordered h-10"
                value={inputs.confirmPassword}
              onChange={(e) => setInputs({...inputs, confirmPassword:e.target.value})}
              //value={password}
              //onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>
          <div>
            <button>
              
            {loading ? <span className="loading loading-spinner"></span> :"SignUp" }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

//Starter code
// import { useState } from "react";
// import GenderCheckbox from "./GenderCheckbox";
// const SignUp = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           SignUp
//           <span className="text-orange-500"> ChatZie </span>
//         </h1>

//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="John Doe"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="w-full input input-bordered h-10"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="label">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="label">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Confirm Password"
//               className="w-full input input-bordered h-10"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <GenderCheckbox/>
//           <a
//             href="/signup"
//             className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//           >
//             Already have an account?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2 border border-slate-700">
//               SignUp
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
