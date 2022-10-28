import React, { useState } from 'react';
import styles from './Form.module.css';
import  App from './App';


//função para armazenar as entradas do formulario
const Form = () =>{
    const [form, setForm] = useState({
        name: '',
        email: '',
        tel: '',
        cpf: '',
        pais: '',
        estado: ''
    })

    //criandp um novo estado para validação
    const [emptyValue, setEmptyValue] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    

    //função para capturar os valores do form
    const handleChange = (e) =>{
        let newProp = form;
        newProp[e.target.name] = e.target.value;
        setForm({...newProp});
    }

    //verificação de campo vazio
    const handleSubmit = (e) =>{
        e.preventDefault();

       let emptyValues = Object.values(form).some(obj=>obj==='');
       setEmptyValue(emptyValues);


       //utilizando regex para validar email

       let validEmail = form['email'].toLocaleLowerCase().match(/[a-zA-z]+@[a-z]+\.com(\.br)*/);
       setValidEmail(validEmail);

    
    }
        
        
        return(
            
            <section className={styles.container}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className={styles.form_dados}>
                        <h3>Dados Pessoais</h3>
                    <label htmlFor='name'>Nome*:</label><br/>
                    <input type='text' name='name' id='name' onChange={(e) => handleChange(e)} /><br/>
                    {emptyValue && form["name"] === ""? <span className='emptyText'>Este campo precisa ser preenchido</span> : ""}
                    <label htmlFor='name'>Email*:</label><br/>
                    <input type='email' name='email' id='email' onChange={(e) => handleChange(e)} />
                    {emptyValue && form["email"] === "" ? <span className='emptyText'>Este campo precisa ser preenchido</span> : ""}
                    {!validEmail && form["email"] !== "" ? <span className='emptyText'>Email invalido</span> : ""}
                    
                    <label htmlFor='name'>Tel*:</label><br/>
                    <input type='tel' name='tel' id='tel' onChange={(e) => handleChange(e)} pattern='(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}'/>
                    {emptyValue && form["tel"] === "" ? <span className='emptyText'>Este campo precisa ser preenchido</span> : ""}
                    
                    <label htmlFor='name'>CPF*:</label><br/>
                    <input type='text' name='cpf' id='cpf' onChange={(e) => handleChange(e)} pattern='([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})'/>
                    {emptyValue && form["cpf"] === "" ? <span className='emptyText'>Este campo precisa ser preenchido</span> : ""}
                    </div>
                    <div className={styles.form_destinos}>
                        <h3>Destinos de Interesse</h3>
                    <label htmlFor='pais'>Pais*:</label><br/>
                    <select multiple name='pais' onChange={(e) => handleChange(e)} >
                        <option>brasil</option>
                        <option>argentina</option>
                        <option>uruguai</option>
                    </select><br/>
                    {emptyValue && form["pais"] === "" ? <span className='emptyText'>Este campo precisa ser preenchido</span> : ""}<br/>
                    <label htmlFor='estado'>Estado*:</label><br/>
                    <select multiple name='estado' onChange={(e) => handleChange(e)} >
                        <option>rio</option>
                        <option>minas</option>
                        <option>sergipe</option>
                    </select><br/>
                    {emptyValue && form["estado"] === "" ? <span className='emptyText'>Este campo precisa ser preenchido</span> : ""}
                    
                    </div>
                    
                    <button type='submit'>Enviar</button>
                    
                    <p>* Campos obrigatórios</p>
                    </form>
                    
               
                
            </section>
        )
    }



export default Form;