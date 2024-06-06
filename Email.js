const form = document.getElementById('contact_form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('Name').value;
    const email = document.getElementById('Email').value;
    const message = document.getElementById('Message').value;

    if(!name || !email || !message){
        alert("Please Fill All The Entries");
        return;
    }


    sendEmail(name, email, message);
});
function sendEmail(name, email, message) {
    console.log('Sending email...');
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "pranjaljain19a@gmail.com",
        Password:"A55B557F7BFE65103E4591E295D36311C9AB",
        To: 'pranjaljain19a@gmail.com',
        From: "pranjaljain19a@gmail.com",
        Subject: "New Contact Form Enquiry",
        Body: `Name: ${name} <br> Email: ${email} <br> Message: ${message}`
    }).then(
        response => {
            console.log('Email sent:', response);
            alert('Form Submitted');
            form.reset();
        }
    ).catch(
        error => {
            console.error('Failed to send email:', error);
            alert("Failed to send email: " + error);
        }
    );
}