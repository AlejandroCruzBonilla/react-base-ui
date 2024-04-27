export interface ButtonProps {
  /**
   * Button Label
   */
  label?: string;
  /**
   * Button children can be a React.ReactNode
   */
  children?: React.ReactNode;
  /**
   * Button onClick Event
   */
  onClick?: () => void;
}
