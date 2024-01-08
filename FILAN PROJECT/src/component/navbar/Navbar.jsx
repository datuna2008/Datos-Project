import მთავარი from '@/app/home/page'
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';
// import Link from 'next/link';
import Link from 'next/link';

function Navbar() {

  const links = [
   
    {
      id: 1,
      title: "მთავარი",
      url:'home',
    },

    {
      id: 2,
      title: "ბარათები",
      url:'cards',
    },

    {
      id: 3,
      title: "დეპოზიტები",
      url:'deposits',

    },

    {
      id: 4,
      title: "ინვესტიციები",
      url:'investments',

    },

    {
      id: 5,
      title: "დაზღვევა",
      url:'insurance',

    },
  ];

  return (

    <div className={styles.navContainer} >

     {/* <div className={styles.logo}>BOG logo</div> */}

    <Image src='/bog.png' 
    width={220}
    height={40}
    />
      <div className={styles.navbarLinks}>
        {links.map((link) => (
        <Link href={link.url}>{link.title} </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar