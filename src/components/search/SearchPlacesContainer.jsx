import React, {useState, useContext} from 'react'
import { useForm } from '../../hooks/useForm'
import { getPlaces } from '../../helpers/getPlaces.js'
import '../../assets/styles/SearchContainer.css'
import { AppContext } from '../../context/AppContext'
import getWeatherData from '../../helpers/getWeatherData'
import { types } from '../../types'
import { setLocalStorage } from '../../helpers/getLocalStorage'

export const SearchPlacesContainer = ({hidden}) => {
  const [, dispatch] = useContext(AppContext);
  const [results, setResults] = useState([])
  const [formValues, handleInputChange] = useForm({
  keyword: 'nogales' 
  })
  const { keyword } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    getPlaces(keyword).then(data =>{
      setResults(data)
    }
    )
  } 
  
  const handleWeatherData = (item) => {
    getWeatherData(item).then(data =>{
      const action = {
        type: types.infoUdapte,
        payload: {
          place: item,
          weatherStats: data
        }
      }
      setLocalStorage('lastPlace', JSON.stringify(item));
      dispatch(action)
      hidden(false)
    })
  }
  return (
    <div className="search__container">
      <i onClick={() => hidden(false)} className="fas fa-times"></i>
      <form onSubmit={handleSubmit} className="search__input">
        <div className="input__container">
          <i className="fas fa-search"></i>
          <input type="text" name='keyword' onChange={handleInputChange} placeholder="search location" />
        </div>
        <button>Search</button>
      </form>
      <div className="search__results">
        {results.length > 0
          ? results.map((item) => (
              <div
                key={item.name}
                onClick={() => handleWeatherData(item)}
                className="result__container"
              >
                <h3>{item.name}</h3>
                <p>&#62;</p>
              </div>
            ))
          : null}
      </div>
    </div>
  )
}
