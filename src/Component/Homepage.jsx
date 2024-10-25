import React from 'react'
import HOC from './HOC'
import Carouselsec from './Carouselsec'
import Whychooseus from './Whychooseus'
import Aboutus from './Aboutus'
import Product from './Product'
import Testimonial from './Testimonial'


function Homepage() {
  return (
<>
<Carouselsec/>
<Aboutus/>
<Product/>
<Testimonial/>
<Whychooseus/>
</>
  )
}

export default HOC(Homepage)