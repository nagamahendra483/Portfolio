import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Contact.css";
const Contact = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        showToast();
    };
    const showToast = () => {
        toast("Backend Not Implemeted");
    };
    return (
        <div style={{ width: "40%", height: "50%", marginLeft: "30%", marginTop: "5%" }}>
            <ToastContainer position="top-center" />
            <form onSubmit={onSubmit}>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="Enter Name" />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="Enter Email" />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Subject</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="Enter Subject" />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Message</label>
                    <div class="col-sm-10">
                        <textarea type="text" class="form-control" placeholder="Enter Message" />
                    </div>
                </div>
                <Button type="submit" variant="primary" size="sm">Send Mail</Button>
            </form>
        </div>
    );
}

export default Contact;