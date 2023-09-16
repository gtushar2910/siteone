"use client"
import React from 'react'
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import {
    Card,
    Spacer,
    Button,
    Input,
    Checkbox,
} from "@nextui-org/react";

const SignIn = () => {

  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignIn = async (e) => {
    setError(false)
    await signIn('credentials', {
      redirect: false,
      email,
      password,
    })
      .then((response) => {
        console.log(response.error)
        if(response.error == null){
          router.replace('/Staff/'+email)
        }
        else {
          setError(true)
          router.refresh()
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
            <div className='box-border p-4 border-4 border-black'>
                <h1 className="flex font-sans text-indigo-500 justify-center p-4 text-2xl font-bold">Login</h1>
                {error ? (<h1 className="flex font-sans text-red-500 justify-center p-4 text-sm font-bold">Invalid Username or Password</h1>) : (<></>)}
                <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Email Address"
                    classNames={classnames}
                    onValueChange={setEmail}
                />
                <Spacer y={4} />
                <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Password"
                    classNames={classnames}
                    type='password'
                    onValueChange={setPassword}
                />
                <Spacer y={2} />
                <div className='grid grid-cols-3 p-4 py-4'>
                {/* <Checkbox>
                    <p className="flex font-sans justify-left text-md text-purple-700 font-bold"> Remember Me </p>
                </Checkbox> */}
                <Spacer x={1} />
                <Spacer x={1} />
                {/* <p className="flex font-sans justify-right text-md text-red-700 font-bold"> Forgot password </p> */}
                </div>
                <div className='flex items-center justify-center'>
                <Button color="primary" onPress={handleSignIn}>Sign in</Button>
                </div>
                
             
                
               
            </div>


        </div>
    )
}

export default SignIn
