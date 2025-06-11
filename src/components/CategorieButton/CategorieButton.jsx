import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router';

function CategorieButton({ categoryName }) {
    return (
        <>
            <Link to={"/category/" + categoryName} className='d-block w-100 card-border rounded-1' >
                <Button className='w-100 border-0 p-3 bg-white text-black rounded-1'>{categoryName.split(' ')
                    .map(letter => letter.charAt(0).toUpperCase() + letter.slice(1))
                    .join(' ')}
                </Button>
            </Link>
        </>
    );
}

export default CategorieButton;