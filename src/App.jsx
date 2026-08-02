import { useCallback, useEffect, useMemo, useState } from "react";

import {
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
  Navigate,
} from "react-router-dom";

import products from "./assets/data/products";

import "./App.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";


// =====================================================
// SMART SEARCH NORMALIZATION
// =====================================================

function normalizeSearch(text = "") {
  return text
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]/g, "")
    .trim();
}


// =====================================================
// HOME PAGE
// =====================================================

function Home({ cart }) {

  const bestSellers = products.filter(
    (product) =>
      product.brand === "Lay's" ||
      product.brand === "Kurkure" ||
      product.brand === "Bingo!" ||
      product.brand === "Haldiram's"
  );

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-small">
            WELCOME TO SNACKHUB
          </p>

          <h1>
            Your Snack Cravings,
            <br />
            Delivered to Your Door
          </h1>

          <p>
            Discover your favourite snacks from India's
            most loved brands.
          </p>

          <Link
            to="/category/chips"
            className="hero-btn"
          >
            Explore Snacks
          </Link>

        </div>

      </section>

      <section className="home-offer-banner">
        <div><span>FLASH SALE</span><h2>Up to 30% off on snack-time essentials</h2><p>Fresh offers, limited quantities, and festival treats.</p></div>
        <Link to="/offers" className="primary-action">View offers →</Link>
      </section>


      {/* =====================================================
          SHOP BY CATEGORY
      ===================================================== */}

      <section className="category-section">

        <div className="section-heading">

          <p>EXPLORE</p>

          <h2>
            Shop by Category
          </h2>

        </div>


        <div className="category-grid">

          <Link
            to="/category/chips"
            className="category-card"
          >
            <span>🥔</span>
            <h3>Chips</h3>
          </Link>


          <Link
            to="/category/indian-snacks"
            className="category-card"
          >
            <span>🌶️</span>
            <h3>Indian Snacks</h3>
          </Link>


          <Link
            to="/category/cookies"
            className="category-card"
          >
            <span>🍪</span>
            <h3>Cookies</h3>
          </Link>


          <Link
            to="/category/healthy-snacks"
            className="category-card"
          >
            <span>🥗</span>
            <h3>Healthy Snacks</h3>
          </Link>


          <Link
            to="/category/chocolates"
            className="category-card"
          >
            <span>🍫</span>
            <h3>Chocolates</h3>
          </Link>


          <Link
            to="/category/drinks"
            className="category-card"
          >
            <span>🥤</span>
            <h3>Drinks</h3>
          </Link>

        </div>

      </section>


      {/* =====================================================
          BEST SELLERS
      ===================================================== */}

      <section className="best-section">

        <div className="section-heading">

          <p>CUSTOMER FAVOURITES</p>

          <h2>
            🔥 Best Sellers
          </h2>

        </div>


        <div className="brand-grid">

          {bestSellers.map((product) => (

            <Link
              to={`/product/${product.id}`}
              className="product-card"
              key={product.id}
            >

              <div className="product-card-image">

                <img
                  src={product.image}
                  alt={product.brand}
                />

              </div>


              <div className="product-card-content">

                <p className="product-brand">
                  {product.brand}
                </p>

                <h3>
                  {product.name}
                </h3>

                <p className="product-weight">
                  Explore flavours
                </p>

                <strong className="product-price">
                  From ₹
                  {product.variants?.[0]?.price || product.price}
                </strong>

              </div>

            </Link>

          ))}

        </div>

      </section>


      {/* =====================================================
          FLOATING CART
      ===================================================== */}

      <Link
        to="/cart"
        className="floating-cart"
      >
        🛒 Cart (
        {cart.reduce(
          (total, item) =>
            total + item.quantity,
          0
        )}
        )
      </Link>

    </>
  );
}


// =====================================================
// ALL SNACKS PAGE
// =====================================================

function AllSnacksPage() {

  return (

    <section className="category-page">

      <Link
        to="/"
        className="back-btn"
      >
        ← Back to Home
      </Link>


      <div className="page-heading">

        <p>
          SNACKHUB COLLECTION
        </p>

        <h1>
          🍿 All Snacks
        </h1>

        <span>
          Explore all our favourite snacks
        </span>

      </div>


      <div className="brand-grid">

        {products.map((product) => (

          <Link
            to={`/product/${product.id}`}
            className="product-card"
            key={product.id}
          >

            <div className="product-card-image">

              <img
                src={product.image}
                alt={product.brand}
              />

            </div>


            <div className="product-card-content">

              <p className="product-brand">
                {product.brand}
              </p>

              <h3>
                {product.name}
              </h3>

              <p className="product-weight">
                {product.category}
              </p>

              <strong className="product-price">
                From ₹
                {product.variants?.[0]?.price || product.price}
              </strong>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}


// =====================================================
// BEST SELLERS PAGE
// =====================================================

function BestSellersPage() {

  const bestSellers = products.filter(
    (product) =>
      product.brand === "Lay's" ||
      product.brand === "Kurkure" ||
      product.brand === "Bingo!" ||
      product.brand === "Haldiram's"
  );


  return (

    <section className="category-page">

      <Link
        to="/"
        className="back-btn"
      >
        ← Back to Home
      </Link>


      <div className="page-heading">

        <p>
          CUSTOMER FAVOURITES
        </p>

        <h1>
          🔥 Best Sellers
        </h1>

        <span>
          Our most loved snack brands
        </span>

      </div>


      <div className="brand-grid">

        {bestSellers.map((product) => (

          <Link
            to={`/product/${product.id}`}
            className="product-card"
            key={product.id}
          >

            <div className="product-card-image">

              <img
                src={product.image}
                alt={product.brand}
              />

            </div>


            <div className="product-card-content">

              <p className="product-brand">
                {product.brand}
              </p>

              <h3>
                {product.name}
              </h3>

              <p className="product-weight">
                Explore all flavours
              </p>

              <strong className="product-price">
                From ₹
                {product.variants?.[0]?.price || product.price}
              </strong>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}


// =====================================================
// SEARCH PAGE
// =====================================================

function SearchPage() {

  const { query } = useParams();

  const searchText =
    decodeURIComponent(query || "").trim();

  const searchValue =
    normalizeSearch(searchText);


  const searchResults = products.filter((product) => {

    const brand =
      normalizeSearch(product.brand);

    const productName =
      normalizeSearch(product.name);

    const category =
      normalizeSearch(product.category);

    const variants =
      product.variants || [];


    // BRAND / PRODUCT / CATEGORY SEARCH

    if (
      brand.includes(searchValue) ||
      productName.includes(searchValue) ||
      category.includes(searchValue)
    ) {
      return true;
    }


    // VARIANT SEARCH

    const variantMatch =
      variants.some((variant) =>
        normalizeSearch(variant.name)
          .includes(searchValue)
      );

    if (variantMatch) {
      return true;
    }


    // SPECIAL SEARCHES

    if (
      searchValue === "lays" ||
      searchValue === "layschips"
    ) {
      return brand === "lays";
    }


    if (
      searchValue === "oreo" ||
      searchValue === "orea"
    ) {
      return brand === "oreo";
    }


    if (searchValue === "kurkure") {
      return brand === "kurkure";
    }


    if (
      searchValue === "bingo" ||
      searchValue === "bingochips"
    ) {
      return brand === "bingo";
    }


    if (
      searchValue === "haldiram" ||
      searchValue === "haldirams"
    ) {
      return brand === "haldirams";
    }


    if (searchValue === "cadbury") {
      return brand === "cadbury";
    }


    if (searchValue === "kitkat") {
      return brand === "kitkat";
    }


    return false;

  });


  return (

    <section className="category-page">

      <Link
        to="/"
        className="back-btn"
      >
        ← Back to Home
      </Link>


      <div className="page-heading">

        <p>
          SEARCH RESULTS
        </p>

        <h1>
          🔍 {searchText}
        </h1>

        <span>
          {searchResults.length} product
          {searchResults.length !== 1
            ? "s"
            : ""}{" "}
          found
        </span>

      </div>


      {searchResults.length > 0 ? (

        <div className="brand-grid">

          {searchResults.map((product) => (

            <Link
              to={`/product/${product.id}`}
              className="product-card"
              key={product.id}
            >

              <div className="product-card-image">

                <img
                  src={product.image}
                  alt={product.brand}
                />

              </div>


              <div className="product-card-content">

                <p className="product-brand">
                  {product.brand}
                </p>

                <h3>
                  {product.name}
                </h3>

                <p className="product-weight">
                  {product.category}
                </p>

                <strong className="product-price">
                  From ₹
                  {product.variants?.[0]?.price || product.price}
                </strong>

              </div>

            </Link>

          ))}

        </div>

      ) : (

        <div className="no-products">

          <h2>
            No snacks found 😔
          </h2>

          <p>
            Try searching for Lay's, Oreo,
            Cadbury, KitKat or another snack.
          </p>

        </div>

      )}

    </section>

  );
}


// =====================================================
// CATEGORY PAGE
// =====================================================

function CategoryPage() {

  const { category } = useParams();


  const categoryMap = {

    chips: "Chips",

    "indian-snacks": "Indian Snacks",

    cookies: "Cookies",

    "healthy-snacks": "Healthy Snacks",

    chocolates: "Chocolates",

    drinks: "Drinks",

  };


  const categoryName =
    categoryMap[category];


  if (!categoryName) {

    return (
      <Navigate
        to="/"
        replace
      />
    );

  }


  const categoryProducts =
    products.filter(
      (product) =>
        product.category === categoryName
    );


  return (

    <section className="category-page">

      <Link
        to="/"
        className="back-btn"
      >
        ← Back to Home
      </Link>


      <div className="page-heading">

        <p>
          EXPLORE OUR COLLECTION
        </p>

        <h1>

          {categoryName === "Chips" && "🥔 "}

          {categoryName === "Indian Snacks" && "🌶️ "}

          {categoryName === "Cookies" && "🍪 "}

          {categoryName === "Healthy Snacks" && "🥗 "}

          {categoryName === "Chocolates" && "🍫 "}

          {categoryName === "Drinks" && "🥤 "}

          {categoryName}

        </h1>

        <span>
          Choose your favourite brand
        </span>

      </div>


      <div className="brand-grid">

        {categoryProducts.map((product) => (

          <Link
            to={`/product/${product.id}`}
            className="product-card"
            key={product.id}
          >

            <div className="product-card-image">

              <img
                src={product.image}
                alt={product.brand}
              />

            </div>


            <div className="product-card-content">

              <p className="product-brand">
                {product.brand}
              </p>

              <h3>
                {product.name}
              </h3>

              <p className="product-weight">
                Explore all flavours
              </p>

              <strong className="product-price">
                From ₹
                {product.variants?.[0]?.price || product.price}
              </strong>

            </div>

          </Link>

        ))}

      </div>


      {categoryProducts.length === 0 && (

        <div className="no-products">

          <h2>
            No products available yet.
          </h2>

          <p>
            More {categoryName.toLowerCase()}
            {" "}coming soon!
          </p>

        </div>

      )}

    </section>

  );
}


// =====================================================
// PRODUCT DETAILS PAGE
// =====================================================

function ProductDetails({ cart, setCart, favourites, toggleFavourite, addRecentlyViewed }) {

  const { id } = useParams();

  const navigate = useNavigate();


  const product =
    products.find(
      (item) =>
        item.id === Number(id)
    );


  useEffect(() => {
    if (product) addRecentlyViewed(product.id);
  }, [product, addRecentlyViewed]);

  if (!product) {

    return (
      <Navigate
        to="/"
        replace
      />
    );

  }


  // =====================================================
  // GET QUANTITY
  // =====================================================

  const getQuantity = (variantId) => {

    const item =
      cart.find(
        (cartItem) =>
          cartItem.id === variantId
      );

    return item
      ? item.quantity
      : 0;

  };


  // =====================================================
  // ADD TO CART
  // =====================================================

  const addToCart = (variant) => {

    setCart((previousCart) => {

      const existingItem =
        previousCart.find(
          (item) =>
            item.id === variant.id
        );


      if (existingItem) {

        return previousCart.map((item) =>

          item.id === variant.id

            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }

            : item

        );

      }


      return [

        ...previousCart,

        {

          id: variant.id,

          brand: product.brand,

          name: variant.name,

          grams: variant.grams,

          price: variant.price,

          image: variant.image || product.image,

          quantity: 1,

        },

      ];

    });

  };


  // =====================================================
  // DECREASE
  // =====================================================

  const decreaseQuantity = (variantId) => {

    setCart((previousCart) =>

      previousCart

        .map((item) =>

          item.id === variantId

            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }

            : item

        )

        .filter(
          (item) =>
            item.quantity > 0
        )

    );

  };


  // =====================================================
  // INCREASE
  // =====================================================

  const increaseQuantity = (variant) => {

    addToCart(variant);

  };


  // =====================================================
  // STARTING PRICE
  // =====================================================

  const startingPrice =
    product.variants?.length > 0
      ? Math.min(
          ...product.variants.map(
            (variant) =>
              Number(variant.price)
          )
        )
      : product.price;


  return (

    <section className="product-details-page">


      {/* BACK */}

      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>


      {/* PRODUCT HEADER */}

      <div className="simple-product-header">

        <div>

          <p className="product-details-brand">
            {product.brand}
          </p>

          <h1>
            {product.name}
          </h1>

          <p className="product-details-category">
            {product.category}
          </p>

        </div>

        <button
          className={`favourite-button ${favourites.includes(product.id) ? "is-favourite" : ""}`}
          onClick={() => toggleFavourite(product.id)}
          aria-label="Toggle favourite"
        >
          {favourites.includes(product.id) ? "♥ Saved" : "♡ Save"}
        </button>

      </div>


      {/* MAIN PRODUCT CONTENT */}

      <div className="product-flavours-layout">


        {/* AVAILABLE FLAVOURS */}

        <div className="flavours-section">

          <h2>
            Available Flavours
          </h2>


          <div className="flavour-grid">

            {(product.variants || []).map((variant) => {

              const quantity =
                getQuantity(variant.id);


              const originalPrice =
                variant.originalPrice ||
                variant.mrp ||
                null;


              let discount = 0;


              if (
                originalPrice &&
                Number(originalPrice) >
                  Number(variant.price)
              ) {

                discount =
                  Math.round(
                    (
                      (
                        Number(originalPrice) -
                        Number(variant.price)
                      ) /
                      Number(originalPrice)
                    ) *
                    100
                  );

              }


              return (

                <div
                  className="flavour-card"
                  key={variant.id}
                >

                  {/* IMAGE */}

                  <div className="flavour-image">

                    <img
                      src={
                        variant.image ||
                        product.image
                      }
                      alt={variant.name}
                    />

                  </div>


                  {/* DETAILS */}

                  <div className="flavour-info">

                    <h3>
                      {variant.name}
                    </h3>

                    <p className="flavour-grams">
                      {variant.grams}
                    </p>


                    {discount > 0 && (

                      <span className="flavour-discount">
                        {discount}% OFF
                      </span>

                    )}


                    <div className="flavour-price-row">

                      <strong>
                        ₹{variant.price}
                      </strong>


                      {originalPrice &&
                        Number(originalPrice) >
                          Number(variant.price) && (

                        <del>
                          ₹{originalPrice}
                        </del>

                      )}

                    </div>

                  </div>


                  {/* ADD / QUANTITY */}

                  <div className="flavour-action">

                    {quantity === 0 ? (

                      <button
                        className="plus-button"
                        onClick={() =>
                          addToCart(variant)
                        }
                      >
                        +
                      </button>

                    ) : (

                      <div className="flavour-quantity">

                        <button
                          onClick={() =>
                            decreaseQuantity(
                              variant.id
                            )
                          }
                        >
                          −
                        </button>

                        <span>
                          {quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(
                              variant
                            )
                          }
                        >
                          +
                        </button>

                      </div>

                    )}

                  </div>

                </div>

              );

            })}

          </div>


          {/* GO TO CART */}

          <button
            className="details-go-cart"
            onClick={() =>
              navigate("/cart")
            }
          >
            🛒 Go to Cart
          </button>

        </div>


        {/* HIGHLIGHTS */}

        <div className="highlights-card">

          <h2>
            Highlights
          </h2>


          <div className="highlight-table">

            <div className="highlight-row">

              <strong>
                Brand
              </strong>

              <span>
                {product.brand}
              </span>

            </div>


            <div className="highlight-row">

              <strong>
                Category
              </strong>

              <span>
                {product.category}
              </span>

            </div>


            <div className="highlight-row">

              <strong>
                Available Flavours
              </strong>

              <span>
                {product.variants?.length || 0}
              </span>

            </div>


            <div className="highlight-row">

              <strong>
                Price Starting From
              </strong>

              <span>
                ₹{startingPrice}
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}


// =====================================================
// PHASE 2 — CUSTOMER EXPERIENCE PAGES
// =====================================================

function SnackCard({ product, onToggleFavourite, isFavourite, onAddToCart }) {
  const variant = product.variants?.[0];
  return (
    <article className="experience-card">
      <button className={`heart-icon ${isFavourite ? "active" : ""}`} onClick={() => onToggleFavourite(product.id)} aria-label="Toggle favourite">
        {isFavourite ? "♥" : "♡"}
      </button>
      <Link to={`/product/${product.id}`} className="experience-card-image">
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="experience-card-body">
        <p>{product.brand}</p><h3>{product.name}</h3>
        <strong>₹{variant?.price || product.price}</strong>
        {onAddToCart && <button className="small-add" onClick={() => onAddToCart(product)}>Add to cart</button>}
      </div>
    </article>
  );
}

function WishlistPage({ favourites, toggleFavourite, addProductToCart }) {
  const saved = products.filter((product) => favourites.includes(product.id));
  return <section className="experience-page">
    <div className="experience-heading"><p>YOUR COLLECTION</p><h1>♥ Wishlist</h1><span>Keep every craving within reach.</span></div>
    {saved.length ? <div className="experience-grid">{saved.map((product) => <SnackCard key={product.id} product={product} isFavourite onToggleFavourite={toggleFavourite} onAddToCart={addProductToCart} />)}</div> : <EmptyState title="Your wishlist is empty" text="Save snacks you love and they’ll appear here." action="Browse snacks" to="/all-snacks" />}
  </section>;
}

function EmptyState({ title, text, action, to }) {
  return <div className="empty-state"><div>🍿</div><h2>{title}</h2><p>{text}</p>{to && <Link className="primary-action" to={to}>{action}</Link>}</div>;
}

function RecentlyViewedPage({ recentlyViewed, favourites, toggleFavourite, addProductToCart }) {
  const viewed = recentlyViewed.map((id) => products.find((item) => item.id === id)).filter(Boolean);
  return <section className="experience-page"><div className="experience-heading"><p>PICK UP WHERE YOU LEFT OFF</p><h1>Recently Viewed</h1><span>Your latest snack discoveries.</span></div>
    {viewed.length ? <div className="experience-grid">{viewed.map((product) => <SnackCard key={product.id} product={product} isFavourite={favourites.includes(product.id)} onToggleFavourite={toggleFavourite} onAddToCart={addProductToCart} />)}</div> : <EmptyState title="Nothing viewed yet" text="Explore our snack aisle to build your history." action="Explore snacks" to="/all-snacks" />}
  </section>;
}

function RecommendedPage({ favourites, toggleFavourite, addProductToCart }) {
  const recommended = useMemo(() => products.filter((_, index) => index % 4 === 0).slice(0, 8), []);
  return <section className="experience-page"><div className="experience-heading"><p>CURATED FOR YOU</p><h1>🔥 Recommended snacks</h1><span>Popular picks from the SnackHub community.</span></div><div className="experience-grid">{recommended.map((product) => <SnackCard key={product.id} product={product} isFavourite={favourites.includes(product.id)} onToggleFavourite={toggleFavourite} onAddToCart={addProductToCart} />)}</div></section>;
}

function MyOrdersPage({ orders, addOrderToCart }) {
  return <section className="experience-page"><div className="experience-heading"><p>YOUR PURCHASES</p><h1>📦 My Orders</h1><span>Track past orders and buy your favourites again.</span></div>
    {orders.length ? <div className="orders-list">{orders.map((order) => <article className="order-card" key={order.id}><div><span className="order-status">{order.status}</span><h2>{order.id}</h2><p>{order.date} · {order.items.length} item{order.items.length !== 1 ? "s" : ""}</p></div><div className="order-card-right"><strong>₹{order.total}</strong><button className="primary-action" onClick={() => addOrderToCart(order)}>🔄 Buy again</button></div></article>)}</div> : <EmptyState title="No orders yet" text="Your completed orders will be available here." action="Start shopping" to="/all-snacks" />}
  </section>;
}

void MyOrdersPage;

function OrdersWithTracking({ orders, addOrderToCart }) {
  return <section className="experience-page"><div className="experience-heading"><p>YOUR PURCHASES</p><h1>My Orders</h1><span>Track deliveries or buy favourites again.</span></div>
    {orders.length ? <div className="orders-list">{orders.map((order) => <article className="order-card" key={order.id}><div><span className="order-status">{order.status}</span><h2>{order.id}</h2><p>{order.date} · {order.items.length} item{order.items.length !== 1 ? "s" : ""}</p></div><div className="order-card-right"><strong>₹{order.total}</strong><Link className="track-link" to={`/orders/${order.id}`}>Track order</Link><button className="primary-action" onClick={() => addOrderToCart(order)}>Buy again</button></div></article>)}</div> : <EmptyState title="No orders yet" text="Your completed orders will be available here." action="Start shopping" to="/all-snacks" />}
  </section>;
}

function AuthPage({ mode, setUser }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const isRegister = mode === "register";
  const submit = (event) => { event.preventDefault(); if (!form.email || !form.password || (isRegister && !form.name)) return; setUser({ name: isRegister ? form.name : (form.email.split("@")[0] || "Snack lover"), email: form.email, addresses: [] }); navigate("/profile"); };
  return <section className="auth-page"><form className="auth-card" onSubmit={submit}><p>{isRegister ? "JOIN SNACKHUB" : "WELCOME BACK"}</p><h1>{isRegister ? "Create your account" : "Sign in to SnackHub"}</h1>{isRegister && <label>Name<input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Your name" required /></label>}<label>Email<input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@example.com" required /></label><label>Password<input type="password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} placeholder="At least 6 characters" minLength="6" required /></label><button className="primary-action" type="submit">{isRegister ? "Create account" : "Login"}</button><p className="auth-switch">{isRegister ? "Already registered?" : "New to SnackHub?"} <Link to={isRegister ? "/login" : "/register"}>{isRegister ? "Login" : "Create an account"}</Link></p></form></section>;
}

void AuthPage;

function PhoneOtpPage({ setUser }) {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [developmentCode, setDevelopmentCode] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const requestOtp = async (event) => { event.preventDefault(); setSending(true); setMessage(""); try { const response = await fetch(`${API_URL}/auth/request-otp`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ phone }) }); const data = await response.json(); if (!response.ok) throw new Error(data.message); setDevelopmentCode(data.developmentCode || ""); setMessage(data.message); } catch (error) { setMessage(error.message); } finally { setSending(false); } };
  const verifyOtp = async (event) => { event.preventDefault(); try { const response = await fetch(`${API_URL}/auth/verify-otp`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ phone, code }) }); const data = await response.json(); if (!response.ok) throw new Error(data.message); localStorage.setItem("snackhub-token", data.token); setUser(data.user); navigate("/profile"); } catch (error) { setMessage(error.message); } };
  return <section className="auth-page"><div className="auth-card"><p>SECURE PHONE LOGIN</p><h1>Login with OTP</h1><form onSubmit={requestOtp}><label>Mobile number<input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="+91 9876543210" required /></label><button className="primary-action" type="submit" disabled={sending}>{sending ? "Sending…" : "Send OTP"}</button></form>{message && <p className="auth-message">{message}</p>}{developmentCode && <p className="development-otp">Development OTP: <strong>{developmentCode}</strong></p>}<form onSubmit={verifyOtp}><label>Enter 6-digit OTP<input inputMode="numeric" maxLength="6" value={code} onChange={(event) => setCode(event.target.value)} placeholder="123456" required /></label><button className="primary-action" type="submit">Verify & login</button></form><p className="auth-switch">New phone numbers are registered automatically after verification.</p></div></section>;
}

function ProfilePage({ user, setUser, orders }) {
  const navigate = useNavigate();
  const [name, setName] = useState(user?.name || "");
  const [address, setAddress] = useState("");
  if (!user) return <Navigate to="/login" replace />;
  const saveProfile = (event) => { event.preventDefault(); setUser({ ...user, name }); };
  const addAddress = (event) => { event.preventDefault(); if (!address.trim()) return; setUser({ ...user, addresses: [...(user.addresses || []), address.trim()] }); setAddress(""); };
  const removeAddress = (item) => setUser({ ...user, addresses: user.addresses.filter((addressItem) => addressItem !== item) });
  return <section className="experience-page profile-page"><div className="experience-heading"><p>YOUR ACCOUNT</p><h1>Hello, {user.name}</h1><span>Manage your profile and saved delivery details.</span></div><div className="profile-grid"><div className="profile-card"><h2>Profile</h2><form onSubmit={saveProfile}><label>Name<input value={name} onChange={(event) => setName(event.target.value)} required /></label><label>Phone number<input value={user.phone} disabled /></label><button className="primary-action">Save changes</button></form></div><div className="profile-card"><h2>Saved addresses</h2><form className="address-form" onSubmit={addAddress}><input value={address} onChange={(event) => setAddress(event.target.value)} placeholder="House, street, city, pincode" /><button className="primary-action">Add</button></form>{user.addresses?.length ? <ul className="address-list">{user.addresses.map((item) => <li key={item}><span>📍 {item}</span><button onClick={() => removeAddress(item)}>Remove</button></li>)}</ul> : <p className="muted">No saved addresses yet.</p>}</div><div className="profile-card order-history-card"><h2>Order history</h2><p className="muted">{orders.length} order{orders.length !== 1 ? "s" : ""} placed</p><button className="primary-action" onClick={() => navigate("/orders")}>View my orders</button></div></div></section>;
}

function DeliveryTrackingPage({ orders, setOrders }) {
  const { id } = useParams();
  const order = orders.find((item) => item.id === id);
  const stages = ["Order Confirmed", "Packed", "Shipped", "Out for Delivery", "Delivered"];
  if (!order) return <Navigate to="/orders" replace />;
  const currentStage = Math.max(0, stages.indexOf(order.status));
  const isCancelled = order.status === "Cancelled" || order.status === "Return requested";
  const cancelOrder = () => setOrders((items) => items.map((item) => item.id === id ? { ...item, status: "Cancelled" } : item));
  const returnOrder = () => setOrders((items) => items.map((item) => item.id === id ? { ...item, status: "Return requested" } : item));
  return <section className="experience-page tracking-page"><Link to="/orders" className="back-btn">← My Orders</Link><div className="experience-heading"><p>ORDER {order.id}</p><h1>🚚 Delivery status</h1><span>{order.status === "Delivered" ? "Your snacks have arrived." : isCancelled ? `Order ${order.status.toLowerCase()}.` : "Your snacks are on their way."}</span></div>
    <div className="eta-card"><div><span>DELIVERY TO</span><strong>{order.location || "Your saved delivery address"}</strong></div><div><span>ESTIMATED ARRIVAL</span><strong>{order.eta || "Today, 6:00 PM – 8:00 PM"}</strong></div></div>
    <div className="delivery-timeline">{stages.map((stage, index) => <div className={`delivery-stage ${!isCancelled && index <= currentStage ? "complete" : ""}`} key={stage}><div className="stage-dot">{!isCancelled && index <= currentStage ? "✓" : index + 1}</div><div><strong>{stage}</strong><span>{index === currentStage && !isCancelled ? "Current status" : index < currentStage && !isCancelled ? "Completed" : "Pending"}</span></div></div>)}</div>
    <div className="tracking-actions">{order.status === "Delivered" ? <button className="outline-action" onClick={returnOrder}>Request return</button> : !isCancelled && <button className="outline-action danger" onClick={cancelOrder}>Cancel order</button>}</div>
  </section>;
}

function ReviewsPage({ reviews, setReviews }) {
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const submitReview = (event) => { event.preventDefault(); if (!message.trim()) return; setReviews((current) => [{ id: Date.now(), name: "You", rating, message: message.trim() }, ...current]); setMessage(""); setRating(5); };
  const average = reviews.length ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1) : "—";
  return <section className="experience-page reviews-page"><div className="experience-heading"><p>SHARE YOUR THOUGHTS</p><h1>⭐ Product Reviews</h1><span>Ratings from snack lovers just like you.</span></div><div className="reviews-layout"><aside className="rating-summary"><strong>{average}</strong><div className="stars">★★★★★</div><p>Based on {reviews.length} review{reviews.length !== 1 ? "s" : ""}</p></aside><div><form className="review-form" onSubmit={submitReview}><h2>Rate your SnackHub experience</h2><div className="rating-picker">{[1,2,3,4,5].map((value) => <button type="button" key={value} onClick={() => setRating(value)} className={value <= rating ? "selected" : ""}>★</button>)}</div><textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="What did you enjoy?" maxLength="240" /><button className="primary-action" type="submit">Post review</button></form><div className="review-list">{reviews.map((review) => <article className="review" key={review.id}><div><strong>{review.name}</strong><span>{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</span></div><p>{review.message}</p></article>)}</div></div></div></section>;
}

function Countdown({ endAt }) {
  const [remaining, setRemaining] = useState(() => Math.max(0, endAt - Date.now()));
  useEffect(() => { const timer = setInterval(() => setRemaining(Math.max(0, endAt - Date.now())), 1000); return () => clearInterval(timer); }, [endAt]);
  const hours = String(Math.floor(remaining / 3600000)).padStart(2, "0");
  const minutes = String(Math.floor((remaining % 3600000) / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((remaining % 60000) / 1000)).padStart(2, "0");
  return <div className="countdown" aria-label="Flash sale countdown"><div><b>{hours}</b><small>HRS</small></div><i>:</i><div><b>{minutes}</b><small>MIN</small></div><i>:</i><div><b>{seconds}</b><small>SEC</small></div></div>;
}

function OffersPage({ favourites, toggleFavourite, addProductToCart }) {
  const [endAt] = useState(() => Date.now() + 1000 * 60 * 60 * 12);
  const saleProducts = products.filter((_, index) => index % 5 === 1).slice(0, 4);
  return <section className="experience-page offers-page">
    <div className="festival-hero"><p>✨ FESTIVE SAVINGS ARE HERE</p><h1>Snack. Save. Celebrate.</h1><span>Special prices on the treats everyone brings home.</span><Link to="/all-snacks" className="light-action">Shop festival offers</Link></div>
    <section className="coupon-showcase"><div><span>WELCOME10</span><p>Extra 10% off on orders above ₹100</p></div><div><span>SNACK20</span><p>Extra 20% off (up to ₹75) above ₹199</p></div><div><span>FREESHIP</span><p>Free delivery on orders above ₹199</p></div></section>
    <section className="flash-sale"><div className="flash-sale-title"><div><p>ENDS SOON</p><h2>🔥 Flash Sale</h2></div><Countdown endAt={endAt} /></div><div className="experience-grid">{saleProducts.map((product) => <SnackCard key={product.id} product={product} isFavourite={favourites.includes(product.id)} onToggleFavourite={toggleFavourite} onAddToCart={addProductToCart} />)}</div></section>
  </section>;
}


// =====================================================
// CART PAGE
// =====================================================

function Cart({
  cart,
  setCart,
}) {

  const navigate = useNavigate();


  // =====================================================
  // INCREASE
  // =====================================================

  const increaseQuantity = (id) => {

    setCart((items) =>

      items.map((item) =>

        item.id === id

          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }

          : item

      )

    );

  };


  // =====================================================
  // DECREASE
  // =====================================================

  const decreaseQuantity = (id) => {

    setCart((items) =>

      items

        .map((item) =>

          item.id === id

            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }

            : item

        )

        .filter(
          (item) =>
            item.quantity > 0
        )

    );

  };


  // =====================================================
  // REMOVE
  // =====================================================

  const removeItem = (id) => {

    setCart((items) =>
      items.filter(
        (item) =>
          item.id !== id
      )
    );

  };


  // =====================================================
  // SUBTOTAL
  // =====================================================

  const subtotal =
    cart.reduce(

      (total, item) =>

        total +
        Number(item.price) *
          item.quantity,

      0

    );


  // =====================================================
  // DISCOUNT
  // =====================================================

  const discount =
    subtotal >= 20
      ? Math.floor(subtotal * 0.10)
      : 0;


  // =====================================================
  // DELIVERY
  // =====================================================

  const delivery =
    subtotal >= 499
      ? 0
      : subtotal > 0
      ? 20
      : 0;


  // =====================================================
  // TOTAL
  // =====================================================

  const total =
    subtotal -
    discount +
    delivery;


  const amountForDiscount =
    subtotal < 20
      ? 20 - subtotal
      : 0;


  const amountForFreeDelivery =
    subtotal < 499
      ? 499 - subtotal
      : 0;


  return (

    <section className="cart-page">

      <div className="cart-top">

        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          ← Continue Shopping
        </button>

        <h1>
          Your Cart (
          {cart.reduce(
            (sum, item) =>
              sum + item.quantity,
            0
          )}{" "}
          items)
        </h1>

      </div>


      {/* =====================================================
          EMPTY CART
      ===================================================== */}

      {cart.length === 0 ? (

        <div className="empty-cart">

          <div className="empty-cart-icon">
            🛒
          </div>

          <h2>
            Your cart is empty
          </h2>

          <p>
            Add your favourite snacks
            to get started.
          </p>

          <button
            className="start-shopping"
            onClick={() =>
              navigate("/")
            }
          >
            Start Shopping
          </button>

        </div>

      ) : (

        <div className="cart-layout">


          {/* =====================================================
              CART ITEMS
          ===================================================== */}

          <div className="cart-items">

            {cart.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />


                <div className="cart-item-info">

                  <span className="cart-brand">
                    {item.brand}
                  </span>

                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    {item.grams}
                  </p>

                  <strong>
                    ₹{item.price}
                  </strong>

                </div>


                <div className="quantity-box">

                  <button
                    type="button"
                    onClick={() =>
                      decreaseQuantity(
                        item.id
                      )
                    }
                  >
                    −
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      increaseQuantity(
                        item.id
                      )
                    }
                  >
                    +
                  </button>

                </div>


                <div className="item-total">

                  ₹
                  {Number(item.price) *
                    item.quantity}

                </div>


                <button
                  className="delete-button"
                  onClick={() =>
                    removeItem(item.id)
                  }
                >
                  🗑️
                </button>

              </div>

            ))}

          </div>


          {/* =====================================================
              ORDER SUMMARY
          ===================================================== */}

          <div className="cart-summary">

            <h2>
              Order Summary
            </h2>


            <div className="summary-row">

              <span>
                Subtotal
              </span>

              <strong>
                ₹{subtotal}
              </strong>

            </div>


            <div className="summary-row discount-row">

              <span>
                🎉 Discount
              </span>

              <strong>
                - ₹{discount}
              </strong>

            </div>


            {subtotal < 20 && (

              <p className="discount-note">

                Add ₹
                {amountForDiscount}
                {" "}
                more to unlock
                <strong>
                  {" "}10% OFF
                </strong>

              </p>

            )}


            {discount > 0 && (

              <p className="discount-success">

                🎉 You saved ₹
                {discount}
                {" "}on this order!

              </p>

            )}


            <div className="summary-row">

              <span>
                Delivery
              </span>

              <strong>

                {delivery === 0
                  ? "FREE"
                  : `₹${delivery}`}

              </strong>

            </div>


            {subtotal > 0 &&
              subtotal < 499 && (

                <p className="delivery-note">

                  🚚 Add ₹
                  {amountForFreeDelivery}
                  {" "}more for
                  <strong>
                    {" "}FREE delivery
                  </strong>

                </p>

            )}


            {subtotal >= 499 && (

              <p className="delivery-success">

                🎉 FREE delivery unlocked!

              </p>

            )}


            <hr />


            <div className="summary-total">

              <span>
                Total
              </span>

              <strong>
                ₹{total}
              </strong>

            </div>


            {/* =====================================================
                CHECKOUT BUTTON
            ===================================================== */}

            <button
              className="checkout-button"
              onClick={() =>
                navigate("/checkout")
              }
            >
              Checkout
            </button>

          </div>

        </div>

      )}

    </section>

  );
}


// =====================================================
// CHECKOUT PAGE
// =====================================================

function Checkout({
  cart,
  setCart,
  setOrders,
}) {

  const navigate = useNavigate();


  // =====================================================
  // ADDRESS STATE
  // =====================================================

  const [address, setAddress] = useState({

    name: "",

    phone: "",

    house: "",

    street: "",

    city: "",

    pincode: "",

  });


  // =====================================================
  // PAYMENT STATE
  // =====================================================

  const [paymentMethod, setPaymentMethod] =
    useState("cod");

  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [couponMessage, setCouponMessage] = useState("");


  // =====================================================
  // PRICE CALCULATIONS
  // =====================================================

  const subtotal =
    cart.reduce(

      (total, item) =>

        total +
        Number(item.price) *
          item.quantity,

      0

    );


  const discount =
    subtotal >= 20
      ? Math.floor(subtotal * 0.10)
      : 0;


  const delivery =
    subtotal >= 499
      ? 0
      : subtotal > 0
      ? 20
      : 0;

  const couponDiscount = appliedCoupon === "WELCOME10"
    ? Math.min(Math.floor(subtotal * 0.10), 100)
    : appliedCoupon === "SNACK20"
    ? Math.min(Math.floor(subtotal * 0.20), 75)
    : 0;

  const couponDelivery = appliedCoupon === "FREESHIP" && subtotal >= 199 ? 0 : delivery;


  const total =
    subtotal -
    discount +
    couponDelivery -
    couponDiscount;

  const applyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    if (!["WELCOME10", "SNACK20", "FREESHIP"].includes(code)) { setAppliedCoupon(""); setCouponMessage("That coupon code is not valid."); return; }
    if ((code === "WELCOME10" && subtotal < 100) || ((code === "SNACK20" || code === "FREESHIP") && subtotal < 199)) { setAppliedCoupon(""); setCouponMessage(`${code} needs a higher cart total to apply.`); return; }
    setAppliedCoupon(code); setCouponMessage(`${code} applied successfully!`);
  };


  // =====================================================
  // ADDRESS CHANGE
  // =====================================================

  const handleAddressChange = (e) => {

    const {
      name,
      value,
    } = e.target;


    setAddress((previous) => ({

      ...previous,

      [name]: value,

    }));

  };


  // =====================================================
  // PLACE ORDER
  // =====================================================

  const handlePlaceOrder = (e) => {

    e.preventDefault();


    // EMPTY CART

    if (cart.length === 0) {

      alert(
        "Your cart is empty!"
      );

      navigate("/cart");

      return;

    }


    // ADDRESS VALIDATION

    if (
      !address.name ||
      !address.phone ||
      !address.house ||
      !address.street ||
      !address.city ||
      !address.pincode
    ) {

      alert(
        "Please fill in all delivery address details."
      );

      return;

    }


    // PHONE VALIDATION

    if (
      !/^[0-9]{10}$/.test(
        address.phone
      )
    ) {

      alert(
        "Please enter a valid 10-digit phone number."
      );

      return;

    }


    // PINCODE VALIDATION

    if (
      !/^[0-9]{6}$/.test(
        address.pincode
      )
    ) {

      alert(
        "Please enter a valid 6-digit pincode."
      );

      return;

    }


    // PAYMENT NAME

    const paymentName =
      paymentMethod === "cod"
        ? "Cash on Delivery"
        : paymentMethod === "upi"
        ? "UPI"
        : "Credit / Debit Card";


    // ORDER SUCCESS

    alert(

      `🎉 Order placed successfully!\n\n` +

      `Name: ${address.name}\n` +

      `Payment: ${paymentName}\n\n` +

      `Total: ₹${total}`

    );


    setOrders((orders) => [{
      id: `SH-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
      status: "Order Confirmed",
      total,
      items: cart,
      location: `${address.house}, ${address.street}, ${address.city} – ${address.pincode}`,
      eta: "Today, 6:00 PM – 8:00 PM",
    }, ...orders]);

    // CLEAR CART

    setCart([]);


    // RETURN HOME

    navigate("/");

  };


  // =====================================================
  // EMPTY CART
  // =====================================================

  if (cart.length === 0) {

    return (

      <section className="checkout-page">

        <div className="empty-cart">

          <div className="empty-cart-icon">
            🛒
          </div>

          <h2>
            Your cart is empty
          </h2>

          <p>
            Add some snacks before checkout.
          </p>

          <button
            className="start-shopping"
            onClick={() =>
              navigate("/")
            }
          >
            Start Shopping
          </button>

        </div>

      </section>

    );

  }


  return (

    <section className="checkout-page">


      {/* =====================================================
          CHECKOUT HEADER
      ===================================================== */}

      <div className="checkout-header">

        <button
          className="back-btn"
          onClick={() =>
            navigate("/cart")
          }
        >
          ← Back to Cart
        </button>


        <div className="page-heading">

          <p>
            SNACKHUB CHECKOUT
          </p>

          <h1>
            💳 Checkout
          </h1>

          <span>
            Complete your order
          </span>

        </div>

      </div>


      {/* =====================================================
          CHECKOUT LAYOUT
      ===================================================== */}

      <div className="checkout-layout">


        {/* =====================================================
            LEFT SIDE
        ===================================================== */}

        <div className="checkout-left">


          {/* =====================================================
              DELIVERY ADDRESS
          ===================================================== */}

          <div className="checkout-card">

            <h2>
              📍 Delivery Address
            </h2>


            <div className="checkout-form">


              {/* FULL NAME */}

              <div className="form-group">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={address.name}
                  onChange={handleAddressChange}
                />

              </div>


              {/* PHONE */}

              <div className="form-group">

                <label>
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="10-digit mobile number"
                  maxLength="10"
                  value={address.phone}
                  onChange={handleAddressChange}
                />

              </div>


              {/* HOUSE */}

              <div className="form-group">

                <label>
                  House / Flat / Building
                </label>

                <input
                  type="text"
                  name="house"
                  placeholder="House / Flat / Building"
                  value={address.house}
                  onChange={handleAddressChange}
                />

              </div>


              {/* STREET */}

              <div className="form-group">

                <label>
                  Street / Area
                </label>

                <input
                  type="text"
                  name="street"
                  placeholder="Street / Area / Landmark"
                  value={address.street}
                  onChange={handleAddressChange}
                />

              </div>


              {/* CITY + PINCODE */}

              <div className="form-row">


                <div className="form-group">

                  <label>
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={address.city}
                    onChange={handleAddressChange}
                  />

                </div>


                <div className="form-group">

                  <label>
                    Pincode
                  </label>

                  <input
                    type="text"
                    name="pincode"
                    placeholder="6-digit pincode"
                    maxLength="6"
                    value={address.pincode}
                    onChange={handleAddressChange}
                  />

                </div>

              </div>

            </div>

          </div>


          {/* =====================================================
              PAYMENT METHOD
          ===================================================== */}

          <div className="checkout-card">

            <h2>
              💳 Payment Method
            </h2>


            <div className="payment-options">


              {/* CASH ON DELIVERY */}

              <label
                className={
                  paymentMethod === "cod"
                    ? "payment-option selected"
                    : "payment-option"
                }
              >

                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={
                    paymentMethod === "cod"
                  }
                  onChange={(e) =>
                    setPaymentMethod(
                      e.target.value
                    )
                  }
                />

                <div>

                  <strong>
                    💵 Cash on Delivery
                  </strong>

                  <span>
                    Pay when your order arrives
                  </span>

                </div>

              </label>


              {/* UPI */}

              <label
                className={
                  paymentMethod === "upi"
                    ? "payment-option selected"
                    : "payment-option"
                }
              >

                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={
                    paymentMethod === "upi"
                  }
                  onChange={(e) =>
                    setPaymentMethod(
                      e.target.value
                    )
                  }
                />

                <div>

                  <strong>
                    📱 UPI
                  </strong>

                  <span>
                    Google Pay, PhonePe, Paytm
                  </span>

                </div>

              </label>


              {/* CARD */}

              <label
                className={
                  paymentMethod === "card"
                    ? "payment-option selected"
                    : "payment-option"
                }
              >

                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={
                    paymentMethod === "card"
                  }
                  onChange={(e) =>
                    setPaymentMethod(
                      e.target.value
                    )
                  }
                />

                <div>

                  <strong>
                    💳 Credit / Debit Card
                  </strong>

                  <span>
                    Visa, Mastercard, RuPay
                  </span>

                </div>

              </label>

            </div>

          </div>

        </div>


        {/* =====================================================
            RIGHT SIDE - ORDER SUMMARY
        ===================================================== */}

        <div className="checkout-summary">


          <div className="checkout-card">

            <h2>
              🛒 Order Summary
            </h2>


            {/* =====================================================
                ITEMS
            ===================================================== */}

            <div className="checkout-items">

              {cart.map((item) => (

                <div
                  className="checkout-item"
                  key={item.id}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />


                  <div className="checkout-item-info">

                    <strong>
                      {item.name}
                    </strong>

                    <span>
                      {item.grams}
                    </span>

                    <span>
                      Qty: {item.quantity}
                    </span>

                  </div>


                  <strong>
                    ₹
                    {Number(item.price) *
                      item.quantity}
                  </strong>

                </div>

              ))}

            </div>


            <hr />

            <div className="coupon-box">
              <label htmlFor="coupon">Have a coupon?</label>
              <div><input id="coupon" value={couponCode} onChange={(event) => setCouponCode(event.target.value)} placeholder="WELCOME10" /><button type="button" onClick={applyCoupon}>Apply</button></div>
              {couponMessage && <p className={appliedCoupon ? "coupon-success" : "coupon-error"}>{couponMessage}</p>}
            </div>


            {/* SUBTOTAL */}

            <div className="summary-row">

              <span>
                Subtotal
              </span>

              <strong>
                ₹{subtotal}
              </strong>

            </div>


            {/* DISCOUNT */}

            <div className="summary-row discount-row">

              <span>
                🎉 Discount
              </span>

              <strong>
                - ₹{discount}
              </strong>

            </div>


            {appliedCoupon && (
              <div className="summary-row discount-row">
                <span>Coupon: {appliedCoupon}</span>
                <strong>{appliedCoupon === "FREESHIP" ? "Free delivery" : `- ₹${couponDiscount}`}</strong>
              </div>
            )}

            {/* DELIVERY */}

            <div className="summary-row">

              <span>
                🚚 Delivery
              </span>

              <strong>

                {couponDelivery === 0
                  ? "FREE"
                  : `₹${couponDelivery}`}

              </strong>

            </div>


            <hr />


            {/* TOTAL */}

            <div className="summary-total">

              <span>
                Total
              </span>

              <strong>
                ₹{total}
              </strong>

            </div>


            {/* PLACE ORDER */}

            <button
              className="place-order-button"
              onClick={handlePlaceOrder}
            >
              🔒 Place Order • ₹{total}
            </button>


            <p className="secure-checkout">
              🔐 Your order information is secure
            </p>

          </div>

        </div>

      </div>

    </section>

  );

}


// =====================================================
// MAIN APP
// =====================================================

function DeliveryLocation({ location, setLocation }) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(location);
  const save = () => { if (draft.trim()) { setLocation(draft.trim()); setOpen(false); } };
  return <div className="location-control"><button onClick={() => setOpen((value) => !value)} type="button">📍 Deliver to <strong>{location || "Choose location"}</strong></button>{open && <div className="location-popover"><strong>Delivery location</strong><input value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Area or city" /><button className="primary-action" type="button" onClick={save}>Save location</button></div>}</div>;
}

function App() {

  const [cart, setCart] =
    useState([]);


  const [search, setSearch] =
    useState("");

  const [location, setLocation] = useState(() => localStorage.getItem("snackhub-location") || "");
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("snackhub-user") || "null"));

  const [favourites, setFavourites] = useState(() =>
    JSON.parse(localStorage.getItem("snackhub-favourites") || "[]")
  );
  const [recentlyViewed, setRecentlyViewed] = useState(() =>
    JSON.parse(localStorage.getItem("snackhub-recent") || "[]")
  );
  const [reviews, setReviews] = useState([
    { id: 1, name: "Aarav K.", rating: 5, message: "Quick delivery and the snacks arrived perfectly fresh." },
    { id: 2, name: "Meera S.", rating: 4, message: "Great collection of classic favourites. Will order again!" },
  ]);
  const [orders, setOrders] = useState(() => {
    const first = products[0];
    const second = products[1];
    return [{ id: "SH-2026-1048", date: "28 July 2026", status: "Delivered", total: (first.variants?.[0]?.price || first.price) + (second.variants?.[0]?.price || second.price), items: [first, second] }];
  });

  useEffect(() => { localStorage.setItem("snackhub-favourites", JSON.stringify(favourites)); }, [favourites]);
  useEffect(() => { localStorage.setItem("snackhub-recent", JSON.stringify(recentlyViewed)); }, [recentlyViewed]);
  useEffect(() => { localStorage.setItem("snackhub-location", location); }, [location]);
  useEffect(() => { if (user) localStorage.setItem("snackhub-user", JSON.stringify(user)); else localStorage.removeItem("snackhub-user"); }, [user]);

  const toggleFavourite = (id) => setFavourites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  const addRecentlyViewed = useCallback((id) => setRecentlyViewed((current) => [id, ...current.filter((item) => item !== id)].slice(0, 8)), []);
  const addProductToCart = (product) => {
    const variant = product.variants?.[0] || product;
    setCart((current) => {
      const existing = current.find((item) => item.id === variant.id);
      return existing ? current.map((item) => item.id === variant.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { id: variant.id, brand: product.brand, name: variant.name || product.name, grams: variant.grams || "", price: variant.price || product.price, image: variant.image || product.image, quantity: 1 }];
    });
  };
  const addOrderToCart = (order) => order.items.forEach(addProductToCart);


  const navigate = useNavigate();


  // =====================================================
  // SEARCH
  // =====================================================

  const handleSearch = (e) => {

    e.preventDefault();

    const value =
      search.trim();


    if (!value) {
      return;
    }


    navigate(
      `/search/${encodeURIComponent(value)}`
    );


    setSearch("");

  };


  return (

    <div className="page">


      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar">


        {/* LOGO */}

        <Link
          to="/"
          className="logo"
        >
          🍿 SnackHub
        </Link>


        <DeliveryLocation location={location} setLocation={setLocation} />

        {/* SEARCH */}

        <form
          className="search-form"
          onSubmit={handleSearch}
        >

          <input
            type="text"
            placeholder="Search snacks, brands..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <button
            type="submit"
            className="search-button"
          >
            🔍
          </button>

        </form>


        {/* NAV LINKS */}

        <div className="nav-links">

          <Link
            to="/"
            className="nav-link"
          >
            Home
          </Link>


          <Link
            to="/category/chips"
            className="nav-link"
          >
            Shop
          </Link>


          <Link
            to="/all-snacks"
            className="nav-link"
          >
            All Snacks
          </Link>


          <Link
            to="/best-sellers"
            className="nav-link"
          >
            Best Sellers
          </Link>

          <Link to="/wishlist" className="nav-link">♥ Wishlist</Link>

          <Link to="/orders" className="nav-link">Orders</Link>

          <Link to="/offers" className="nav-link">🎉 Offers</Link>


          {/* CART */}

          {user ? <><Link to="/profile" className="nav-link">Account</Link><button className="logout-button" onClick={() => { setUser(null); navigate("/"); }}>Logout</button></> : <Link to="/login" className="nav-link">Login</Link>}

          <Link
            to="/cart"
            className="cart-btn"
          >
            🛒 Cart (
            {cart.reduce(
              (total, item) =>
                total + item.quantity,
              0
            )}
            )
          </Link>

        </div>

      </header>


      {/* =====================================================
          ROUTES
      ===================================================== */}

      <Routes>


        {/* HOME */}

        <Route
          path="/"
          element={
            <Home
              cart={cart}
            />
          }
        />


        {/* ALL SNACKS */}

        <Route
          path="/all-snacks"
          element={
            <AllSnacksPage />
          }
        />


        {/* BEST SELLERS */}

        <Route
          path="/best-sellers"
          element={
            <BestSellersPage />
          }
        />


        {/* SEARCH */}

        <Route
          path="/search/:query"
          element={
            <SearchPage />
          }
        />


        {/* CATEGORY */}

        <Route
          path="/category/:category"
          element={
            <CategoryPage />
          }
        />


        {/* PRODUCT DETAILS */}

        <Route
          path="/product/:id"
          element={
            <ProductDetails
              cart={cart}
              setCart={setCart}
              favourites={favourites}
              toggleFavourite={toggleFavourite}
              addRecentlyViewed={addRecentlyViewed}
            />
          }
        />

        <Route path="/wishlist" element={<WishlistPage favourites={favourites} toggleFavourite={toggleFavourite} addProductToCart={addProductToCart} />} />
        <Route path="/recently-viewed" element={<RecentlyViewedPage recentlyViewed={recentlyViewed} favourites={favourites} toggleFavourite={toggleFavourite} addProductToCart={addProductToCart} />} />
        <Route path="/recommended" element={<RecommendedPage favourites={favourites} toggleFavourite={toggleFavourite} addProductToCart={addProductToCart} />} />
        <Route path="/orders" element={<OrdersWithTracking orders={orders} addOrderToCart={addOrderToCart} />} />
        <Route path="/orders/:id" element={<DeliveryTrackingPage orders={orders} setOrders={setOrders} />} />
        <Route path="/reviews" element={<ReviewsPage reviews={reviews} setReviews={setReviews} />} />
        <Route path="/login" element={<PhoneOtpPage setUser={setUser} />} />
        <Route path="/register" element={<PhoneOtpPage setUser={setUser} />} />
        <Route path="/profile" element={<ProfilePage user={user} setUser={setUser} orders={orders} />} />
        <Route path="/offers" element={<OffersPage favourites={favourites} toggleFavourite={toggleFavourite} addProductToCart={addProductToCart} />} />


        {/* CART */}

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
            />
          }
        />


        {/* CHECKOUT */}

        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              setCart={setCart}
              setOrders={setOrders}
            />
          }
        />


        {/* UNKNOWN ROUTE */}

        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <h2>
          🍿 SnackHub
        </h2>

        <p>
          Your favourite snacks, delivered to your door.
        </p>

        <div className="footer-links">
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/recently-viewed">Recently Viewed</Link>
          <Link to="/recommended">Recommended</Link>
          <Link to="/orders">My Orders</Link>
          <Link to="/reviews">Reviews</Link>
        </div>

        <p className="copyright">
          © 2026 SnackHub. All rights reserved.
        </p>

      </footer>

    </div>

  );
}


export default App;
