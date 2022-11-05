import React from "react";
// import tuitsArray from '../data/tuits.json';
import {useSelector} from "react-redux";
import TuitsItem from "./tuits-item";

const TuitsList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                tuitsArray.map(tuit =>
                                   <TuitsItem
                                       key={tuit._id} tuit={tuit}/> )
            }
        </ul>
    );
};
export default TuitsList;