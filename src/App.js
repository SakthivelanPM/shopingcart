//App.js

import React, { useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import ShowCourseComponent from './components/ShowCourseComponent';
import UserCartComponent from './components/UserCartComponent';

function App() {
	const [courses, setCourses] = useState([
		{ id: 1, 
		name: 'PERFUME', 
		price: 799, 
		image: 
'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1698396366_6627270.jpg?format=webp&w=300&dpr=1.3'		},
		{ id: 2, 
		name: 'CAP', 
		price: 699, 
		image: 
'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1684595222_2806497.jpg?format=webp&w=480&dpr=1.3'		},
		{ id: 3, 
		name: 'BAG', 
		price: 999, 
		image: 
'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1691226169_6360487.jpg?format=webp&w=300&dpr=1.3'		},
    { id: 3, 
      name: 'SNEakers', 
      price: 7999, 
      image: 
'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1708010651_8739221.jpg?format=webp&w=480&dpr=1.3'      },
      { id: 3, 
        name: ' Hoodie', 
        price: 999, 
        image: 
       'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1702460615_8208292.jpg?format=webp&w=480&dpr=1.3'        }
        
	]);

	const [cartCourses, setCartCourses] = useState([]);
	const [searchCourse, setSearchCourse] = useState('');

	const addCourseToCartFunction = (GFGcourse) => {
		const alreadyCourses = cartCourses
							.find(item => item.product.id === GFGcourse.id);
		if (alreadyCourses) {
			const latestCartUpdate = cartCourses.map(item =>
				item.product.id === GFGcourse.id ? { 
				...item, quantity: item.quantity + 1 } 
				: item
			);
			setCartCourses(latestCartUpdate);
		} else {
			setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
		}
	};

	const deleteCourseFromCartFunction = (GFGCourse) => {
		const updatedCart = cartCourses
							.filter(item => item.product.id !== GFGCourse.id);
		setCartCourses(updatedCart);
	};

	const totalAmountCalculationFunction = () => {
		return cartCourses
			.reduce((total, item) => 
						total + item.product.price * item.quantity, 0);
	};

	const courseSearchUserFunction = (event) => {
		setSearchCourse(event.target.value);
	};

	const filterCourseFunction = courses.filter((course) =>
		course.name.toLowerCase().includes(searchCourse.toLowerCase())
	);

	return (
		<div className="App">
			<SearchComponent searchCourse={searchCourse} 
							courseSearchUserFunction=
								{courseSearchUserFunction} />
			<main className="App-main">
				<ShowCourseComponent
					courses={courses}
					filterCourseFunction={filterCourseFunction}
					addCourseToCartFunction={addCourseToCartFunction}
				/>

				<UserCartComponent
					cartCourses={cartCourses}
					deleteCourseFromCartFunction={deleteCourseFromCartFunction}
					totalAmountCalculationFunction={
						totalAmountCalculationFunction
					}
					setCartCourses={setCartCourses}
				/>
			</main>
		</div>
	);
}

export default App;
