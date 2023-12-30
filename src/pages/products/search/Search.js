import './search.scss'
import { useState } from 'react'

function Search({ setFilterInput, filterButtons, setFilterButtons }) {

    const [inputValue, setInputValue] = useState('')

    function handlerChange(e) {
        const inputValue = e.target.value
        setInputValue(inputValue);
        setFilterInput(inputValue)
    }

    function handlerButtonClick(e) {
        const value = e.target.getAttribute('data-country')

        if (filterButtons.includes(value)) {
            setFilterButtons(filterButtons.filter(item => (item !== value)))
        } else {
            setFilterButtons([...filterButtons, value])
        }
    }

    return (
        <section className="search">
            <div className="container">
                <div className="search__wrapper">
                    <label className="search__input-label">
                        Lookiing for
                        <input
                            value={inputValue}
                            onChange={handlerChange}
                            className='search__input'
                            placeholder='start typing here...'
                            type="text"
                            name="product"
                            id="" />
                    </label>

                    <div className="filter">
                        <div className="filter__wrapper">
                            <div className="filter__title">Or filter</div>

                            <div className="filter__buttons">
                                <button onClick={handlerButtonClick} data-country='brazil' className={`filter-button ${filterButtons.includes('brazil') ? 'active' : ''}`}>Brazil</button>
                                <button onClick={handlerButtonClick} data-country='kenya' className={`filter-button ${filterButtons.includes('kenya') ? 'active' : ''}`}>Kenya</button>
                                <button onClick={handlerButtonClick} data-country='columbia' className={`filter-button ${filterButtons.includes('columbia') ? 'active' : ''}`}>Columbia</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Search