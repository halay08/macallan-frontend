import styled from 'styled-components/macro';
import Picker from 'react-month-picker';
import { useRef } from 'react';
import isEmpty from 'ramda.isempty';

const MONTHS = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC'
];

type Props = {
  onFilterChange: Function;
  value: { month?: number; year?: number };
};

export const MonthFilter = ({ value, onFilterChange }: Props) => {
  const ref = useRef();

  const onChange = (year, month) => {
    const value = { month, year };
    if (!value || isEmpty(value)) return;

    onFilterChange(value);
    if (!ref || !ref.current) return;
    (ref.current as any).dismiss();
  };

  const formatValue = () => {
    const { month, year } = value;
    if (!month || !year) return '';

    return `${MONTHS[month - 1]}. ${year}`;
  };

  const handleOpen = () => {
    if (!ref || !ref.current) return;
    (ref.current as any).show();
  };

  return (
    <Picker
      ref={ref}
      years={{ min: { year: 2015 }, max: { year: 2025 } }}
      value={isEmpty(value) ? { year: new Date().getFullYear() } : value}
      lang={MONTHS}
      onChange={onChange}
    >
      <div onClick={handleOpen}>
        <Input
          className="font-MyriadPro border border-solid border-gray-light py-1 px-2 w-full"
          readOnly
          placeholder="Search Month"
          value={formatValue()}
        />
      </div>
    </Picker>
  );
};

const Input = styled.input`
  background-image: url(/assets/others/calendar.svg);
  background-repeat: no-repeat;
  background-position: right;
`;
