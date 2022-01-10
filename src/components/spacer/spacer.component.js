import styled from "styled-components/native"; // we import this in order to have Theming from styled components that allows all styled components to have access to the provided theme even when they are multiple levels deep

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

export const Spacer = styled.View`
  ${
    (
      { position, size, theme } // we destructure off of the props. we are getting the props off of the prop values
    ) => getVariant(position, size, theme) // we run the getVariant function that returns a string e.g. marginLeft: 3
  }
`;

Spacer.defaultProps = {
  position: "top", // we default position to top
  size: "small", // we default position to small
};
