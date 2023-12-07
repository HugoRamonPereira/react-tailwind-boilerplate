import { Link } from 'react-router-dom';
import { Button } from '../../../components/buttons/button';
import { AnimatedInput } from '../../../components/inputs/animated-input';
import { useSigninController } from './useSigninController';
import { AnimatedPasswordInput } from '../../../components/inputs/animated-password-input';

export function Signin() {
  const { handleSubmit, register, errors, isPending } = useSigninController();

  return (
    <div className='flex flex-col items-center justify-center'>
      <header className='flex flex-col items-center gap-5'>
        <p className='text-3xl font-light tracking-wider'>Login</p>
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

        <AnimatedPasswordInput
          type='password'
          placeholder='Password'
          error={errors.password?.message}
          {...register('password')}
        />

        <p className='flex justify-center md:flex-none flex-col md:flex-row space-x-3 font-light tracking-wide text-center'>
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
