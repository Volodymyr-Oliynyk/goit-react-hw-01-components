import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsCard,
  Title,
  StatList,
  StatItem,
  LineText,
} from './StatisticsStyled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsCard>
      <Title>{title}</Title>
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <LineText>{label}</LineText>
            <LineText>{percentage}%</LineText>
          </StatItem>
        ))}
      </StatList>
    </StatisticsCard>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
