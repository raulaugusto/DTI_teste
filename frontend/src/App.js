// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';

import Header from '../src/components/Header';
import Form from '../src/components/Form';
import ReminderList from './components/ReminderList';
import { obterLembretes } from '../src/services/Lembretes';

function App() {
  const [lembretes, setLembretes] = useState({});

  const fetchLembretes = async () => {
    try {
      const lembretesData = await obterLembretes();
      setLembretes(lembretesData);
    } catch (error) {
      console.error('Erro ao obter lembretes:', error);
    }
  };

  useEffect(() => {
    fetchLembretes();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <div className='formSide'>
          <Form fetchLembretes={fetchLembretes} /> {/* Passa fetchLembretes como prop */}
        </div>
        <div className='remindersSide'>
          <ReminderList lembretes={lembretes} setLembretes={setLembretes} />
        </div>
      </main>
    </div>
  );
}

export default App;
