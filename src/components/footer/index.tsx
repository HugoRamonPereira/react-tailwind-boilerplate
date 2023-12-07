export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='dark:bg-gray-900'>
      <div className='w-full max-w-screen-xl mx-auto p-3 md:py-5 text-center'>
        <span className='block text-xs sm:text-sm text-gray-500 sm:text-center dark:text-gray-300 font-extralight tracking-wide'>
          © {year}{' '}
          <a href='https://flowbite.com/' className='hover:underline'>
            Hugo Ramon Pereira
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
