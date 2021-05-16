import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as emailjs from "emailjs-com";
import "./Contact.css";
const Contact = () => {
    const defaultEmail = {
        name: "",
        email: "",
        subject: "",
        message: ""
    };
    const [emailDetails, setEmailDetails] = useState(defaultEmail);
    const onSubmit = (e) => {
        e.preventDefault();
        const message = `${emailDetails.message} from ${emailDetails.email}`;
        let templateParams = {
            from_name: emailDetails.name,
            to_name: 'Naga Mahendra',
            subject: emailDetails.subject,
            message_html: message,
        }

        emailjs.send(
            'service_ek23pwi',
            'template_nhhamum',
            templateParams,
            'user_AfXjNKXhvxxv09w29RrAC'
        ).then((res) => {
            setEmailDetails(defaultEmail);
            showToast("Mail Sent Success");
        }).catch((err) =>{
            showToast("Please Try Again Later");
        });
        
    };
    const handleChange = (e) => {
        setEmailDetails({ ...emailDetails, [e.target.name]: e.target.value });
    }
    const showToast = (message) => {
        toast(message);
    };
    return (
        <div style={{ width: "40%", height: "50%", marginLeft: "30%", marginTop: "5%" }}>
            <ToastContainer position="top-center" />
            <form onSubmit={onSubmit}>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" name="name" value={emailDetails.name} onChange={handleChange} className="form-control" placeholder="Enter Name" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" name="email" value={emailDetails.email} onChange={handleChange} className="form-control" placeholder="Enter Email" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="subject" className="col-sm-2 col-form-label">Subject</label>
                    <div className="col-sm-10">
                        <input type="text" name="subject" value={emailDetails.subject} onChange={handleChange} className="form-control" placeholder="Enter Subject" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="message" className="col-sm-2 col-form-label">Message</label>
                    <div className="col-sm-10">
                        <textarea type="text" name="message" value={emailDetails.message} onChange={handleChange} className="form-control" placeholder="Enter Message" />
                    </div>
                </div>
                <Button type="submit" variant="primary" size="sm">Send Mail</Button>
            </form>
        </div>
    );
}

export default Contact;