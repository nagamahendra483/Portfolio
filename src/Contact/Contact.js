import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import * as emailData from "../data/homePage.json";
import 'react-toastify/dist/ReactToastify.css';
import "./Contact.css";
const Contact = () => {
    const defaultEmail = {
        name: "",
        email: "",
        subject: "",
        message: ""
    };
    const [emailDetails, setEmailDetails] = useState(defaultEmail);
    const [isLoading, setLoading] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        if(!validatePayload()) return;
        setLoading(true);
        const payload = {
            "from" : emailDetails.email,
            "to" : emailData.mailId,
            "name": emailDetails.name,
            "subject": emailDetails.subject,
            "body": emailDetails.message 
        }
        const request = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(payload)
        }

        fetch("https://email-service-portfolio.herokuapp.com/emailService/sendMail",
            request
        ).then((res) => {
            setEmailDetails(defaultEmail);
            showToast("Mail Sent Success");
        }).catch((err) =>{
            showToast("Please Try Again Later");
        }).finally(() => {
            setLoading(false);
        });  
    };

    const validatePayload = () =>
        isValid(emailDetails.email) &&
        isValid(emailDetails.message) &&
        isValid(emailDetails.subject) &&
        isValid(emailDetails.name);

    const isValid = (value) => value.length > 0;

    const handleChange = (e) => {
        setEmailDetails({ ...emailDetails, [e.target.name]: e.target.value });
    };
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
                <Button disabled={isLoading} type="submit" variant="primary" size="sm">Send Mail</Button>
            </form>
        </div>
    );
}

export default Contact;