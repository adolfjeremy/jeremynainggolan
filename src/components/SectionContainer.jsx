import PropTypes from "prop-types";
function SectionContainer({ children }) {
    return <section className="container">{children}</section>;
}

SectionContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SectionContainer;
