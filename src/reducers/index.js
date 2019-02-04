import { combineReducers } from "redux";

const initialVis = "none";
const initialExp = false;
const initialHid = true;

let visible;
let expanded;
let hidden;

const visibleReducer = (state = initialVis, action) => {
    switch (action.type) {
        case 'TOGGLE':
        if (action.payload.visible === "none") {
            visible = "table-row";
            return visible;
        } else {
            visible = "none";
            return visible;
        }
        default:
        return state;
    }
  
};

const expandedReducer = (state = initialExp, action) => {
    switch (action.type) {
        case 'TOGGLE':
        if (action.payload.expanded === false) {
            expanded = true;
            return expanded;
        } else {
            expanded = false;
            return expanded;
        }
        default:
        return state;
    }
  
};

const hiddenReducer = (state = initialHid, action) => {
    switch (action.type) {
        case 'TOGGLE':
        if (action.payload.hidden === true) {
            hidden = false;
            return hidden;
        } else {
            hidden = true;
            return hidden;
        }
        default:
        return state;
    }
  
};

export default combineReducers({
    visible: visibleReducer,
    expanded: expandedReducer,
    hidden: hiddenReducer
});