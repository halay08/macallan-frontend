import styled from 'styled-components/macro';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

type Props = {
  onFilterChange: Function;
  value: { [key: number]: boolean };
};

export const MonthFilter = ({ value, onFilterChange }: Props) => {
  const onChange = (index: number) => {
    onFilterChange({
      ...value,
      [index]: !value[index]
    });
  };

  const onReset = () => {
    onFilterChange({});
  };

  return (
    <>
      {MONTHS.map((m, index) => (
        <Label key={m} className="font-secondary flex items-center">
          {m}
          <Input
            name={m}
            type="checkbox"
            checked={!!value[index]}
            onChange={() => onChange(index)}
          />
          <CheckMark></CheckMark>
        </Label>
      ))}
      <ResetButton
        onClick={onReset}
        className="font-secondary focus:outline-none hover:underline"
      >
        Reset
      </ResetButton>
    </>
  );
};

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 1.25rem;
  width: 1.25rem;
  border: 1px solid #dddddd;

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

const Label = styled.label`
  display: block;
  position: relative;
  font-size: 12px;
  letter-spacing: 1px;
  padding-left: 1.75rem;
  margin-bottom: 0.75rem;
  line-height: 1.25rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & input:checked ~ ${CheckMark} {
    background-color: #f9dc06;
  }

  & input:checked ~ ${CheckMark}:after {
    display: block;
  }

  & ${CheckMark}:after {
    left: 5px;
    top: 1px;
    width: 7px;
    height: 12px;
    border: solid #252525;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const ResetButton = styled.button`
  color: #1962ae;
  font-size: 12px;
`;
