import ReservationItem from '../ui/ReservationItem';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { setReservation } from '../../actions';

const mapStateToProps = (state, props) =>
  ({
    router: props.router
  });

const mapDispatchToProps = dispatch =>
  ({
    onSetReservation(reservationId) {
      dispatch(
        setReservation(reservationId)
      );
    }
  });

const Container = connect(mapStateToProps, mapDispatchToProps)(ReservationItem);

export default withRouter(Container);
