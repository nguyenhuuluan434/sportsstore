import React, { Component } from "react";
import { ToggleLink } from "../ToggleLink";
export class CategoryNavigation extends Component {
    render() {
        // The CategoryNavigation component receives the array of categories through a prop named categories.
        return <React.Fragment>
            <ToggleLink to={this.props.baseUrl} exact={true}>All</ToggleLink>
            {this.props.categories && this.props.categories.map(category =>
                <ToggleLink key={category}
                    to={`${this.props.baseUrl}/${category.toLowerCase()}`}>
                    {category}
                </ToggleLink>
            )}
        </React.Fragment>
    }
}
