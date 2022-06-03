import React, {Fragment} from 'react'
import mealsImage from '../../assets/pics1.jpeg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

// const Header = props => {
// return (
//     <Fragment>
//     <header className={classes.header}>
//         <h1>GoodMeal</h1>
//       <HeaderCartButton onClick={props.onShowCart}/>
//     </header>
//     <div className={classes['main-image']}>
//         <img src={mealsImage} alt='Good meal pics'/>
//     </div>
// </Fragment>
// );
// }
// export default Header




const Header = (props) => {
    return (
      <Fragment>
        <header className={classes.header}>
          <h1>GoodMeal</h1>
          <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
          <img src={mealsImage} alt='Good meal pics' />
        </div>
      </Fragment>
    );
  };
  
  export default Header;
  