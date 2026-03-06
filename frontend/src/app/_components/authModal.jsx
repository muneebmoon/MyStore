"use client"
import React, { use, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function AuthModal({ setIsModalOpen }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [isSignUp, setIsSignUp] = useState(true);
    const [isLogin, setIsLogin] = useState(false);
    const [isOtp, setIsOtp] = useState(false);
    const [otp, setOtp] = useState("");

    function isPasswordMatched() {
        if (password === confirmpassword) {
            return true;
        } else {
            return false
        }
    }

    function validatePassword() {
        const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
        return regex.test(password);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (name != "" && email != "" && password != "" && confirmpassword != "") {
            if (isPasswordMatched()) {
                if (validatePassword()) {
                    setError("All done") // SignUp logic here
                    setIsSignUp(false);

                    setError(`We sent you OTP at ${email}.`);
                    setIsOtp(true);
                } else {
                    setError("Password must be at least 6 character long and must include letters, numbers, and special characters.")
                }
            } else {
                setError("Password doesn't matched!");
            }
        } else {
            setError("All fields are required!")
        }
    }
    
    function handleLogin(e){
        e.preventDefault();
        if(email != "" && password != ""){
            // auth logic here
        }else{
            setError("All fields are required!");
        }
    }

    function handleOtp(e){
        e.preventDefault();
        if(otp != ""){

        }else{
            setError("Please Enter your OTP.")
        }
    }

    return (
        <>
            {isSignUp && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
                    <div className="w-[900px] bg-white rounded-lg shadow-lg p-10">
                        <div className='flex flex-col gap-5'>
                            <div className="close-button flex flex-row-reverse cursor-pointer">
                                <Image src="/assets/x-icon.svg" width={40} height={40} alt='cross-icon' onClick={() => setIsModalOpen(false)} />
                            </div>
                            <div className='flex items-center justify-center'>
                                <Image src="/assets/circle-user.svg" width={120} height={90} alt='avatar' />
                            </div>
                            <h2 className="text-2xl font-bold text-center">Become a member of Everlane!</h2>
                            <form onSubmit={handleSubmit} method='POST' className='flex flex-col gap-5'>
                                <div className="fullname flex flex-col gap-2">
                                    <label htmlFor="name" className='text-lg'>Full name</label>
                                    <input type="text" name="name" id="name" placeholder='Type your name' className='outline p-2 rounded' onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="fullname flex flex-col gap-2">
                                    <label htmlFor="email" className='text-lg'>Email</label>
                                    <input type="email" name="email" id="email" placeholder='Type your Email' className='outline p-2 rounded' onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="fullname flex flex-col gap-2">
                                    <label htmlFor="password" className='text-lg'>Password</label>
                                    <input type="password" name="password" id="password" placeholder='Password' className='outline p-2 rounded' onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="fullname flex flex-col gap-2">
                                    <label htmlFor="confirmpassword" className='text-lg'>Confirm Password</label>
                                    <input type="password" name="confirmpassword" id="confirmpassword" placeholder='Confirm Password' className='outline p-2 rounded' onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>
                                {error && (<p className='text-red-500'>{error}</p>)}
                                <button type='submit' className='bg-black p-3 text-white text-lg rounded-lg cursor-pointer'>Sign Up</button>
                            </form>
                            <span>Already have an account? <Link href="#" className='text-blue-500 underline' onClick={() => { setIsLogin(true); setIsSignUp(false) }}>Sign In to your account</Link></span>
                        </div>
                    </div>
                </div>
            )}

            {isOtp && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
                    <div className="w-[900px] bg-white rounded-lg shadow-lg p-10">
                        <div className='flex flex-col gap-5'>
                            <div className="close-button flex flex-row-reverse cursor-pointer">
                                <Image src="/assets/x-icon.svg" width={40} height={40} alt='cross-icon' onClick={() => setIsModalOpen(false)} />
                            </div>
                            <div className='flex items-center justify-center'>
                                <Image src="/assets/circle-user.svg" width={120} height={90} alt='avatar' />
                            </div>
                            <h2 className="text-2xl font-bold text-center">Verification</h2>
                            <form onSubmit={handleOtp} method='POST' className='flex flex-col gap-5'>
                                <div className="fullname flex flex-col gap-2">
                                    <label htmlFor="confirmpassword" className='text-lg'>Enter Your OTP</label>
                                    <input type="password" name="confirmpassword" id="confirmpassword" placeholder='OTP' className='outline p-2 rounded' onChange={(e) => setOtp(e.target.value)} />
                                </div>
                                {error && (<p className='text-red-500'>{error}</p>)}
                                <button type='submit' className='bg-black p-3 text-white text-lg rounded-lg cursor-pointer'>Verify OTP</button>
                            </form>
                            <span>Already have an account? <Link href="#" className='text-blue-500 underline' onClick={() => { setIsLogin(true); setIsSignUp(false) }}>Sign In to your account</Link></span>
                        </div>
                    </div>
                </div>
            )}

            {isLogin && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
                    <div className="w-[900px] bg-white rounded-lg shadow-lg p-10">
                        <div className='flex flex-col gap-5'>
                            <div className="close-button flex flex-row-reverse cursor-pointer">
                                <Image src="/assets/x-icon.svg" width={40} height={40} alt='cross-icon' onClick={() => setIsModalOpen(false)} />
                            </div>
                            <div className='flex items-center justify-center'>
                                <Image src="/assets/circle-user.svg" width={120} height={90} alt='avatar' />
                            </div>
                            <h2 className="text-2xl font-bold text-center">Welcome back to Everlane!</h2>
                            <form onSubmit={handleLogin} method='POST' className='flex flex-col gap-5'>

                                <div className="fullname flex flex-col gap-2">
                                    <label htmlFor="email" className='text-lg'>Email</label>
                                    <input type="email" name="email" id="email" placeholder='Type your Email' className='outline p-2 rounded' onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="fullname flex flex-col gap-2">
                                    <label htmlFor="password" className='text-lg'>Password</label>
                                    <input type="password" name="password" id="password" placeholder='Password' className='outline p-2 rounded' onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                {error && (<p className='text-red-500'>{error}</p>)}
                                <button type='submit' className='bg-black p-3 text-white text-lg rounded-lg cursor-pointer'>Sign In</button>
                            </form>
                            <span>Don't have an account? <Link href="#" className='text-blue-500 underline' onClick={() => { setIsLogin(false); setIsSignUp(true) }}>Sign Up to create an account</Link></span>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AuthModal
