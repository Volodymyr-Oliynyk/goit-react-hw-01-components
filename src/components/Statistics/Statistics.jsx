import React from "react";
import PropTypes from "prop-types";


export default function Statistics ({title, stats}) {
    return (
        <section className="statistics">
            <h2>{title}</h2>
            <ul>
                {stats.map(({ id, label, percentage }) => (
                    <li key={id}>
                        <span className="label">{label}</span>
                        <span className="percentage">{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf( PropTypes.object ).isRequired
  };