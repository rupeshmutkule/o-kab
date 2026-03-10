interface ProductCardProps {
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  onSale?: boolean;
  delay?: number;
  category?: string;
}

export default function ProductCard({ name, price, oldPrice, image, onSale, delay, category }: ProductCardProps) {
  return (
    <li className={`dima-product ok-md-3 ok-xsd-12 ok-sd-6 ${category || ''}`} data-animate="fadeIn" data-delay={delay || 0}>
      <div className="product-img">
        <div className="fix-chrome">
          <figure>
            <img src={image} alt={name} />
          </figure>
          <figure className="product-change-images">
            <img src={image} alt={name} />
          </figure>
          <div className="link_overlay two_lines with_opacity">
            <a data-animated-link="fadeOut" className="default-link" href="shop-product-detail-right-sidebar.html"></a>
            <ul className="icons-media">
              <li><a data-animated-link="fadeOut" href="ajax-items/product-detail.html" data-lightbox="ajax"><i className="fa fa-search"></i></a></li>
              <li><a data-animated-link="fadeOut" href="#"><i className="fa fa-shopping-cart"></i></a></li>
              <li><a data-animated-link="fadeOut" href="#"><i className="fa fa-heart"></i></a></li>
              <li><a data-animated-link="fadeOut" href="#"><i className="fa fa-share-alt"></i></a></li>
            </ul>
            <span className="topaz-hover"></span>
          </div>
          {onSale && (
            <span className="onsale">
              <span>Sale</span>
            </span>
          )}
        </div>
      </div>
      <div className="product-content">
        <a data-animated-link="fadeOut" href="shop-product-detail-right-sidebar.html">
          <h5 className="product-name">{name}</h5>
        </a>
        <div className="rating">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="star"></span>
        </div>
        <a data-animated-link="fadeOut" href="#" className="review-link">(<span className="count">0</span> Customer reviews)</a>
      </div>
      <span className="price text-center">
        {oldPrice && (
          <del>
            <span className="amount">${oldPrice.toFixed(2)}</span>
          </del>
        )}
        <ins>
          <span className="amount">${price.toFixed(2)}</span>
        </ins>
      </span>
      <p>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. sollicitudin, lorem quis bibendum auctor.Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
      <div className="social-media social-medium ">
        <ul className="inline clearfix">
          <li><a data-animated-link="fadeOut" href="ajax-items/product-detail.html" data-lightbox="ajax"><i className="fa fa-search"></i></a></li>
          <li><a data-animated-link="fadeOut" href="#"><i className="fa  fa-shopping-cart"></i></a></li>
          <li><a data-animated-link="fadeOut" href="#"><i className="fa  fa-heart"></i></a></li>
          <li><a data-animated-link="fadeOut" href="#"><i className="fa  fa-share-alt"></i></a></li>
        </ul>
      </div>
    </li>
  );
}
