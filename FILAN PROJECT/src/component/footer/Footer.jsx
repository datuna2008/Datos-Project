import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';

function Footer() {

    const links = [
        
        {
            id:1,
            title:"ბარათები",
        },
        
        {
            id:2,
            title:"ანაბრები",
        },
        
        {
            id: 3,
            title:"სესხები",
        },
        
        {
            id:4,
            title:"მობილბანკი",
        },
        
        {
            id:5,
            title:"ინვესტიციები",
        },
        
        {
            id: 6,
            title:"გზავნილები",
        },
        
        {
            id:7,
            title:"ლოიალურობის პროგრამა",
        },
    ];

    const secondLinks = [

        {
            id: 1,
            title:"ანგარიშები და ბარათები",
        },

        {
            id: 2,
            title:"ანაბრები",
        },

        {
            id: 3,
            title:"დაფინანსება",
        },

        {
            id: 4,
            title:"ელექტრონული ბანკი",
        },

        {
            id: 5,
            title:"გადახდების მიღება",
        },

        {
            id: 6,
            title:"ბიზნეს მომსახურება",
        },
    ]





  return (

    <div className={styles.fullFooter}>

        {/* first column */}
        <div className={styles.footerDiv}>
            
            <h1 className={styles.footerTitle}>ფიზიკური პირი</h1>
            
            <div className={styles.firstRow}>
            {links.map((link) => (
                <div>  <li> {link.title}</li> </div>
            ))}
            </div>

        </div>

        {/* Second column */}
        <div className={styles.footerDiv}>
            
            <h1 className={styles.footerTitle}>ბიზნესი</h1>
            
            <div className={styles.secondRow}> 
            {secondLinks.map((link) => 
            <div>  <li> {link.title}</li> </div>

            )}
            </div>

        </div>

        {/* third column */}
        <div className={styles.footerDiv}>
            
            <h1 className={styles.footerTitle}>ფიზიკური პირი</h1>
            
            <div className={styles.firstRow}>
            {links.map((link) => (
                <div>  <li> {link.title}</li> </div>
            ))}
            </div>

        </div>

        {/* fourth column */}
        <div className={styles.footerDiv}>
            
            <h1 className={styles.footerTitle}>ბიზნესი</h1>




            <div className={styles.iconsDiv}>

           <div className={styles.iconDiv}>
                <Image src='/fb.png'
                width={16}
                height={16} />
            </div> 

           <div className={styles.iconDiv}>
                <Image src='/ytb.png'
                width={16}
                height={16} />
            </div> 

           <div className={styles.iconDiv}>
                <Image src='/insta.png'
                width={16}
                height={16} />
            </div> 

           <div className={styles.iconDiv}>
                <Image src='/in.png'
                width={16}
                height={16} />
            </div> 
           
           </div>
           
           
           
           
           
           
           
           
            <div className={styles.secondRow}> 
            {secondLinks.map((link) => 
            <div>  <li> {link.title}</li> </div>

            )}
            </div>

        </div>



    


{/* 
        <div className={styles.firstRow}>
            {links.map((link) => (
                <div>  <li> {link.title}</li> </div>
            ))}
        </div>
       */}






    </div>


  )
}

export default Footer