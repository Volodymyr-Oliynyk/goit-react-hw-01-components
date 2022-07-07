import styled from "styled-components";

export const FriendContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 0px;
  margin-top: 50px;
`
export const Item = styled.li`
  margin-top: 10px;
  display: flex;
  align-items: center;
  padding: 18px;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 10px;
  cursor: pointer;
  transform: scale(1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: teal;
    color: ${props => props.theme.colors.text};
  }
`;
export const OnlineLabel = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({theme, isOnline}) => isOnline ? theme.colors.online : theme.colors.offline};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  object-fit: cover;
  width: 30px;
  border-radius: 50%;
  margin-left: 30px;
`;

export const Title = styled.span`
  margin-left: 10px;
`;