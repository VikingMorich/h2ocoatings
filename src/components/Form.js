import React,{useState} from 'react';
//--------- BORRAR NODEMAILER SI NO FA FALTA -----------
/*var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: "webmailsmtp.register.it",
  port: 25,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'web@h2ocoatings.com',
    pass: 'H2O/53sEr!',
  },
});
  
  let mailOptions = {
    from: 'web@h2ocoatings.com',
    to: 'enricmoriche@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  */
//------------------------------------------

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
     console.log(name);
     console.log(surname)
     console.log(email);
     console.log(phone);
     console.log(location);
     console.log(comment);
     console.log(checked);
 }

    return (
        <form onSubmit={handleSubmit} className="c-form">
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
    )
}