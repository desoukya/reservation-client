import ReservationDetails from '../ui/ReservationDetails';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) =>
  ({
    reservation: state.reservation,
    router: props.router
  });


const Container = connect(mapStateToProps)(ReservationDetails);

export default withRouter(Container);
