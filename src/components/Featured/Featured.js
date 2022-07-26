import './Featured.css';
const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://t-cf.bstatic.com/xdata/images/city/square250/666853.webp?k=b2212159e829c00b8b19af72b6211b25325d70811829e2eb4ef1045f8a568be5&o="
          alt="sport pictures"
        />
        <div className="featuredTitles">
          <h1>Dhaka</h1>
          <h2>255 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://t-cf.bstatic.com/xdata/images/city/square250/688201.webp?k=586e76aa55aa92d886eaf5837e288d77e15c9b81534bd4c7121d0d020e99064d&o="
          alt="sport pictures"
        />
        <div className="featuredTitles">
          <h1>Dhaka</h1>
          <h2>255 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://t-cf.bstatic.com/xdata/images/city/square250/761433.webp?k=21910a5884ba4c680badac1131347de875f68cf188a389376d8b5b2f7a75582e&o="
          alt="sport pictures"
        />
        <div className="featuredTitles">
          <h1>Dhaka</h1>
          <h2>255 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
