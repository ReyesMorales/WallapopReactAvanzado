import './App.css';

import React from 'react';

const adverts = [
    {
        content: 
        "Se vende horno",
        userId: 1,
        id: 1,
    },{
        content: 
        "Se busca horno",
        userId: 2,
        id: 2,
    }
];

function App () {
return (<div className='App'>
    <ul>
        {
            adverts.map(advert => (<li key={advert.id}>{advert.content}</li>
            ))}
    </ul>
</div>
)};

export default App;

