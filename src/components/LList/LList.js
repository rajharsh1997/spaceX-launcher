import React from 'react';
import LaunchItem from './LaunchItem/LaunchItem'
import './LList.css';

class LauchList extends React.Component {

    state = {
        slicedIndex: 12,
    }
    lastElement = React.createRef(null);

    render() {
        let launchItems;
        if (this.props.launchData && this.props.launchData.length) {
            launchItems = this.props.launchData.map((data, i) => {
                return <LaunchItem
                    mission_patch_small={data.mission_patch_small}
                    mission_name={data.mission_name}
                    mission_id={data.mission_id}
                    launch_year={data.launch_year}
                    launch_success={data.launch_success}
                    landing_success={data.landing_success}
                    flight_number={data.flight_number}
                    key={data.flight_number}
                    {...(i === (this.state.slicedIndex - 1) && { ref: this.lastElement })}
                />
            }
            )
        } else {
            launchItems = <div className="no-data"><h2>No data available :(</h2></div>
        }

        return (
            <div className="launch-list" >
                { launchItems}
            </div>
        );
    }
}

export default LauchList;