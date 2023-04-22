import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleDropdown = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <div className='flex bg-black p-4 px-8 border-b-[1px] border-purple-500 justify-center md:justify-between align-middle'>
      <Link href='/' className='self-center'>
        <h1 className='text-3xl text-white font-bold'>GCC<span className='text-red-600'> X </span>CSD</h1>
      </Link>
      <Image unoptimized className='hidden md:block'
      src='/user.png'
      alt='User DP'
      width='48'
      height='48' 
      />
    </div>
  );
};

export default Header;
