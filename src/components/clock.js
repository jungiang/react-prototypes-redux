import React from 'react';
import {connect} from 'react-redux';
import updateTime from '../actions/index'

class Clock extends React.Component{
    componentDidMount(){
        setInterval(this.props.updateTime, 1000)
    }
    render(){
        return(
            <div className="text-center mt-5">
                <h1>{this.props.time}</h1>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        time: state.clock.time
    }
)

export default connect(mapStateToProps, {updateTime})(Clock);