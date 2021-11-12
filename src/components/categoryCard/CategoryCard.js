import './CategoryCard.css'
import Button from '../button/Button';
import test1 from '../../static/images/category/beverages.png';
const CategoryCard = ({ imageUrl, description, index, name, id }) => {

  const handleCategoryClick = () => {
    //TODO need a logic
  };
  return (
    <section className='categoryCard-container'>
      {index % 2 === 0 ?
        <>
          <div className='image-holder'>
            <img className='category-image' src={test1} />
          </div>
          <div className='categoryCard-content'>
            <h5 className='content-header'>{name}</h5>
            <p className='content-desc'>{description}</p>
            <Button handleClick={handleCategoryClick} btnText={`Explore ${name}`} />
          </div>
        </>
        :
        <>
          <div className='categoryCard-content'>
            <h5 className='content-header'>{name}</h5>
            <p className='content-desc'>{description}</p>
            <Button btnText={`Explore ${name}`} />
          </div>
          <div className='image-holder'>
            <img className='category-image' src={test1} />
          </div>
        </>
      }
    </section>
  )
};

export default CategoryCard;