import React, { useState, useEffect } from "react";

//Import style
import "./CompanyDetails.css";

//Import UI components
import { Col, Container, Row, Jumbotron, Breadcrumb } from "react-bootstrap";

//Import redux components
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/index";

//Import utils
import { useHistory } from "react-router-dom";

const CompanyDetails = (props) => {
  const history = useHistory();
  const [company, setCompany] = useState({});

  useEffect(() => {
    async function callFetchCompanyById() {
      let { id } = history.location.state;
      props.getCompanyById(id);
    }
    callFetchCompanyById();
  }, []);

  useEffect(() => {
    if (company !== props.company) {
      setCompany(props.company);
    }
  }, [props.company]);

  return (
    <Container className="App">
      <Jumbotron fluid>
        <Row>
          <Col>
            <h1 style={{ margin: "20px 0", color: "#566787" }}>
              Company Details
            </h1>
          </Col>
        </Row>
      </Jumbotron>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/companies">Companies</Breadcrumb.Item>
        <Breadcrumb.Item active>
          {company && company.name ? company.name : "-"}
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Col>
          <table>
            <tbody>
              <tr>
                <th scope="row">ID</th>
                <td>{company && company.id ? company.id : "-"}</td>
              </tr>
              <tr>
                <th scope="row">Name</th>
                <td>{company && company.name ? company.name : "-"}</td>
              </tr>
              <tr>
                <th scope="row">City</th>
                <td>{company && company.city ? company.city : "-"}</td>
              </tr>
              <tr>
                <th scope="row">Website</th>
                <td>{company && company.website ? company.wesite : "-"}</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    company: state.companies.companyDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCompanyById: (id) => dispatch(actions.findCompanyById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetails);