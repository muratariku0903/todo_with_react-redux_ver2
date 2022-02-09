import React from 'react';
import { connect } from 'react-redux';
import { State } from '../redux/types';
import { toggleTodo, setFilterAction, TodoActions } from '../redux/actions';
import { Dispatch } from 'redux';
import { VisibilityFilterTypes } from '../redux/types';
import { VISIBILITY_FILTERS } from '../constants';
import { useState } from 'react';

type VisibilityFiltersProps = {
    filterType: VisibilityFilterTypes;
    setFilter: (filter: VisibilityFilterTypes) => TodoActions;
}

const VisibilityFilters: React.FC<VisibilityFiltersProps> = (props) => {
    const [selectedFilter, setSelectedFilter] = useState<VisibilityFilterTypes>('all');

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === 'completed') {
            setSelectedFilter('completed');
        } else if (e.target.value === 'incomplete') {
            setSelectedFilter('incomplete');
        } else {
            setSelectedFilter('all');
        }
    }

    const onClick = () => {
        props.setFilter(selectedFilter);
    }

    return (
        <div>
            <span>{props.filterType}</span>
            <select onChange={onChange}>
                {(Object.keys(VISIBILITY_FILTERS) as Array<keyof typeof VISIBILITY_FILTERS>).map((filterKey) => {
                    return <option key={filterKey} value={VISIBILITY_FILTERS[filterKey]}>{filterKey}</option>
                })}
            </select>
            <button onClick={onClick}>filter</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setFilter: (filter: VisibilityFilterTypes) => dispatch(setFilterAction(filter))
    };
}

const mapStateToProps = (state: State) => {
    return { filterType: state.visibilityFilter };
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilters);
