import React, { useEffect, useState } from 'react'
import axios from '../axios'
import token from '../token'
import toast from 'react-hot-toast'
import { MutatingDots } from 'react-loader-spinner'

const Schedule = ({ user, role }) => {
  const [clinic, setclinics] = useState([])
  const [location, setlocation] = useState('')
  const [vaccine, setvaccine] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('');
  const [loading, setLoading] = useState(false)

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };
  useEffect(() => {
    const getClinic = async () => {
      try {
        setLoading(true)
        const res = await axios.get('/allClinic')
        setclinics(res.data)
        setLoading(false)

      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }
    getClinic()
  }, [])

  const handleTimeChange = event => {
    console.log(event.target.value)
    setSelectedTime(event.target.value)
  }

  const handleDateChange = event => {
    console.log(event.target.value)

    setSelectedDate(event.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true)

      const res = await axios.post(
        `/book-services/${selectedLocation}/${vaccine}/${selectedDate}/${selectedTime}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      toast.success(`${'Vaccination Booked'}`)

      setLoading(false)

    } catch (error) {
      toast.error(`${error.response.error}`)
      setLoading(false)

      console.log(error);
    }
  }

  return (
    <>
      <h2 class='steps-heading'>
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
        We believe in making the path to vaccination as effortless as possible
      </h2>
      <section class='steps-container'>
        {!user ? (
          <div class='step-box'>
            <img
              src='https://img.freepik.com/free-vector/add-user-concept-illustration_114360-557.jpg?w=740&t=st=1683640814~exp=1683641414~hmac=0725b0a71fcdbb59584377153d51ba4d7acb47ab4c882cfe0c0ab8c06b34aa14'
              alt='Step 1'
              class='step-image'
            />
            <p class='step-description'>
              Register with your personal information
            </p>
            <a href='registration.html' class='step-button'>
              Register Now
            </a>
          </div>
        ) : (
          <></>
        )}

        <div class='step-box'>
          <img
            src='https://img.freepik.com/free-vector/appointment-booking-with-smartphone_23-2148563698.jpg?w=740&t=st=1683640981~exp=1683641581~hmac=9ea9e9f68c80ae150a3372629f1f80140f4f63c7d9939034161ddfb22ec3a183'
            alt='Step 2'
            class='step-image'
          />
          <p class='step-description'>
            Book an appointment in your preferred clinic
          </p>
          <a href='#schedule' class='step-button'>
            Book Now
          </a>
        </div>

        <div class='step-box'>
          <img
            src='https://img.freepik.com/free-vector/organic-flat-vaccination-campaign_23-2148946500.jpg?w=740&t=st=1683641041~exp=1683641641~hmac=358dd238f3cc3b6d24f91f6cf279b6801da95a726e4c6263a092e2c8c8c89df7'
            alt='Step 3'
            class='step-image'
          />
          <p class='step-description'>
            Get your vaccination safely at the time of your appointment
          </p>
          <a href='#' class='step-button'>
            Learn More
          </a>
        </div>
      </section>

      <section id='schedule' class='scheduler-container'>
        <div class='scheduler-img'>
          <img
            src='https://img.freepik.com/free-vector/flat-vaccination-campaign-illustration_23-2148951103.jpg?w=900&t=st=1683644047~exp=1683644647~hmac=09756c4a74ba8b68420b735c4c7a65607e81997a9b7c52f43fb40ad327242359'
            alt='Scheduler Image'
            class='scheduler-img'
          />
        </div>
        <div class='scheduler-form'>
          <h2>Book Your Vaccine Appointment</h2>
          <p>Fill out the form below to schedule your vaccine appointment:</p>
          <form onSubmit={handleSubmit}>
            <label for='date'>Select Date:</label>
            <input
              type='date'
              onChange={handleDateChange}
              id='date'
              name='date'
              required
            />
            <label for='time'>Select Time:</label>
            <input
              onChange={handleTimeChange}
              type='time'
              id='time'
              name='time'
              required
            />

            <label for='location'>Select Location:</label>
            <select onChange={handleLocationChange} id='location' name='location' required>
              {clinic.map(c => {
                return (
                  <option value={c._id} key={c._id}>
                    {c.name}
                  </option>
                )
              })}
            </select>

            <label for='vaccine-selection'>Choose Vaccine:</label>
            <select onChange={e => setvaccine(e.target.value)} id='vaccine-selection' class='appointment-select'>
              <option value='Child Vaccination'>Child Vaccination</option>
              <option value='Adult Vaccination'>Adult Vaccination</option>
              <option value='Covid Vaccination'>Covid Vaccination</option>
              <option value='Pregnancy Vaccination'>
                Pregnancy Vaccination
              </option>
            </select>

            <button type='submit'>Book Appointment</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Schedule
