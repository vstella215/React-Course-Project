import { useSelector } from "react-redux";
import { Col } from "reactstrap";
import Partner from "./Partner";
import { selectAllPartner } from "./partnersSlice";

const PartnersList = () => {
  const partners = useSelector(selectAllPartner);

  return (
    <Col className="mt-4">
      {partners.map((partners) => {
        return (
          <div className="d-flex mb-5" key={partners.id}>
            <Partner partner={partners} />
          </div>
        );
      })}
    </Col>
  );
};

export default PartnersList;
