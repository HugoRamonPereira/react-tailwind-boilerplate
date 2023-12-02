import { Link } from 'react-router-dom';
import { Button } from '../../../components/buttons/button';
import { AnimatedInput } from '../../../components/inputs/animated-input';
import { useSigninController } from './useSigninController';
import React from '../../../../public/react.svg';
import Tailwind from '../../../../public/tailwind.svg';

export function Signin() {
  const { handleSubmit, register, errors, isPending } = useSigninController();

  return (
    <div className='flex flex-col items-center justify-center w-5/6 h-5/6'>
      <header className='flex flex-col items-center gap-5'>
        <p className='text-lg font-light tracking-wide'>
          Welcome to the React.js and TailwindCSS template
        </p>
        <div className='flex gap-5'>
          <img src={React} alt='React.js logo' width={50} />
          <img src={Tailwind} alt='TailwindCSS logo' width={60} />
        </div>
        <p className='text-3xl font-light tracking-wider'>Login Form</p>
      </header>
      <form
        className='mt-5 lg:mt-3 flex flex-col gap-4 w-full p-8'
        onSubmit={handleSubmit}
      >
        <AnimatedInput
          type='email'
          placeholder='Email'
          error={errors.email?.message}
          {...register('email')}
        />

        <AnimatedInput
          type='password'
          placeholder='Password'
          error={errors.password?.message}
          {...register('password')}
        />

        <p className='flex justify-center md:flex-none flex-col md:flex-row space-x-3 font-light tracking-wide'>
          <span className='text-sm lg:text-base text-gray-700'>
            Don&apos;t have an account?
          </span>
          <Link
            to='/signup'
            className='text-sm lg:text-base text-teal-900 font-medium'
          >
            Sign up
          </Link>
        </p>

        <Button type='submit' className='mt-2' isLoading={isPending}>
          Sign in
        </Button>
      </form>
    </div>
  );
}
