
import defaultIcon from "../assets/exchange-icon.jpg";

const ExchangesCard = ({ exchange }) => {
  //console.log(exchange);
  return (
    <div onClick={() => console.log(exchange)} className="card">
          <div className="img-wrapper">
            <img
              src={exchange.icon ? exchange.icon : defaultIcon}
              alt={exchange.name}
            />
          </div>
          <h4>{exchange.name}</h4>
      </div>
  );
};

export default ExchangesCard;
