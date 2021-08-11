import React, { useState } from 'react'
import Charac from './Charac';
import './Character.css'
import ReactPaginate from 'react-paginate';
function Character({ data }) {
    const [pageNumber, setPageNumber] = useState(0);

    const userPerPage = 10;
    const pageVisited = pageNumber * userPerPage
    const pageCount = Math.ceil(data.length / userPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    };

   

    return( <div className="each"> {data.slice(pageVisited, pageVisited + userPerPage)
        .map(item => {
            console.log(item);
                 return (
                   
                    <div className="items">
                            <Charac key={item.char_id} item={item} />
                            
                    </div>
                   
                )
            }
    
            )
    }
    
        <ReactPaginate
            PreviousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBtn"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            activeClassName={"paginationActive"}
        />
    </div>
    )
}

export default Character
