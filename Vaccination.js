import React from 'react'

const Vaccination = () => {
  return (
    <>
      <section class='vaccination-section'>
        <div class='vaccine-section'>
          <img
            src='https://img.freepik.com/free-vector/children-student-get-vaccines-with-doctor-protect-from-virus_40876-2699.jpg?w=740&t=st=1683637656~exp=1683638256~hmac=baa37630a76b2e1694ac411a58804b0157dba98a25b6a6ed4410811bbcdce9a4'
            alt='Child Vaccine'
            class='vaccine-image'
          />
          <div class='vaccine-description'>
            <h3>Child Vaccination</h3>
            <p>
              Child vaccination is crucial for the health and well-being of
              children. Vaccines protect children from serious and potentially
              life-threatening diseases such as measles, polio, and whooping
              cough.By vaccinating children, we can prevent outbreaks of
              dangerous diseases and protect future generations from preventable
              illnesses.
            </p>
            <a href='/schedule' class='btn-book-slot'>
              Book Your Slot
            </a>
          </div>
        </div>
        <div class='vaccine-section'>
          <div class='vaccine-description'>
            <h3>Adult Vaccination</h3>
            <p>
              Adult vaccination plays a vital role in maintaining the health and
              well-being of individuals throughout their lives. Vaccines for
              adults are designed to prevent the occurrence of
              vaccine-preventable diseases, reduce the severity of illnesses,
              and protect individuals from potential complications.Adult
              vaccines help prevent the onset of infectious diseases, such as
              influenza, pneumonia, hepatitis, and shingles.
            </p>
            <a href='/schedule' class='btn-book-slot'>
              Book Your Slot
            </a>
          </div>
          <img
            src='https://img.freepik.com/free-vector/doctor-injecting-vaccine-patient-illustrated_52683-56547.jpg?w=740&t=st=1683637536~exp=1683638136~hmac=156dde4110ef0a60fc464dbaa5376aa08697311f091b86b84c790282d5ed1e51'
            alt='Adult Vaccine'
            class='vaccine-image'
          />
        </div>
        <div class='vaccine-section'>
          <img
            src='https://img.freepik.com/free-vector/pregnancy-maternity-scene_24908-56928.jpg?w=740&t=st=1683637344~exp=1683637944~hmac=e321677678fd870d395d224d0a8958ee8f84a87fe37fe03b85cd3504af1e8aea'
            alt='Pregnancy Vaccine'
            class='vaccine-image'
          />
          <div class='vaccine-description'>
            <h3>Pregnancy Vaccination</h3>
            <p>
              Vaccinations during pregnancy are crucial for the health and
              well-being of both the mother and the baby.Vaccines given during
              pregnancy can protect the mother from diseases that could pose a
              risk to her health and potentially affect the developing baby.
              Vaccinations help prevent illnesses such as influenza (flu) and
              pertussis (whooping cough), which can be particularly severe
              during pregnancy.By receiving vaccinations during pregnancy, women
              contribute to the overall protection of their families and
              communities.
            </p>
            <a href='/schedule' class='btn-book-slot'>
              Book Your Slot
            </a>
          </div>
        </div>
        <div class='vaccine-section'>
          <div class='vaccine-description'>
            <h3>COVID-19 Vaccination</h3>
            <p>
              COVID-19 vaccination has become a critical tool in controlling the
              spread of the virus and protecting individuals and
              communities.COVID-19 vaccines are designed to prevent individuals
              from contracting the COVID-19 virus.Vaccinated individuals are
              less likely to experience severe symptoms, hospitalization, or
              death compared to those who are unvaccinated. COVID-19 vaccines
              are particularly important for vulnerable populations, including
              the elderly, individuals with underlying health conditions, and
              those with weakened immune systems.
            </p>
            <a href='/schedule' class='btn-book-slot'>
              Book Your Slot
            </a>
          </div>
          <img
            src='https://img.freepik.com/free-vector/flat-hand-drawn-doctor-injecting-vaccine-patient_23-2148855954.jpg?w=740&t=st=1683637479~exp=1683638079~hmac=848bfdcc084a1bcd1fb61bb3620e6503e2da1589897c35d7d42308899d4077f0'
            alt='COVID-19 Vaccine'
            class='vaccine-image'
          />
        </div>
      </section>
    </>
  )
}

export default Vaccination
