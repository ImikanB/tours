import React, { useState } from 'react'

import { Places } from './data'

const App = () => {
  // const [showMore, setShowMore] = useState(false)
  const [location, setLocation] = useState(Places)

  const toggleButton = (id) => {
    setLocation(
      location.map((city) =>
        city.id === id ? { ...city, showMore: !city.showMore } : city
      )
    )
  }

  const removeCity = (id) => {
    let newCity = location.filter((city) => city.id !== id)
    setLocation(newCity)
  }
  return (
    <>
      <main>
        <section>
          <div className='title'>
            <h2>our tours</h2>
            <div className='title-underline'></div>
          </div>

          <div className='tours'>
            {location.map((city) => {
              return (
                <>
                  <article key={city.id} className='single-tour'>
                    <img className='image' src={city.img} alt='' />
                    <div className='tour-info'>
                      <span className='tour-price'>{city.price}</span>
                      <h5>{city.place}</h5>
                      <p>
                        {city.about}
                        {city.showMore && <> {city.more} </>}
                        {!city.showMore && '...'}{' '}
                        <button
                          className='more'
                          onClick={() => toggleButton(city.id)}
                        >
                          {city.showMore ? 'read less' : 'read more'}
                        </button>
                      </p>
                      <button
                        className='delete-btn'
                        onClick={() => removeCity(city.id)}
                      >
                        Not Interested
                      </button>
                    </div>
                  </article>
                </>
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
