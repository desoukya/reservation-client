import ReservationForm from '../ui/ReservationForm';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { addReservation } from '../../actions';

const mapStateToProps = (state, props) =>
	({
		router: props.router
	});

const mapDispatchToProps = dispatch =>
	({
		onNewReservation(reservation) {
			dispatch(
				addReservation(reservation)
			);
		}
	});

const Container = connect(mapStateToProps, mapDispatchToProps)(ReservationForm);

export default withRouter(Container);
