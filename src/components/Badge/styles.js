import styled from 'styled-components';

export const BadgeWrapper = styled.div`
  background-color: #f47a65;
  box-shadow: 0 1px 3px rgba(10,50,54,.1);
  position: relative;
  padding: 10px 0 6px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  border-radius: 3px;
  line-height: 1;
  font-family: 'NeurialGrotesk-Regular';
`;

export const TopText = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  margin-bottom: auto;
`;

export const BadgeLanguage = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: calc(100% - 10px);
  flex-shrink: 10;
  min-height: 0;
`;

export const BadgeIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 4px;
`;

export const BadgeText = styled.div`
  font-size: 11px;
  white-space: normal;
  line-height: 1.2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 700;
  text-align: center;
  min-width: 0;
  flex-shrink: 10;
`;
