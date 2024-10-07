import './App.css';
import Navbar from "./Components/Navbar";
import ImageSection from "./Components/ProductImageSection";
import ProductDescription from './Components/ProductDescription';
import AddToCartButton from "./Components/AddToCartButton";
import CartPage from "./Components/CartPage";
import logo from './assets/logo.svg';
import cartLogo from './assets/icon-cart.svg';
import avatar from './assets/image-avatar.png';
import images from './assets/images.json'
import description from './assets/description.json';
import {useState} from "react";

function App() {
    const [visibility,setVisibility] = useState(false);
    const navOptions = ["Collections", "Men", "Women", "About", "Contact"];
    const productThumbnails = images.thumbnails.map(thumbnail => require(`./assets/${ thumbnail }`));
    const productImages =images.productImages.map(image => require(`./assets/${ image }`));

    function onCartClick()
    {
        setVisibility(true);
    }

    return (
        <>
            <div className="App">
                <Navbar
                    Weblogo={logo}
                    navOptions={navOptions}
                    cart={cartLogo}
                    cartClick={onCartClick}
                    userAvatar={avatar}
                />
                <ImageSection pThumbnails={productThumbnails} pImages={productImages} />
                <ProductDescription company={description.companyName} name={description.name} promo={description.promo} description={description.description} price={description.price} discount={description.discount}  />
                <AddToCartButton cartLogo={cartLogo}/>

                {(visibility) && (<CartPage name={description.name} price={description.price} quantity={description.quantity} />)}

            </div>

        </>
    );
}

export default App;
