import React, { useEffect, useState } from "react";
import { Input } from "@mui/material";
import { database } from "../Firebase-config/Firebase-config";
import { child, onValue, push, ref, set, update } from "firebase/database";
import { Button } from "@mui/material";
import '../App.css'
import Swal from "sweetalert2";

export const Messages = () => {
    const [user_input, setUser_input] = useState("");
    const [messages_data, setMessages_data] = useState([]);

    const change_handle = (e) => {
        setUser_input(e.target.value);
    };


    const submit_handle = () => {
        const new_message_key = push(child(ref(database), "messages")).key;
        set(ref(database, `messages/${new_message_key}`), {
            text: user_input,
            key: new_message_key,
        }).then((res) => {
            //   alert("Message sent");
            Swal.fire({
                title: "Your Message is sent",
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: 'blue',
                background: 'black',
                color: 'white'
            })

        });
    };
    const update_handle = () => {
        Swal.fire({
            title: "Do you want to Change the data of First List Item?",
            icon: 'question',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            confirmButtonColor: 'blue',
            background: 'black',
            color: 'white'
        }).then((result) => {
            if (result.isConfirmed) {
                set(ref(database, `messages/-Nr7ZbiAxwTjiiU9ysFU`), {
                    text: user_input,
                });
                Swal.fire({
                    title: "Your Changes are saved",
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: 'blue',
                    background: 'black',
                    color: 'white'
                })
            } else if (result.isDenied) {
                Swal.fire({
                    title: "Your Changes are not Saved",
                    confirmButtonText: 'OK',
                    icon: 'info',
                    confirmButtonColor: 'blue',
                    background: 'black',
                    color: 'white'
                })
            }
        });

    }
    useEffect(() => {
        const database_ref = ref(database, "messages/");
        onValue(database_ref, (snapshot) => {
            const data = snapshot.val();

            const convert_to_array = Object.values(data);

            setMessages_data(convert_to_array);
        });
    }, []);


    return (
        <>
            <div className="Text_Allignment mx-3">
                <div className="flex items-center space-x-2">
                    <Input
                        id="input_Firels"
                        placeholder="Enter Your text here... "
                        onChange={change_handle}
                    />
                    <Button className="Buttons" onClick={submit_handle}>Send Message</Button>
                    <Button className="Buttons" onClick={update_handle}>Update Messege</Button>
                </div>


                <br /><div className="sdfafdsf">
                    <ol className="Order_List" >
                        {messages_data.map((msg) => {
                            return <li className="list_Items">{msg.text}</li>;
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
};