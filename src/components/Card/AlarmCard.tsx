import React from 'react';
import '../../styles/components/Card/AlarmCard.css';

interface AlarmCardProps {
  type: string;
  date: string;
  content: string;
}

const AlarmCard = (props: AlarmCardProps) => {
  return (
    <div className={'alarm-card-container'}>
      <span className={'alarm-card-date'}>{props.type}</span>
      <span className={'alarm-card-date'}>{props.date}</span>
      <span className={'alarm-card-content'}>{props.content}</span>
    </div>
  );
};

export default AlarmCard;
