import { Link } from 'react-router-dom'
import Star from '../../asset/svg/Star'
import './Restaurants.css'

const Restaurants = ({productsData}) => {

  return (
    <>
        <div className='product-image'>
          <img src={productsData.poster} alt="" />
        </div>

      <div className='product-info'>
        <div>
          <Link>{productsData.name}</Link>
          <span> <Star/> {productsData.rating}</span>
        </div>
        <div>
          <span> Min order {productsData.minOrder} $</span>
          <span>{productsData.workingHours}</span>
        </div>
      </div>
    </>
  )
}

export default Restaurants