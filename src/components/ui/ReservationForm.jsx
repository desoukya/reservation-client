import React, { Component}  from 'react';
import DateTime from 'react-datetime';

export default class ReservationForm extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault();

        this.props.onNewReservation({
            name: this._name.value,
            hotelName: this._hotelName.value,
            arrivalDate: this._arrivalDate.value,
            departureDate: this._departureDate.value
        });

        this._name.value = '';
        this._hotelName.value = '';
        this._arrivalDate.value = '';
        this._departureDate.value = '';
    }


    render() {
        return (<form onSubmit={this.submit}>
                <div className="form-group">
                    <label htmlFor="resName">Name</label>
                    <input ref={input => this._name = input} type="text" className="form-control" id="resName" placeholder="Enter Your Name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="hotelName">Hotel Name</label>
                    <input ref={input => this._hotelName = input} type="text" className="form-control" id="hotelName" placeholder="Enter Hotel Name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="arrivalDate">Arrival Date</label>
                    <DateTime inputProps={{required: true, id: "arrivalDate", ref: input => this._arrivalDate = input}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="departureDate">Departure Date</label>
                    <DateTime inputProps={{required: true, id: "departureDate", ref: input => this._departureDate = input}}/>
                </div>
                <button type="submit" className="btn btn-primary float-right">Add Reservation</button>
                </form>);
    }
}
