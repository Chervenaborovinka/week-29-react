import React from 'react';

const ErrorComponent =({message}) => {
return(
    <div>
        <h2>Oops!</h2>
        <p>{message}</p>
        <img src="ВСТАВИТЬ ИЗБРЖ ОШИБКУ" alt="ERROR" />
    </div>
);
};

export default ErrorComponent;