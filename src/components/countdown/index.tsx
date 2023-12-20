'use client';

import { useEffect, useState } from 'react';
import { StartEvent } from './start-event';

export function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [countdownNotice, setCountdownNotice] = useState(false);

  useEffect(() => {
    const target = new Date('01/10/2024 10:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const day = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(day);

      const hour = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setHours(hour);

      const minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(minute);

      const second = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(second);

      if (day <= 0 && hour <= 0 && minute <= 0 && second <= 0) {
        setCountdownNotice(true);
      }

    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {countdownNotice ? (
        <StartEvent
          title='O evento vai começar'
          description='O maior evento de Segurança da Informação do Cariri!'
        />
      ) : (
        <div className='w-4/5 p-5 flex flex-col items-center'>
          <h1 className='mb-10 text-2xl font-light'>Este evento começará em:</h1>
          <div className='flex gap-5'>
            <div className='bg-gray-200 rounded-lg w-32 h-32 p-5 flex flex-col gap-3 items-center justify-center'>
              <h1 className='text-5xl'>{String(days).padStart(2, '0')}</h1>
              <h3>{days === 1 ? 'dia' : 'dias'}</h3>
            </div>
            <div className='bg-gray-200 rounded-lg w-32 h-32 p-5 flex flex-col gap-3 items-center justify-center'>
              <h1 className='text-5xl'>{String(hours).padStart(2, '0')}</h1>
              <h3> {hours === 1 ? 'hora' : 'horas'}</h3>
            </div>
            <div className='bg-gray-200 rounded-lg w-32 h-32 p-5 flex flex-col gap-3 items-center justify-center'>
              <h1 className='text-5xl'>{String(minutes).padStart(2, '0')}</h1>
              <h3>{minutes === 1 ? 'minuto' : 'minutos'}</h3>
            </div>
            <div className='bg-gray-200 rounded-lg w-32 h-32 p-5 flex flex-col gap-3 items-center justify-center'>
              <h1 className='text-5xl'>{String(seconds).padStart(2, '0')}</h1>
              <h3>{seconds === 1 ? 'segundo' : 'segundos'}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
