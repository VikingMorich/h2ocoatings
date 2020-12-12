import React,{useState} from 'react';
import emailjs, { init } from 'emailjs-com';

init("user_uZyENKBtU2la8xrJoPgY6");

function useInput(initialValue){
    const [value,setValue] = useState(initialValue);
 
     function handleChange(e){
         setValue(e.target.value);
     }
 
    return [value,handleChange];
 }

export default function Form(){

 const [name,setName] = useInput('');
 const [surname,setSurname] = useInput('');
 const [email,setEmail] = useInput('');
 const [phone,setPhone] = useInput('');
 const [location,setLocation] = useInput('');
 const [comment,setComment] = useInput('');
 const [checked,setCheck] = useState(false);



 function handleSubmit(e){
   e.preventDefault() // stops default reloading behaviour
   emailjs.send("service_5jdppsk","template_o46nq8o",{
    from_name: "Mjod",
    message: "hello baby, it's working",
    });
     console.log(name);
     console.log(surname)
     console.log(email);
     console.log(phone);
     console.log(location);
     console.log(comment);
     console.log(checked);
 }

    return (
      <React.Fragment>
        <form method="POST" onSubmit={handleSubmit} className="c-form">
            <input placeholder="Name" value={name} onChange={setName}/>
            <input className="c-form--error" placeholder="Surname" value={surname} onChange={setSurname}/>
            <input placeholder="Email" value={email} onChange={setEmail}/>
            <input placeholder="Phone" value={phone} onChange={setPhone}/>
            <input placeholder="Location" value={location} onChange={setLocation}/>
            <textarea placeholder="Message" value={comment} onChange={setComment} rows="4" cols="50"/>
            <div className="c-form--checkbox">
                <input type="checkbox" id="vehicle1" name="vehicle1" value='bike' onChange={() => setCheck(!checked)}/>
                <label for="vehicle1">*Accept terms*</label>
            </div>
            <button>Submit</button>
        </form>
      </React.Fragment>
    )
}