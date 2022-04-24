import React, { useContext, useState } from 'react';
import { CustomerContext } from '../contexts/customer';

const CustomerForm = ({ onSubmit }) => {
  const { submit } = useContext(CustomerContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('dados componente', { name, email });
    submit({ name, email });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">
          Nome:
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          E-mail:
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </label>
      </div>
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};

export default CustomerForm;
