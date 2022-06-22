import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4onb9ir0fpy01xnbq0kd32b/master',
  cache: new InMemoryCache(),
})
