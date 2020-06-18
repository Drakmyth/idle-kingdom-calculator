import React from 'react';

interface BuildingResearchInputProps {
    building: string
}

const BuildingResearchInput = (props: BuildingResearchInputProps) => {
    return (
        <div className="BuildingResearchInput">
            <p>{props.building}</p>
            <input></input>
        </div>
    );
}

export default BuildingResearchInput;
