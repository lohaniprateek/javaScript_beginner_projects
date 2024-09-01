import "./index.css";
import PropTypes from 'prop-types';

function Contacts(props) {
  return (
    <>
      <div className="Card">
        <img src={props.img} alt="" />
        <h2 className="txt">{props.name}</h2>
        <p  className="txt">{props.tel}</p>
        <p  className="txt">{props.rel}</p>
        <button>Call</button>
      </div>
    </>
  );
}

Contacts.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  rel: PropTypes.string.isRequired
};


export default Contacts;