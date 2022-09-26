import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  color: black;
  font-size: 20px;
  margin-right: 10px;

  :last-child {
    margin-right: 0;
  }

  &.active {
    color: red;
    font-weight: 700;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  /* flex-direction: row;
  align-items: flex-start; */
`;

export const Poster = styled.img`
  width: 100%;
`;

export const PosterThumb = styled.div`
  overflow-x: hidden;
  border-radius: 5px;
  min-width: 240px;
  min-height: 357px;
  margin-right: 20px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.0666666667;
  color: #000;
  letter-spacing: 0;
  margin-bottom: 10px;
`;

export const Table = styled.table`
  width: 100%;
  border: none;
  text-align: left;
  border-collapse: separate;
  margin-bottom: 10px;
`;
export const Head = styled.th`
  font-weight: 500;
  font-size: 15px;
  line-height: 1.3333333333;
  letter-spacing: 0;
  padding-bottom: 8px;
`;

export const Data = styled.td`
  /* font-weight: 500; */
  font-size: 15px;
  line-height: 1.3333333333;
  letter-spacing: 0;
  padding-bottom: 8px;

  color: #000;
  /* padding-left: 50px; */
`;

export const Rating = styled.span`
  padding: 1px 10px;
  color: #000;
  background-color: #f7f7f7;
  border-radius: 5px;

  font-weight: 500;
  font-size: 15px;
  line-height: 1.1666666667;
  letter-spacing: 0;
`;
export const RatingAccent = styled.span`
  padding: 1px 10px;
  color: #000;
  background-color: #f7f7f7;
  border-radius: 5px;

  font-weight: 500;
  font-size: 15px;
  line-height: 1.1666666667;
  letter-spacing: 0;

  color: #fff;
  background-color: #ff6b08;
`;

export const AboutSubtitle = styled.p`
  font-weight: 500;
  font-size: 15px;
  color: #000;
  letter-spacing: 0;
  text-transform: uppercase;
  line-height: 1.3333333333;
  margin-bottom: 10px;
`;

export const Overview = styled.p`
  line-height: 1.6666666667;
  font-size: 15px;
  color: #000;
  letter-spacing: 0;
`;

export const AdditionalSubtitle = styled.p`
  font-weight: 500;
  font-size: 17px;
  color: #000;
  letter-spacing: 0;
  text-transform: uppercase;
  line-height: 1.3333333333;
  margin-top: 10px;
  margin-bottom: 10px;
`;
// .details-popup {
//   display: flex;
//   flex-direction: column;

//   @include breakpoint(tablet) {
//     flex-direction: row;
//     align-items: flex-start;
//   }

//   &__thumb {
//     overflow-x: hidden;
//     border-radius: 5px;
//     min-width: 240px;
//     min-height: 357px;

//     @include breakpoint(tablet) {
//       min-width: 264px;
//       min-height: 370px;
//     }

//     @include breakpoint(desktop) {
//       min-width: 375px;
//       min-height: 470px;
//       height: auto;
//     }

//     & img {
//       // border-radius: 5px;
//     }
//   }

//   &__info {
//     margin-left: 0;
//     margin-top: 20px;

//     @include breakpoint(tablet) {
//       margin-top: 0;
//       margin-left: 20px;
//       width: 350px;
//     }

//     @include breakpoint(desktop) {
//       margin-left: 16px;
//       width: 400px;
//     }
//   }

//   &__block {
//     margin-top: 20px;
//   }

//   &__menu {
//     display: flex;
//     align-items: center;
//     // flex-wrap: wrap;
//     margin-left: -15px;
//     margin-top: 0px;
//   }

//   &__menu_item {
//     margin-top: 15px;
//     margin-left: 15px;
//   }

//   &__title {
//     @include font(500, 20px, 22px);
//     text-transform: uppercase;

//     @include breakpoint(desktop) {
//       @include font(500, 30px, 32px);
//     }
//   }

//   &__subtitle {
//     text-transform: uppercase;
//     @include font(500, 12px, 16px);
//   }

//   &__description {
//     @include font(500, 12px, 20px);
//   }
// }

// .ranks-table {
//   width: 100%;
//   border: none;
//   text-align: left;
//   border-collapse: separate;

//   &__head {
//     @include font(500, 12px, 16px, #8c8c8c);
//     padding-bottom: 8px;
//   }

//   &__cell {
//     @include font(500, 12px, 16px);
//     padding-left: 50px;
//     padding-bottom: 8px;
//   }
// }

// .details-popup__thumb {
//   position: relative;
// }
