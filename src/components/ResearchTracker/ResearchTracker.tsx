import React from 'react';
import './ResearchTracker.css';
import consumers from '../../data/consumers.json'
import producers from '../../data/producers.json'
import BuildingResearchInput from './BuildingResearchInput';

interface Building {
    name: string
}

interface Consumer extends Building {
    raw_resource: string
    consumption_rate: number
}

interface Producer extends Building {
    production_resource: string
    production_amount: number
    production_time: number,
    consumption_resource: string | null,
    consumption_amount: number
}

const ResearchTracker = () => {
    const buildings: Building[] = [];

    buildings.push(...consumers);
    buildings.push(...producers);

    return (
        <div className="ResearchTracker">
            {
                buildings.map(b => <BuildingResearchInput building={b.name}/>)
            }
        </div>
    );
}

export default ResearchTracker;
