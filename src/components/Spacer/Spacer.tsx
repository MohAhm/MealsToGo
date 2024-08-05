import React from 'react';
import styled, { DefaultTheme, useTheme } from 'styled-components/native';

enum ESize {
  small = 1,
  medium,
  large,
}

enum EPosition {
  top = 'marginTop',
  left = 'marginLeft',
  right = 'marginRight',
  bottom = 'marginBottom',
}

interface ISpacerProps {
  size: keyof typeof ESize;
  position: keyof typeof EPosition;
  theme: DefaultTheme;
}

const getVariant = ({ position, size, theme }: ISpacerProps) => {
  const sizeIndex = ESize[size];
  const sizeValue = theme.space[sizeIndex];
  const property = EPosition[position];

  return `${property}: ${sizeValue}`;
};

const SpacerView = styled.View<{ variant: string }>`
  ${({ variant }) => variant}
`;

type TSpacerProps = {
  position?: keyof typeof EPosition;
  size?: keyof typeof ESize;
  children?: React.ReactNode;
};

export const Spacer = ({
  position = 'top',
  size = 'small',
  children,
}: TSpacerProps) => {
  const theme = useTheme();
  const variant = getVariant({ position, size, theme });

  return <SpacerView variant={variant}>{children}</SpacerView>;
};
