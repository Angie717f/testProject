import { useDispatch, useSelector } from 'react-redux'
import { onFilterByCategories, selectFindCategory } from '../../../redux/slice/product/productSlice'

const AsideFilters = () => {

  const findCategory = useSelector(selectFindCategory)
  const dispatch = useDispatch()

  return (
    <div className='content_filters'>
        <div className='filters'>
          <div className='filter_title'>
            <h2>Filters</h2>
          </div>
            <div className="filters_category">
            {findCategory?.map((product) => {
                return  <div key={product} className='active-category' >
              <label>
                <input type="checkbox" onChange={(e) => dispatch(onFilterByCategories({product, isChecked: e.target.checked}))} />
                 {product}
              </label>
            </div>
          })}
            </div>
        </div>
    </div>
  )
}

export default AsideFilters