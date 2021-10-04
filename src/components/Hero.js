import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';

const Hero = () => {
  const { handleSubmit, control, errors } = useForm();

  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <form className='search-form'>
          <li>
            <label>
              Where to?
              <select className='select-form'>
                <option value='All'>All</option>
                <option value='Merida'>Merida</option>
                <option value='YucatanCoast'>Yucatan Coast</option>
                <option value='QuintanaRoo'>Quintana Roo</option>
              </select>
            </label>
          </li>
          <li>
            Arrival
            <Controller
              name='arrival'
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <DatePicker
                  onChange={(e) => field.onChange(e)}
                  selected={field.value}
                  placeholderText='Arrival'
                />
              )}
            />
          </li>
          <li>
            Departure
            <Controller
              name='departure'
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <DatePicker
                  onChange={(e) => field.onChange(e)}
                  selected={field.value}
                  placeholderText='Departure'
                />
              )}
            />
          </li>
          <li>
            <label>
              Guest
              <select className='select-form'>
                <option value='1'>1 Guest</option>
                <option value='2'>2 Guest</option>
                <option value='3'>3 Guest</option>
                <option value='4plus'>4+ Guest</option>
              </select>
            </label>
          </li>
        </form>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  .search-form {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
  }

  .select-form {
    width: 20%;
    float: left;
    box-sizing: border-box;
    height: 49px;
    border: none;
    text-align: center;
    background-color: #fff;
    border-right: 1px dotted #777;
    background-repeat: no-repeat;
    background-position: right 18px center;
    font-family: 'ProximaNova';
    font-size: 13px;
    color: #545452;
    cursor: pointer;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    line-height: 25px;
    box-shadow: none;
  }
  .front-page-searchhomes-inner {
    display: inline-block;
    width: 100%;
    max-width: 850px;
    position: relative;
    vertical-align: bottom;
  }
`;

export default Hero;
