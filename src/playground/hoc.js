//Higher Order Component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1> This is Info</h1>
        <p>  This is the sub {props.info}</p>
    </div>
 
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p> This is Private Info</p>
            <WrappedComponent {...props}/>
        </div>
    );  
};

const withAuthWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth && <p> This is Authenticated </p>}
            <WrappedComponent {...props}/>
        </div>
    );  
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = withAuthWarning(Info);


//ReactDOM.render(<AdminInfo isAuth ={true} info='Cheers !'/>,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth ={true} info='Cheers !'/>,document.getElementById('app'));