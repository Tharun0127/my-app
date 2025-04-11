import Item from "./Item";
import { PRODUCTS, SERVICES, COMPANY, CONTACT } from "./Menus";

const ItemsContainer = () => {
  return (
    <div className="flex  items-center justify-between  pr-5 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <a href="./products">
        <Item Links={PRODUCTS} title="PRODUCTS" />
      </a>
      <a href="./products"></a>
      <a href="./products"></a>

      {/* <Item Links={COMPANY} title="COMPANY" /> */}

      {/* Google Maps Location Link and Embedded Map */}
      <div>
        {/* Google Maps Link */}

        {/* Embedded Google Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.051795385968!2d78.44304911536598!3d17.467927188033188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90f71799bff7%3A0x6f59bafe5327d2be!2sSri%20Sai%20Enterprises!5e0!3m2!1sen!2sin!4v1696948498291!5m2!1sen!2sin"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ItemsContainer;
