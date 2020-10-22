import React, { useState, useEffect } from "react";

//Import style
import "./Campanies.css";

//Import UI components
import { Col, Container, Row, Jumbotron } from "react-bootstrap";

//Import components
import DataTable from "../../Tables/DataTable";
import ReactPaginate from "react-paginate";

//Import Redux components
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/index";


const CompaniesList = (props) => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function callFetchCompanies() {
      props.getCompanies();
    }
    callFetchCompanies();
  }, []);

  useEffect(() => {
    if (companies !== props.companies) {
      setCompanies(props.companies);
    }
  }, [props.companies]);

  const hideCompany = (id) => {
    async function callFetchCompanies() {
      props.getCompanies(id);
    }
    callFetchCompanies();
  };

  const handlePageClick = (data) => {
    props.getCompanies(null, data.selected + 1);
  };

  return (
    <Container className="App">
      <Jumbotron fluid>
        <Row>
          <Col>
            <h1 style={{ margin: "20px 0", color: "#566787" }}>
              Companies List
            </h1>
          </Col>
        </Row>
      </Jumbotron>
      <Row>
        <Col>
          <DataTable items={companies} hideCompany={hideCompany} />
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            breakLabel={<span className="gap">...</span>}
            pageCount={props.companiesCount / 100}
            onPageChange={handlePageClick}
            forcePage={0}
            containerClassName={"pagination"}
            previousLinkClassName={"previous_page"}
            nextLinkClassName={"next_page"}
            disabledClassName={"disabled"}
            activeClassName={"active"}
          />
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    companies: state.companies.companiesList,
    companiesCount: state.companies.companiesCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCompanies: (companyToHide, page) =>
      dispatch(actions.findAllCompanies(companyToHide, page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesList);