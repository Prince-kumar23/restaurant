import React from 'react'

const MenuCard = ({menuData}) => {
   
//    console.log(menuData); 

  return ( 
    <>
    <section className='main-card--cointainer'>
   {menuData.map((currEle) => {
    return (
        <>
        <div className='card-container' key = {currEle.id}>
        <div className='card'>
           <div className='card-body'>
          <span className='card-number card-cirlce subtle'>{currEle.id}</span>  
          <span className='card-author subtle'>{currEle.category}</span>
          <h2 className='card-title'>{currEle.name}</h2>
          <span className='card-description subtle'>
             {currEle.description}
           </span>  
           <div className='card-read'>Read</div>   
        </div>    
        <img src = {currEle.image} alt ="images" className = "card-media" />
        <span className = "card-tag subtle">Order Now</span>
       </div>     
       </div>
       </>
    
      );
      
  })}
  </section>
  </>
  )

//   return (
//     <div className='card-container'>
//     <div className='card'>
//        <div className='card-body'>
//       <span className='card-number card-cirlce subtle'>1</span>  
//       <span className='card-author subtle'>BreakFast</span>
//       <h2 className='card-title'>Maggi</h2>
//       <span className='card-description subtle'>
//        I love Maggi really 
//        #1 It is TASTY and mind-blowingly SATISFYING. Who hasn't tasted the heavenly feeling of a hot plate of Maggi when stricken with hunger. In childhood when Mothers made it or the Canteen-wala in college, the taste, the feeling and satisfaction remains the same.
//        </span>  
//        <div className='card-read'>Read</div>   
//     </div>    
//     {/* <img src = {images} alt ="images" className = "card-media" /> */}
//     <span className = "card-tag subtle">Order Now</span>
//    </div>     
//    </div>

//   )
}
export default MenuCard;