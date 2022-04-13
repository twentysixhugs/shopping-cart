import { CategoryData } from '../../products-data/categories';
import { categories } from '../../products-data/categories';
import Category from './Category';

export default function Categories() {
  const getCategoryNodes = function (category: CategoryData) {
    if (category.children) {
      /* If there are children and we are not as deep as possible, 
      map them with this same function */
      return (
        <Category
          key={category.locationName}
          locationName={category.locationName}
          name={category.name}
        >
          <ul>{category.children.map(getCategoryNodes)}</ul>
        </Category>
      );
    } else {
      /* If there are no children left (we are as deep as possible),
      just return plain <li> with name */
      return (
        <Category
          key={category.locationName}
          locationName={category.locationName}
          name={category.name}
        />
      );
    }
  };
  return (
    <aside className="c-categories">
      <h3 className="c-categories__title">Categories</h3>
      {categories.map(getCategoryNodes)}
    </aside>
  );
}
