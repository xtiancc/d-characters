import React from 'react'
import { useHistory } from 'react-router'

const NavButtons = ({id, data}) => {

    const {previousPage, nextPage} = data
    const history = useHistory();

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "auto"
        });
      }

    const handleClickBack = () => {
        const page = parseInt(id) - 1;
        history.push(`/page/${page}`)
        scrollToTop()
    }
    const handleClickNext = () => {
        scrollToTop()
        const page = parseInt(id)  + 1;
        history.push(`/page/${page}`)
    }

    return ( 
        <div className="my-3 mx-2 row">
            <div className="col-6">
                { previousPage && <button className="btn btn-dark" onClick={handleClickBack}>&lt; Previous</button> }
            </div>
            <div className="col-6 text-end">
                { nextPage && <button className="btn btn-dark" onClick={handleClickNext}>Next &gt; </button> }
            </div>
        </div>
    )
}

export default NavButtons
