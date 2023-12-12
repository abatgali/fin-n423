import React from "react";

export default function GasCard({
    onClick,
    name,
    gasoline,
    midGrade,
    premium,
    diesel,
}) {
    return (
        <>
            <div className="card" key={name}>
                <div className="content">
                    <div className="header pb-5" style={{ padding: '10px' }}>{name}</div>
                    <div className="description flex flex-row ">
                        <div className="ui stackable four column grid">
                            <div className="column ui red">Gasoline: ${gasoline}</div>
                            <div className="column ui blue">MidGrade: ${midGrade}</div>
                            <div className="column ui green">Premium: ${premium}</div>
                            <div className="column ui yellow">Diesel: ${diesel}</div>
                        </div>
                    </div>
                </div>
                <div className="ui bottom attached button"
                    onClick={onClick}
                    style={{ cursor: 'pointer' }}
                >
                    <i className="add icon"></i>
                    Keep Track
                </div>
            </div>
        </>
    );
}
