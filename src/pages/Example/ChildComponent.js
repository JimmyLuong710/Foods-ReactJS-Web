import React from 'react';
import AddComponent from './AddComponent';
class ChildComponent extends React.Component {

    render() {
        return (
           <>
            <h1>this is child component </h1>
            <h2>chung ta cua sau nay lieu con co nhau -- </h2> 
            </>
        )
    }
}

export default AddComponent(ChildComponent)