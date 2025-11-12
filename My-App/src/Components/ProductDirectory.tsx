import ProductCard from "./ProductCard";

type Product = {
  name: string;
  category: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    name: "Fjallraven - Foldsack No. 1 Backpack",
    category: "Men's clothing",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  },
  {
    name: "White Gold Plated Princess",
    category: "Jewelery",
    price: 9.99,
    image:
      "https://i5.walmartimages.com/seo/Lyssa-Jewel-14K-White-Gold-Over-Princess-Cut-1-9-Ct-3-Stone-Engagement-Ring-Lab-Created-Simulated-Diamond-Trilogy-Her-Prong-Set-Wedding-Ideal-Gift-We_395f57b4-1c4a-4e73-b810-55b1823d24e9.b0c82ddb3711fb1f66be17f7697c88b1.jpeg",
  },
  {
    name: "Samsung 49-Inch CHG90 144Hz Gaming Monitor",
    category: "Electronics",
    price: 999.99,
    image:
      "https://product.hstatic.net/1000369156/product/49inss_grande_0cdb287b9b374294bbe3508a6608ac06.jpg",
  },
  {
    name: "BIYLACLESEN Women's Winter Wool Coat",
    category: "Women's clothing",
    price: 56.99,
    image:
      "https://i.pinimg.com/originals/b2/0a/eb/b20aeb6b7313dcf753de83aa131e4183.jpg",
  },
  {
    name: "Solid Gold Petite Micropave",
    category: "Jewelery",
    price: 168,
    image:
      "https://i.pinimg.com/originals/95/6a/c4/956ac476ca842dd16e67611354009781.png",
  },
  {
    name: "White Gold Plated Princess Ring",
    category: "Jewelery",
    price: 11.06,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.HZm_hO2FXnPjA5iUzdbPFgHaHa?cb=ucfimgc2&w=1140&h=1140&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Curved Wireless Charger",
    category: "Electronics",
    price: 28.99,
    image:
      "https://www.phonelcdparts.com/media/catalog/product/cache/8b451136e8bc81a672deb00fb64a706a/b/k/bk15-3m2d-wt.jpg",
  },
  {
    name: "Rain Jacket Women Windbreaker Striped Jacket",
    category: "Women's clothing",
    price: 51.99,
    image:
      "https://i.pinimg.com/736x/bd/e3/98/bde3985c52e97a994f4130bca83e1b64.jpg",
  },
  {
    name: "Apple MacBook Pro 14-inch",
    category: "Electronics",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Sony WH-1000XM4 Wireless Headphones",
    category: "Electronics",
    price: 349,
    image:
      "https://brain-images-ssl.cdn.dixons.com/1/4/10223941/u_10223941.jpg",
  },
  {
    name: "Amazon Kindle Paperwhite",
    category: "Electronics",
    price: 129,
    image:
      "https://tse3.mm.bing.net/th/id/OIP.5qjBRHIj6kklCZJm0UQxrgHaHa?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Nike Air Max 270",
    category: "Men's clothing",
    price: 150,
    image:
      "https://tse3.mm.bing.net/th/id/OIP.RdMPKHsCq2paNPL9LvfsQgAAAA?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

function ProductDirectory() {
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product, idx) => (
          <ProductCard
            key={idx}
            name={product.name}
            category={product.category}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductDirectory;
