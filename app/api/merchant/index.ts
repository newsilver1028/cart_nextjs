import { gql } from '@apollo/client';

export const GET_MERCHANT_INFO = gql`
  query GetMerchantInfo {
    merchantName
    minimumOrderPrice
    categories {
      categoryId
      categoryName
      items {
        id
        name
        price
      }
    }
    discounts {
      id
      name
      discountRate
    }
  }
`;
