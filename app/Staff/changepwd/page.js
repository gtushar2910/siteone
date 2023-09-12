"use client"
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import {
    Spacer,
    Button,
    Input,
} from "@nextui-org/react";
import axios from 'axios';

const ChangePassword = () => {

    const [error, setError] = useState(false)
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const { data: session } = useSession();
    const router = useRouter();

    const handleChangePassword = async (e) => {

        if (password == '') {
            alert('Input Password')
            return;
        }

        if (newPassword == '') {
            alert('Input New Password')
            return;
        }

        if (newPassword != confirmPassword) {
            alert('New and Confirn Password do not match !')
            return;
        }
        axios.get("/api/auth/changepwd?email=" + session.user.email + "&password=" + password + "&newPassword=" + newPassword)
        .then(response => {
            if (response.data == "pass") {
                setError(false)
                alert('Password Changed Succesfully !!!');
                router.replace('/Staff/' + session.user.email)
            } else {
                setError(true)
                router.refresh()
            }
        })
        .catch(err => {
            console.error(err);
        })


    };

    const classnames = {
        label: "text-black/50 dark:text-white/90",
        input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
        ],
    };
    return (
        <div className='flex items-enter content-center justify-center  p-8'>
            <div className='box-border p-4 border-4 border-white'>
                <h1 className="flex font-sans text-indigo-500 justify-center p-4 text-2xl font-bold">Change Password</h1>
                {error ? (<h1 className="flex font-sans text-red-500 justify-center p-4 text-sm font-bold">Invalid Current Password</h1>) : (<></>)}
                <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Original Password"
                    classNames={classnames}
                    onValueChange={setPassword}
                    type='password'
                />
                <Spacer y={4} />
                <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="New Password"
                    classNames={classnames}
                    type='password'
                    onValueChange={setNewPassword}
                />
                <Spacer y={4} />
                <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Confirm New Password"
                    classNames={classnames}
                    type='password'
                    onValueChange={setConfirmPassword}
                />
                <Spacer y={4} />
                <div className='flex items-center justify-center'>
                    <Button color="primary" onPress={handleChangePassword}>Update</Button>
                </div>



            </div>


        </div>
    )
}

export default ChangePassword
