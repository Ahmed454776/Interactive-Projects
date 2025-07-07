import './Home.css';
import { useState } from 'react';
import productsData from '../data/products.js';
import ProductCard from '../components/ProductCard';

function Home() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  let filteredProducts = productsData.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase()) ||
    product.description.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === 'low-high') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === 'high-low') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="home-container">
      <div className="home-controls">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="sort-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="low-high">Low → High</option>
          <option value="high-low">High → Low</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
