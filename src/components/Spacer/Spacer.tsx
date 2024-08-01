import styled, { DefaultTheme } from 'styled-components/native';

interface ISize {
  [key: string]: number;
}

interface IPosition {
  [key: string]: string;
}

const sizesVariant: ISize = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionsVariant: IPosition = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
};

interface ISpacerProps {
  size: 'small' | 'medium' | 'large';
  position: 'top' | 'left' | 'right' | 'bottom';
  theme: DefaultTheme;
}

const getVariant = ({ position, size, theme }: ISpacerProps) => {
  const sizeIndex = sizesVariant[size];
  const sizeValue = theme.space[sizeIndex];
  const property = positionsVariant[position];

  return `${property}: ${sizeValue}`;
};

export const Spacer = styled.View<ISpacerProps>`
  ${({ size = 'small', position = 'top', theme }) =>
    getVariant({ position, size, theme })}
`;
