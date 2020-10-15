import React, { createRef } from 'react';
import DetailItem from './DetailItem/DetailItem';
import './LaunchItem.css';

function LaunchItem(props) {
    const ref = createRef();
    function addDefaultSrc(ev){
        ev.target.src = 'https://4.bp.blogspot.com/-Q4vQEt_IgOM/VS_WNaep1_I/AAAAAAAAn3Y/XtohJOmnvU4/s1600/0VzcUgx.png'
      }
    //debugger;
    return (
        <div className="launch-item">
            <div className="figure-item">
                {/* <img src={props.mission_patch_small} onError="this.onerror=null; this.src='../../../../../10m.jpeg';" /> */}
                <img onError={addDefaultSrc} className="img-responsive" src={props.mission_patch_small} alt={props.mission_name}/>
            </div>
            <p ref={ref} className="launch-name">{props.mission_name}  #{props.flight_number}</p>
            <DetailItem value={props.mission_id} label="Mission Ids" />
            <DetailItem value={props.launch_year} label="Launch Year" />
            <DetailItem value={props.launch_success} label="Successful Launch" />
            <DetailItem value={props.landing_success} label="Successful Landing" />
        </div>
    );
}

export default LaunchItem;