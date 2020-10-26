import React, { useState} from 'react';
import NavBar from './../../navbar';
import data from './books.json';
import Pagination from './pagination';
import BookCover from './../../../assets/BookCover.png';
import './../user/user.css';
const Search = () => {
	const [ books, setBooks ] = useState(data);
	const [ pagination, setPagination ] = useState({
		start: 0,
		end: 4
	});

	const [ showPerPage, setShowPerPage ] = useState(9);
	const onPaginationChange = (start, end) => {
		console.log('start', start, 'end', end);
		setPagination({
			start: start,
			end: end
		});
	};
	return (
		<div>
			<NavBar />
			<form class="form-inline active-pink-3 active-pink-4">
  <i class="fas fa-search" aria-hidden="true"></i>
  <input class="form-control form-control-sm ml-3 w-75 mySearch" type="text" placeholder="Search"
    aria-label="Search"/>
</form>
			<div className="row d-flex justify-content-center">
				{books.slice(pagination.start, pagination.end).map((d, i) => {
					return (
						<div className="col col-lg-4 col-md-4 col-sm-4 col-xs-6 booksCol" key={i}>
							<div className="card ">
								<div className="card-body">
									<img
										class="card-img-top"
										src={BookCover}
										alt="Card image"
										height="150px"
										width="150px"
									/>
									<h5 className="card-title">{d.BookName}</h5>
									<p class="card-text">{d.Volume}</p>
								</div>
								<div class="card-footer">
									<small class="text-muted">Last updated 3 mins ago</small>
								</div>
								<a href="#" class="btn btn-primary">
									Book
								</a>
							</div>
						</div>
					);
				})}
			</div>
			<Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={books.length} />
		</div>
	);
};

// }

export default Search;
