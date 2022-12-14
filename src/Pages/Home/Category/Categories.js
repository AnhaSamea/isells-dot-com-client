import React, { useEffect, useState } from 'react';
import CategoriesDetails from './CategoriesDetails';


const Categories = () => {
    const [categories, setCategories] = useState([]);
   
    useEffect(() => {
        fetch('https://isells-dot-com-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='mt-8 p-6 bg-slate-100 rounded-lg'>
            <p className='text-xl font-bold text-slate-800'>Categories</p>
            <div className='grid sm:grid-cols1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-8 mx-auto'>

                {
                    categories.map(category => <CategoriesDetails key={category._id} category={category} ></CategoriesDetails>)
                }


            </div>
            {/* <div>
            { product &&
                <BookingModal product={product}>
           
                </BookingModal>
            }
            </div>
            */}
        </div>
    );
};

export default Categories;