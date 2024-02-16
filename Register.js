import React, { useState } from 'react'
import axios from '../axios'
import toast from 'react-hot-toast'
import { MutatingDots } from 'react-loader-spinner'

const Register = () => {

  const [fullName, setfullname] = useState('')
  const [dob, setdob] = useState('')
  const [email, setemail] = useState('')
  const [mobileNumber, setmobileNumber] = useState('')
  const [gender, setgender] = useState('')
  const [occupation, setoccupation] = useState('')
  const [idType, setidType] = useState('')
  const [idNumber, setidNumber] = useState('')
  const [issuedAuthority, setissuedAuthority] = useState('')
  const [password, setpassword] = useState('')
  const [loading, setLoading] = useState(false)

  const [confirm_password, setconfirm_password] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
    setLoading(true)

      const res = await axios.post('/register', {
        fullName,
        dob,
        email,
        mobileNumber,
        gender,
        occupation,
        idType,
        idNumber,
        issuedAuthority,
        password
      })
      console.log(res.data);
      toast.success('Succesfull Register')
      setLoading(false)
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='cont-r'>
      {loading && (
          <>
            <div className='loader'>
              <div className='pop-overlay'></div>
              <MutatingDots
                height='100'
                width='100'
                color='#18206F'
                secondaryColor='#FBCBDC'
                radius='12.5'
                ariaLabel='mutating-dots-loading'
                wrapperStyle={{}}
                wrapperClass='mutating-dots-loading'
                visible={true}
              />
            </div>
          </>
        )}
      <div class='cont'>
        <header>Registration</header>
        <form action='#' onSubmit={handleSubmit}>
          <div class='form first'>
            <div class='details personal'>
              <span class='title'>Personal Details</span>
              <div class='fields'>
                <div class='input-field'>
                  <label>Full Name</label>
                  <input
                    value={fullName}
                    onChange={e => setfullname(e.target.value)}
                    type='text'
                    placeholder='Enter your name'
                  />
                </div>
                <div class='input-field'>
                  <label>Date of Birth</label>
                  <input
                    value={dob}
                    onChange={e => setdob(e.target.value)}
                    type='date'
                    placeholder='Enter birth date'
                  />
                </div>
                <div class='input-field'>
                  <label>Email</label>
                  <input
                    value={email}
                    onChange={e => setemail(e.target.value)}
                    type='text'
                    placeholder='Enter your email'
                  />
                </div>
                <div class='input-field'>
                  <label>Mobile Number</label>
                  <input
                    value={mobileNumber}
                    onChange={e => setmobileNumber(e.target.value)}
                    type='number'
                    placeholder='Enter mobile number'
                  />
                </div>
                <div class='input-field'>
                  <label>Gender</label>
                  <input
                    value={gender}
                    onChange={e => setgender(e.target.value)}
                    type='text'
                    placeholder='Enter your Gender'
                  />
                </div>
                <div class='input-field'>
                  <label>Occupation</label>
                  <input
                    value={occupation}
                    onChange={e => setoccupation(e.target.value)}
                    type='text'
                    placeholder='Enter your ccupation'
                  />
                </div>
              </div>
            </div>
            <div class='details ID'>
              <span class='title'>Identity Details</span>
              <div class='fields'>
                <div class='input-field'>
                  <label>ID Type</label>
                  <input
                    value={idType}
                    onChange={e => setidType(e.target.value)}
                    type='text'
                    placeholder='Enter ID type'
                  />
                </div>
                <div class='input-field'>
                  <label>ID Number</label>
                  <input
                    value={idNumber}
                    onChange={e => setidNumber(e.target.value)}
                    type='number'
                    placeholder='Enter ID number'
                  />
                </div>
                <div class='input-field'>
                  <label>Issued Authority</label>
                  <input
                    value={issuedAuthority}
                    onChange={e => setissuedAuthority(e.target.value)}
                    type='text'
                    placeholder='Enter issued authority'
                  />
                </div>
                <div class='input-field'>
                  <label>Password</label>
                  <input
                    value={password}
                    onChange={e => setpassword(e.target.value)}
                    type='password'
                    placeholder='Enter Password'
                  />
                </div>
                <div class='input-field'>
                  <label>Confirm Pasword</label>
                  <input
                    value={confirm_password}
                    onChange={e => setconfirm_password(e.target.value)}
                    type='password'
                    placeholder='Confirm Password'
                  />
                </div>
              </div>
              <button class='nextBtn'>
                <span class='btnText'>Submit</span>
                <i class='uil uil-navigator'></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
