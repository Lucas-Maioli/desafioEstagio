import React, { useEffect, useState } from 'react';
import api from "./services/api";
import Form from "./Form";

export default function App() {
          const [country, setCountry] = useState([]);
          const [city, setCity] = useState([]);

          useEffect(() => {
            api
              .get("/country")
              .then((response) => setCountry(response.data))
              .catch((err) => {
                console.error("ocorreu um erro" + err);
                
              });
          }, []);
          useEffect(() => {
            api
              .get("/city")
              .then((response) => setCity(response.data))
              .catch((err) => {
                console.error("ocorreu um erro" + err);
              });
          }, []);
          

    return (
      <div className="App">
        <h1>Lucas Paulista Maioli</h1>
      
        <Form />
      </div>
    );
  }


