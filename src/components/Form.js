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
  const [message,setMessage] = useInput('');
  const [checked,setCheck] = useState(false);



  function handleSubmit(e){
    e.preventDefault() // stops default reloading behaviour
    emailjs.send("service_5jdppsk","template_ojjopdn",{
      name: name,
      surname: surname,
      email: email,
      phone: phone,
      location: location,
      message: message
    });
    setName('')
    setSurname('')
    setEmail('')
    setPhone('')
    setLocation('')
    setMessage('')
    setCheck(false)
    alert('email send')
  }

    return (
      <React.Fragment>
        <form method="POST" onSubmit={handleSubmit} className="c-form">
            <input placeholder="Name" value={name} onChange={setName}/>
            <input className="c-form--error" placeholder="Surname" value={surname} onChange={setSurname}/>
            <input placeholder="Email" value={email} onChange={setEmail}/>
            <input placeholder="Phone" value={phone} onChange={setPhone}/>
            <input placeholder="Location" value={location} onChange={setLocation}/>
            <textarea placeholder="Message" value={message} onChange={setMessage} rows="4" cols="50"/>
            <div className="c-form--checkbox">
                <input type="checkbox" id="vehicle1" name="vehicle1" value='bike' onChange={() => setCheck(!checked)}/>
                <label for="vehicle1">*Accept terms*</label>
            </div>
            <button>Submit</button>
        </form>
      </React.Fragment>
    )
}