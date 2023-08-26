import { useState } from "react"

const Contact = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        message: "",

    })

    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value })

    }

    const postData = async (e) => {
        e.preventDefault();

        const { name, email, message } = user;




        const res = await fetch("https://contact-us-form-3e8fb-default-rtdb.firebaseio.com/contact-us-form.json",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                })
            }
        );

        if (res) {
            setUser({
                name: "",
                email: "",
                message: "",

            })
            alert("Data Stored Succcessfully")
        }
    }


    return (
        <div className="contact">
            <main>
                <h1>Contact Us</h1>

                <form method="POST">
                    <div>
                        <lable>Name</lable>
                        <input type="text" name="name" required placeholder="Enter your Name" value={user.name} onChange={getUserData} />
                    </div>

                    <div>
                        <lable>Email</lable>
                        <input type="text" name="email" required placeholder="Enter your Email" value={user.email} onChange={getUserData} />
                    </div>

                    <div>
                        <lable>Message</lable>
                        <input type="text" name="message" required placeholder="Tell Us About Your Self" value={user.message} onChange={getUserData} />
                    </div>

                    <button type="submit" onClick={postData}>Send</button>
                </form>


            </main>

        </div>
    )
}

export default Contact
