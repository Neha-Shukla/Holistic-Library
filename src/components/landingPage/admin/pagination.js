import React, {useState, useEffect} from 'react';

const Pagination = ({showPerPage,onPaginationChange,total}) => {
    const [counter,setCounter] = useState(1)
    const [noOfButtons,setNoOfButtons] = useState(Math.ceil(total/showPerPage));
    console.log(showPerPage)
    useEffect(() => {
        const value = (showPerPage*counter);
        console.log("start ",value-showPerPage);
        console.log("end ",value);
        onPaginationChange(value-showPerPage,value);
    }, [counter])
    
    const onButtonClick=(type)=>{
        if(type=="prev"){
            if(counter===1)
            setCounter(1);
            else
            setCounter(counter-1);
        }
        else if(type=="next"){
            if(noOfButtons===counter){
                setCounter(counter)
            }
            else
            setCounter(counter+1)
        }
    }
	return (
		<div className="d-flex justify-content-center">
			{/* <button className="btn btn-primary" onClick={()=>{
                onButtonClick("prev")
            }}>Previous</button>
			<button className="btn btn-primary " onClick={()=>{
                onButtonClick("next")
            }}>Next</button> */}

<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous" onClick={()=>{
                onButtonClick("prev")
            }}>
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    {new Array(noOfButtons).fill("").map((el,index)=>(

        <li class={`page-item ${index+1===counter?"active":null}`}><a class="page-link" href="#" onClick={()=>{
            setCounter(index+1)
        }}>{index+1}</a></li>
    ))}
    
    
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next" onClick={()=>{
                onButtonClick("next")
            }}>
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
		</div>
	);
};

export default Pagination;
