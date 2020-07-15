import React, {Component} from "react";
import {Link} from "react-router-dom";

//this component receive data via cartItems and cartPrice props
export class CartSummary extends Component {

    getSummary = () => {
        if (this.props.cartItems <= 0) {
            return <span>Your cart: (empty) </span>
        }
        debugger;
        let span = <span>
                {this.props.cartItems} item(s),
                {/*${this.props.cartPrice.toFixed(2)}*/}
            </span>;
        return  span
    }

    getLinkClasses = () => {
        return `btn btn-sm bg-dark text-white 
            ${this.props.cartItems === 0 || this.props.cartItems < 0 ? "disabled" : ""}`;
    }

    render() {
        return <div className="float-right">
            <small>
                {this.getSummary()}
                <Link className={this.getLinkClasses()}
                      to="/shop/cart">
                    <i className="fa fa-shopping-cart"/>
                </Link>
            </small>
        </div>
    }
}