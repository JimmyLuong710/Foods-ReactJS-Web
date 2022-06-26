import { render } from '@testing-library/react';
import React from 'react';

const AddComponent = (WrappedComponent) => {
    let a = 'red';
         return (props) => (
             <div style={{color: a}} >
            <WrappedComponent {...props} />
            </div>
        )
}

export default AddComponent;

