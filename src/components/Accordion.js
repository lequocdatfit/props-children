import React, { Component } from 'react'

class Accordion extends Component{
    constructor(props) {
        super(props);
        this.state = {
            'isCollapsed': false
        }
        this.onClick = this.onClick.bind(this);
    }


    onClick() {
        const isCollapsed = this.state.isCollapsed;
        this.setState({
            'isCollapsed': !isCollapsed
        })
    }
    render() {
        const {heading, children} = this.props;
        return (
            <div className="Accordion">
                <div className="Heading" onClick={this.onClick}>{heading}</div>
                {
                  !this.state.isCollapsed && <div className="Content">{children}</div>
                }
            </div>
        )
    }
}

export default Accordion;