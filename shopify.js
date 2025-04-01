import {createStorefrontApiClient} from '@shopify/storefront-api-client'

const client = createStorefrontApiClient({
  storeDomain: process.env.SHOPIFY_STORE_URL,
  publicAccessToken: process.env.SHOPIFY_STOREFRONT_TOKEN,
  apiVersion: '2024-10'
})

export default client;