import ReservationList from '../ui/ReservationList';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { addReservation } from '../../actions';

const mapStateToProps = (state, props) =>
	({
        reservations: state.reservations,
		router: props.router
	});


const Container = connect(mapStateToProps)(ReservationList);

export default withRouter(Container);
